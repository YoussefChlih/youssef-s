import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, getDocs, orderBy, query, limit, onSnapshot, doc } from 'firebase/firestore';
import { auth, db, analytics } from '../../utils/firebase';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const AdminCommandCenter = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [websiteStats, setWebsiteStats] = useState({
    visitors: 12847,
    pageViews: 45231,
    contactForms: 89,
    downloads: 247
  });
  const [notifications, setNotifications] = useState([]);
  const [liveVisitors, setLiveVisitors] = useState(0);
  const [recentVisits, setRecentVisits] = useState([]);
  const [geoEnabled, setGeoEnabled] = useState(true);

  useEffect(() => {
    // Temporarily bypass Firebase authentication for immediate access
    // Comment out the Firebase auth check and simulate logged in user
    setUser({ email: 'admin@youssefchlih.com', uid: 'temp-admin' });
    setLoading(false);
    loadWebsiteData();
    
    // Original Firebase auth code (commented out):
    // const unsubscribe = onAuthStateChanged(auth, (user) => {
    //   setUser(user);
    //   setLoading(false);
    //   if (user) {
    //     loadWebsiteData();
    //   }
    // });
    // return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setLoginError('Invalid email or password');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const loadWebsiteData = async () => {
    try {
      // Simulate loading data - replace with actual Firebase calls
      const mockNotifications = [
        {
          id: '1',
          message: 'Portfolio updated with new AI projects',
          type: 'success',
          timestamp: new Date(),
          read: false
        },
        {
          id: '2',
          message: 'New contact form submission received',
          type: 'info',
          timestamp: new Date(Date.now() - 3600000),
          read: false
        }
      ];
      
      setNotifications(mockNotifications);
    } catch (error) {
      console.error('Error loading website data:', error);
    }
  };

  const sendNotification = async (message, type = 'info') => {
    try {
      const newNotification = {
        id: Date.now().toString(),
        message,
        type,
        timestamp: new Date(),
        read: false
      };
      
      setNotifications(prev => [newNotification, ...prev]);
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  const navigationTabs = [
    { id: 'overview', label: 'Overview', icon: 'BarChart3' },
    { id: 'analytics', label: 'Analytics', icon: 'TrendingUp' },
    { id: 'content', label: 'Content Updates', icon: 'FileText' },
    { id: 'notifications', label: 'Notifications', icon: 'Bell' },
    { id: 'settings', label: 'Settings', icon: 'Settings' }
  ];

  useEffect(() => {
    // Firestore realtime listeners (enable after auth configured)
    const countersRef = doc(db, 'metrics', 'counters');
    const visitsCol = collection(db, 'visits');

    const unsubCounters = onSnapshot(countersRef, (snap) => {
      const data = snap.data();
      if (data) {
        setWebsiteStats(prev => ({
          ...prev,
          visitors: data.visitors || prev.visitors,
          pageViews: data.pageViews || prev.pageViews
        }));
      }
    });

    const visitsQuery = query(visitsCol, orderBy('timestamp', 'desc'), limit(10));
    const unsubVisits = onSnapshot(visitsQuery, (snap) => {
      const rows = [];
      snap.forEach(doc => rows.push({ id: doc.id, ...doc.data() }));
      setRecentVisits(rows);
      setLiveVisitors(rows.length); // naive approx
    });

    return () => { unsubCounters(); unsubVisits(); };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <span className="text-foreground font-cta">Loading...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center">
        <Helmet>
          <title>Admin Login - Youssef CHLIH Portfolio</title>
        </Helmet>
        
        <div className="max-w-md w-full mx-4">
          <div className="bg-card rounded-2xl border border-border shadow-intelligent p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} color="white" />
              </div>
              <h1 className="text-2xl font-headline text-foreground mb-2">Admin Access</h1>
              <p className="text-muted-foreground font-body">Secure login to portfolio administration</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-cta text-foreground mb-2">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="youssefchlih.ai@gmail.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-cta text-foreground mb-2">Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full"
                />
              </div>

              {loginError && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                  <p className="text-destructive text-sm font-body">{loginError}</p>
                </div>
              )}

              <Button
                type="submit"
                variant="default"
                className="w-full font-cta"
                iconName="LogIn"
                iconPosition="left"
              >
                Sign In
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-xs text-muted-foreground font-body">
                Protected by Firebase Authentication
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Admin Command Center - Youssef CHLIH Portfolio</title>
      </Helmet>
      
      <Header />
      
      <div className="pt-16">
        {/* Admin Header */}
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Command" size={20} color="white" />
                </div>
                <div>
                  <h1 className="font-headline text-lg text-foreground">Admin Command Center</h1>
                  <p className="text-sm text-muted-foreground font-body">Portfolio Management Dashboard</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground font-body">
                  Welcome, {user.email}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  iconName="LogOut"
                  iconPosition="left"
                >
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-muted/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-1 overflow-x-auto">
              {navigationTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-t-lg font-cta text-sm transition-intelligent whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-background text-primary border-b-2 border-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Users" size={20} color="var(--color-primary)" />
                    </div>
                    <h3 className="font-cta text-foreground">Visitors</h3>
                  </div>
                  <div className="text-2xl font-headline text-primary mb-1">{websiteStats.visitors.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground font-body">Total unique visitors</div>
                </div>

                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Eye" size={20} color="var(--color-secondary)" />
                    </div>
                    <h3 className="font-cta text-foreground">Page Views</h3>
                  </div>
                  <div className="text-2xl font-headline text-secondary mb-1">{websiteStats.pageViews.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground font-body">Total page views</div>
                </div>

                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={20} color="var(--color-accent)" />
                    </div>
                    <h3 className="font-cta text-foreground">Contacts</h3>
                  </div>
                  <div className="text-2xl font-headline text-accent mb-1">{websiteStats.contactForms}</div>
                  <div className="text-sm text-muted-foreground font-body">Contact form submissions</div>
                </div>

                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                      <Icon name="Download" size={20} color="var(--color-success)" />
                    </div>
                    <h3 className="font-cta text-foreground">Downloads</h3>
                  </div>
                  <div className="text-2xl font-headline text-success mb-1">{websiteStats.downloads}</div>
                  <div className="text-sm text-muted-foreground font-body">CV downloads</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-headline text-lg text-foreground mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button
                    variant="outline"
                    onClick={() => sendNotification('Portfolio updated successfully', 'success')}
                    iconName="Bell"
                    iconPosition="left"
                    className="justify-start"
                  >
                    Send Update
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab('analytics')}
                    iconName="BarChart3"
                    iconPosition="left"
                    className="justify-start"
                  >
                    View Analytics
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab('content')}
                    iconName="FileText"
                    iconPosition="left"
                    className="justify-start"
                  >
                    Update Content
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab('settings')}
                    iconName="Settings"
                    iconPosition="left"
                    className="justify-start"
                  >
                    Settings
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-headline text-foreground">Notifications</h2>
                <Button
                  variant="default"
                  onClick={() => sendNotification('Test notification from admin', 'info')}
                  iconName="Plus"
                  iconPosition="left"
                >
                  Send Test Notification
                </Button>
              </div>

              <div className="space-y-4">
                {notifications.length === 0 ? (
                  <div className="bg-card rounded-xl border border-border p-8 text-center">
                    <Icon name="Bell" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
                    <h3 className="font-headline text-lg text-foreground mb-2">No notifications yet</h3>
                    <p className="text-muted-foreground font-body">Notifications will appear here when they're sent.</p>
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <div key={notification.id} className="bg-card rounded-xl border border-border p-4">
                      <div className="flex items-start space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          notification.type === 'success' ? 'bg-success/10' :
                          notification.type === 'error' ? 'bg-destructive/10' : 'bg-primary/10'
                        }`}>
                          <Icon 
                            name={notification.type === 'success' ? 'Check' : notification.type === 'error' ? 'X' : 'Info'} 
                            size={16} 
                            color={notification.type === 'success' ? 'var(--color-success)' : 
                                   notification.type === 'error' ? 'var(--color-destructive)' : 'var(--color-primary)'} 
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-foreground font-body">{notification.message}</p>
                          <p className="text-sm text-muted-foreground font-body mt-1">
                            {notification.timestamp?.toDate?.()?.toLocaleString() || 'Just now'}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {activeTab === 'content' && (
            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="text-2xl font-headline text-foreground mb-6">Content Management</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-cta text-foreground">Portfolio Updates</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-body">• Skills matrix updated with latest certifications</p>
                    <p className="text-sm text-muted-foreground font-body">• New AI projects added to showcase</p>
                    <p className="text-sm text-muted-foreground font-body">• Experience timeline updated with latest internships</p>
                    <p className="text-sm text-muted-foreground font-body">• Contact information updated</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-cta text-foreground">Latest Projects</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-body">• 3D Object Recognition System (DGCNN)</p>
                    <p className="text-sm text-muted-foreground font-body">• Web Scraping Agent with React/FastAPI</p>
                    <p className="text-sm text-muted-foreground font-body">• Speech Emotion Detection (CNN-BiLSTM)</p>
                    <p className="text-sm text-muted-foreground font-body">• HireGenius AI Recruitment Platform</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="bg-card rounded-xl border border-border p-6 space-y-8">
              <div>
                <h2 className="text-2xl font-headline text-foreground mb-2">Analytics Dashboard</h2>
                <p className="text-muted-foreground font-body mb-6">
                  Real-time metrics powered by Firebase (visits, geo data, engagement).
                </p>
                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground font-cta mb-1">Live Visitors</p>
                    <p className="text-2xl font-headline text-primary">{liveVisitors}</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground font-cta mb-1">Total Visitors</p>
                    <p className="text-2xl font-headline text-primary">{websiteStats.visitors.toLocaleString()}</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground font-cta mb-1">Page Views</p>
                    <p className="text-2xl font-headline text-secondary">{websiteStats.pageViews.toLocaleString()}</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground font-cta mb-1">Contacts</p>
                    <p className="text-2xl font-headline text-accent">{websiteStats.contactForms}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-cta text-foreground mb-4 flex items-center space-x-2"><Icon name="Globe2" size={16} /><span>Recent Visits & Geo</span></h3>
                {recentVisits.length === 0 ? (
                  <div className="text-sm text-muted-foreground font-body">No visit data yet. Open site in another tab to generate events.</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm font-body">
                      <thead>
                        <tr className="text-left text-muted-foreground border-b border-border">
                          <th className="py-2 pr-4">Time</th>
                          <th className="py-2 pr-4">Path</th>
                          <th className="py-2 pr-4">Country</th>
                          <th className="py-2 pr-4">City</th>
                          <th className="py-2 pr-4">IP</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentVisits.map(v => (
                          <tr key={v.id} className="border-b border-border/50 hover:bg-muted/30">
                            <td className="py-2 pr-4">{v.timestamp?.toDate ? v.timestamp.toDate().toLocaleTimeString() : ''}</td>
                            <td className="py-2 pr-4">{v.path || '/'}</td>
                            <td className="py-2 pr-4">{v.country || '-'}</td>
                            <td className="py-2 pr-4">{v.city || '-'}</td>
                            <td className="py-2 pr-4">{v.ip ? v.ip.replace(/(\d+\.\d+)\.\d+\.\d+/, '$1.*.*') : '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="text-2xl font-headline text-foreground mb-6">Settings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-cta text-foreground mb-2">Firebase Configuration</h3>
                  <p className="text-sm text-muted-foreground font-body mb-4">
                    Update your Firebase configuration in <code>src/utils/firebase.js</code>
                  </p>
                  <div className="bg-muted rounded-lg p-4">
                    <pre className="text-xs text-muted-foreground font-mono">
{`// Replace with your actual Firebase configuration
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "youssef-chlih-portfolio.firebaseapp.com",
  projectId: "youssef-chlih-portfolio",
  // ... other config
};`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCommandCenter;
