import React, { useState } from 'react';
import { Search, Bell, User, Plus, Users, MapPin, Calendar } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom'; // Added useNavigate import

const Community = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [searchQuery, setSearchQuery] = useState('');
  const [groupSearchQuery, setGroupSearchQuery] = useState('');
  const navigate = useNavigate();
  
  
  
    const navItems = [
    { label: 'Events', path: '/event-discovery' },
    { label: 'Learn', path: '/event-details' },
    { label: 'Connect', path: '/contact-chat' },
    { label: 'Profile', path: '/community' },
  ];
  
  const handleNavClick = (label, path) => {
      setActiveTab(label);
      navigate(path);
    };

  const popularGroups = [
    {
      id: 1,
      name: 'Tech Innovators Meetup',
      subtitle: 'AI & Future Tech Summit',
      memberCount: 234,
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      name: 'Music Lovers United',
      subtitle: 'Indie Pop Festival',
      memberCount: 892,
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      name: 'Hiking Adventures Crew',
      subtitle: 'Mountain Trail Expedition',
      memberCount: 156,
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      name: 'Foodie Explorers',
      subtitle: 'Local Flavors Fair',
      memberCount: 234,
      image: '/api/placeholder/300/200'
    },
    {
      id: 5,
      name: 'Book Club Enthusiasts',
      subtitle: 'Literary Salon',
      memberCount: 176,
      image: '/api/placeholder/300/200'
    },
    {
      id: 6,
      name: 'Startup Founders Network',
      subtitle: 'Pitch Day Showcase',
      memberCount: 389,
      image: '/api/placeholder/300/200'
    }
  ];

  const members = [
    { name: 'Alice Johnson', role: 'Group Creator', avatar: '👩‍💼' },
    { name: 'Bob Williams', role: 'Event Organizer', avatar: '👨‍💼' },
    { name: 'Charlie Brown', role: 'Active Member', avatar: '👨‍🎨' },
    { name: 'Diana Prince', role: 'Event Manager', avatar: '👩‍💻' }
  ];

  const recentActivity = [
    { user: 'Alice Johnson', action: 'shared a link about AI ethics', time: '12 hours ago' },
    { user: 'Bob Williams', action: 'posted a question about ML models', time: '1 day ago' },
    { user: 'Charlie Brown', action: 'announced a new event', time: '3 days ago' }
  ];

  return (
         <div className="min-h-screen bg-gray-50">
              {/* Header */}
              <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xl font-bold text-gray-900"><Link to="/">EventPadi</Link></span>
                    </div>
        
                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8">
      {navItems.map(({ label, path }) => (
        <button
          key={label}
          onClick={() => handleNavClick(label, path)}
          className={`text-sm font-medium transition-colors ${
            activeTab === label
              ? 'text-purple-600 border-b-2 border-purple-600'
              : 'text-gray-600 hover:text-purple-600'
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
        
                    {/* Search and Profile */}
                    <div className="flex items-center space-x-4">
                      <div className="relative hidden md:block">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Search for events..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64"
                        />
                      </div>
                      <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                        <Bell className="w-5 h-5" />
                      </button>
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">A</span>
                      </div>
                    </div>
                  </div>
                </div>
              </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Community, Share the Experience
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join existing groups or create your own to connect with others attending your 
            favorite events. Discover shared interests and make new friends!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors">
              <Plus className="w-5 h-5" />
              <span>Create a New Group</span>
            </button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search for groups..."
                value={groupSearchQuery}
                onChange={(e) => setGroupSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Popular Groups Section */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Event Groups</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {popularGroups.map((group) => (
                <div key={group.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-center">
                        <Users className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                        <span className="text-gray-500 text-sm">Group Image</span>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {group.memberCount}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{group.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{group.subtitle}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Featured Group */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 ">
                 <h3 className="font-bold text-gray-900 ">Tech Innovators Meetup</h3>
              <p className="text-sm text-gray-600 mb-4 py-4 border-b border-gray-200">
                A dynamic group for professionals and enthusiasts passionate about AI, machine learning, and emerging technologies. Connect, share insights, and collaborate on future innovations.
              </p>


              {/* Members*/}
              <div className="mb-4 pb-4 border-b border-gray-200">
                   <h4 className="font-semibold text-gray-900">Members (4)</h4>
                <div className="space-y-2 pt-2">
                  {members.map((member, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        {member.avatar}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{member.name}</div>
                        <div className="text-xs text-gray-500">{member.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-3 text-purple-600 text-sm font-medium hover:underline">
                  View all members →
                </button>
              </div>

              <div className="mb-4 pb-4 border-b border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Recent Activity</h4>
                <div className="space-y-2">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="text-sm">
                      <span className="font-medium text-gray-900">{activity.user}</span>{' '}
                      <span className="text-gray-600">{activity.action}</span>
                      <div className="text-xs text-gray-500">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Group Rules</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Respectful communication</li>
                  <li>• Stay on topic</li>
                  <li>• No spamming</li>
                  <li>• Be supportive</li>
                </ul>
              </div>

              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Join Group</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
            {/* <footer className="bg-white border-t border-gray-200 mt-16"> */}
                    <footer className="bg-gray-900 text-white py-12">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2 mb-6">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                              <Calendar className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-2xl font-bold">EventPadi</span>
                          </div>
                          <p className="text-gray-400 mb-6">Stay up-to-date with EventPadi</p>
                          <div className="flex justify-center space-x-4 mb-8">
                            <input
                              type="email"
                              placeholder="Enter your email"
                              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg font-medium transition-colors">
                              Subscribe
                            </button>
                          </div>
                        </div>
                        
                        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                          <p className="text-gray-400 text-sm">© 2025 EventPadi</p>
                          {/* <div className="flex items-center space-x-2 mt-4 md:mt-0">
                            <span className="text-gray-400 text-sm">Made with</span>
                            <div className="flex items-center space-x-1">
                              <span className="text-blue-400 font-semibold">Visily</span>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </footer>
    </div>
  );
};

export default Community;