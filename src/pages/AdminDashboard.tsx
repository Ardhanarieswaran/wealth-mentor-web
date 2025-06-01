import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LogOut, Upload, Edit, Trash2, Plus, Save, Image, FileText, Settings, Eye, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useCourses } from '@/hooks/useCourses';
import { useContactSubmissions } from '@/hooks/useContactSubmissions';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const { courses, isLoading: coursesLoading, updateCourse, deleteCourse } = useCourses();
  const { submissions, isLoading: submissionsLoading, updateStatus, deleteSubmission } = useContactSubmissions();

  // Check authentication on component mount
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated');
    const loginTime = localStorage.getItem('adminLoginTime');
    
    if (!isAuthenticated || !loginTime) {
      navigate('/admin/login');
      return;
    }
    
    // Check if session is expired (24 hours)
    const currentTime = Date.now();
    const sessionAge = currentTime - parseInt(loginTime);
    const maxSessionAge = 24 * 60 * 60 * 1000; // 24 hours
    
    if (sessionAge > maxSessionAge) {
      handleLogout();
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminLoginTime');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/admin/login');
  };

  const handlePasswordChange = () => {
    // Get current stored credentials
    const currentStoredPassword = localStorage.getItem('adminPassword') || 'admin123';

    // Validate current password
    if (passwordForm.currentPassword !== currentStoredPassword) {
      toast({
        title: "Error",
        description: "Current password is incorrect.",
        variant: "destructive"
      });
      return;
    }

    // Validate new password
    if (passwordForm.newPassword.length < 6) {
      toast({
        title: "Error",
        description: "New password must be at least 6 characters long.",
        variant: "destructive"
      });
      return;
    }

    // Validate password confirmation
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast({
        title: "Error",
        description: "New password and confirmation do not match.",
        variant: "destructive"
      });
      return;
    }

    // Store new password in localStorage (for demo purposes)
    localStorage.setItem('adminPassword', passwordForm.newPassword);

    // Clear form
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });

    toast({
      title: "Password Updated",
      description: "Your admin password has been successfully changed.",
    });
  };

  const handlePasswordInputChange = (field: string, value: string) => {
    setPasswordForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleToggleCourseActive = (courseId: string, currentStatus: boolean | null) => {
    updateCourse({
      id: courseId,
      updates: { is_active: !currentStatus }
    });
  };

  const handleStatusUpdate = (submissionId: string, newStatus: string) => {
    updateStatus({ id: submissionId, status: newStatus });
  };

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'read':
        return 'bg-yellow-100 text-yellow-800';
      case 'replied':
        return 'bg-green-100 text-green-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage your website content and settings</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-green-600 border-green-600">
                Online
              </Badge>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Total Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {coursesLoading ? '...' : courses.length}
                  </div>
                  <p className="text-sm text-gray-600">
                    {coursesLoading ? 'Loading...' : `${courses.filter(c => c.is_active).length} active`}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Contact Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {submissionsLoading ? '...' : submissions.length}
                  </div>
                  <p className="text-sm text-gray-600">
                    {submissionsLoading ? 'Loading...' : `${submissions.filter(s => s.status === 'new').length} new`}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Website Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-2">Live</div>
                  <p className="text-sm text-gray-600">Last updated: Just now</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Admin Session</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600 mb-2">Active</div>
                  <p className="text-sm text-gray-600">Session expires in 24h</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button onClick={() => setActiveTab('courses')} variant="outline" className="h-20 flex-col">
                    <Edit className="h-6 w-6 mb-2" />
                    Manage Courses
                  </Button>
                  <Button onClick={() => setActiveTab('messages')} variant="outline" className="h-20 flex-col">
                    <MessageSquare className="h-6 w-6 mb-2" />
                    View Messages
                  </Button>
                  <Button onClick={() => setActiveTab('media')} variant="outline" className="h-20 flex-col">
                    <Upload className="h-6 w-6 mb-2" />
                    Upload Media
                  </Button>
                  <Button onClick={() => setActiveTab('settings')} variant="outline" className="h-20 flex-col">
                    <Settings className="h-6 w-6 mb-2" />
                    Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Courses Management Tab */}
          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Manage Courses</CardTitle>
                <Button className="finance-gradient text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Course
                </Button>
              </CardHeader>
              <CardContent>
                {coursesLoading ? (
                  <div className="text-center py-4">Loading courses...</div>
                ) : (
                  <div className="space-y-4">
                    {courses.map((course) => (
                      <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-medium">{course.title}</h3>
                            <Badge className={course.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                              {course.is_active ? 'Active' : 'Inactive'}
                            </Badge>
                            <Badge variant="outline">{course.level}</Badge>
                            <Badge variant="outline">{course.duration}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{course.description}</p>
                          <p className="text-sm font-medium text-blue-600">{course.price}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleToggleCourseActive(course.id, course.is_active)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => deleteCourse(course.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Form Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                {submissionsLoading ? (
                  <div className="text-center py-4">Loading messages...</div>
                ) : submissions.length === 0 ? (
                  <div className="text-center py-4 text-gray-500">No messages yet</div>
                ) : (
                  <div className="space-y-4">
                    {submissions.map((submission) => (
                      <div key={submission.id} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-medium">{submission.name}</h3>
                            <p className="text-sm text-gray-600">{submission.email}</p>
                            {submission.phone && (
                              <p className="text-sm text-gray-600">{submission.phone}</p>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={getStatusColor(submission.status)}>
                              {submission.status || 'new'}
                            </Badge>
                            <Select
                              value={submission.status || 'new'}
                              onValueChange={(value) => handleStatusUpdate(submission.id, value)}
                            >
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="new">New</SelectItem>
                                <SelectItem value="read">Read</SelectItem>
                                <SelectItem value="replied">Replied</SelectItem>
                                <SelectItem value="archived">Archived</SelectItem>
                              </SelectContent>
                            </Select>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => deleteSubmission(submission.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-2">{submission.message}</p>
                        <p className="text-xs text-gray-500">
                          Received: {new Date(submission.created_at).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Media Management Tab */}
          <TabsContent value="media" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upload Images</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Drag and drop images here or click to browse</p>
                    <Button onClick={handleImageUpload} variant="outline">
                      Choose Files
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">
                    Supported formats: JPG, PNG, GIF. Max size: 5MB
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upload Documents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Drag and drop documents here or click to browse</p>
                    <Button onClick={handleDocumentUpload} variant="outline">
                      Choose Files
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500">
                    Supported formats: PDF, DOC, DOCX. Max size: 10MB
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Current Media Files</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <img 
                      src="/lovable-uploads/69933a32-8e6d-4ddb-a16b-2ed90f0348c6.png" 
                      alt="Logo" 
                      className="w-full h-20 object-contain mb-2"
                    />
                    <p className="text-sm font-medium">Company Logo</p>
                    <div className="flex justify-end mt-2">
                      <Button size="sm" variant="outline">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Admin Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Admin Username
                  </label>
                  <Input 
                    defaultValue="admin"
                    disabled
                    className="bg-gray-50"
                  />
                  <p className="text-sm text-gray-500 mt-1">Username cannot be changed</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Change Password
                  </label>
                  <div className="space-y-3">
                    <Input 
                      type="password" 
                      placeholder="Current Password"
                      value={passwordForm.currentPassword}
                      onChange={(e) => handlePasswordInputChange('currentPassword', e.target.value)}
                    />
                    <Input 
                      type="password" 
                      placeholder="New Password"
                      value={passwordForm.newPassword}
                      onChange={(e) => handlePasswordInputChange('newPassword', e.target.value)}
                    />
                    <Input 
                      type="password" 
                      placeholder="Confirm New Password"
                      value={passwordForm.confirmPassword}
                      onChange={(e) => handlePasswordInputChange('confirmPassword', e.target.value)}
                    />
                    <Button onClick={handlePasswordChange} variant="outline">
                      Update Password
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Security Information</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Admin sessions expire after 24 hours of inactivity</p>
                    <p>• All admin actions are logged for security purposes</p>
                    <p>• Use strong passwords with at least 8 characters</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
