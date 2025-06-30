import React, { useState } from 'react';
import { Calendar, MapPin, Users, MessageCircle, Clock, User, Building2, Star, Heart, Share2, Bell, Search } from 'lucide-react';

const EventDetails = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [question, setQuestion] = useState('');

  const attendees = [
    { name: 'Chioma Nwokelemd', role: 'CEO Marketing Co.', avatar: '👩‍💼' },
    { name: 'Joy Fox Butler', role: 'Marketing Manager', avatar: '👨‍💼' },
    { name: 'Charles Chaplin', role: 'Content Creator', avatar: '👨‍🎨' },
    { name: 'Glory Prince', role: 'SEO Specialist', avatar: '👩‍💻' }
  ];

  const schedule = [
    { time: '9:00 AM', title: 'Registration & Networking', type: 'networking' },
    { time: '10:00 AM', title: 'Keynote: The Future of AI in Marketing', type: 'keynote' },
    { time: '11:30 AM', title: 'Panel: Content That Converts', type: 'panel' },
    { time: '12:30 PM', title: 'Lunch Break', type: 'break' },
    { time: '2:00 PM', title: 'Workshop: Advanced SEO Techniques', type: 'workshop' },
    { time: '4:00 PM', title: 'Closing Remarks & Q&A', type: 'closing' }
  ];

  const relatedEvents = [
    {
      title: 'SEO Masterclass 2024',
      date: 'Dec 15, 2024',
      location: 'Lagos',
      image: '🎯'
    },
    {
      title: 'Content Creation Workshop',
      date: 'Jan 20, 2025',
      location: 'Abuja',
      image: '✍️'
    },
    {
      title: 'Social Media Growth Hacks',
      date: 'Feb 10, 2025',
      location: 'Port Harcourt',
      image: '📱'
    }
  ];

  const discussions = [
    {
      user: 'Sarah K',
      question: 'Excited for the AI keynote! Is there anything specific we should prepare for it?',
      time: '2 hours ago',
      replies: 3
    },
    {
      user: 'Michael T',
      question: 'Looking forward to networking. Anyone here interested in discussing social media marketing in detail?',
      time: '4 hours ago',
      replies: 7
    },
    {
      user: 'Lisa Chen',
      question: 'Will there be any recording available for sessions we miss?',
      time: '6 hours ago',
      replies: 2
    }
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
                  <span className="text-xl font-bold text-gray-900">EventPadi</span>
                </div>
    
                {/* Navigation */}
                <nav className="hidden md:flex space-x-8">
                  {['Events', 'Learn', 'Connect', 'Profile'].map((item) => (
                    <button
                      key={item}
                      onClick={() => setActiveTab(item)}
                      className={`text-sm font-medium transition-colors ${
                        activeTab === item
                          ? 'text-purple-600 border-b-2 border-purple-600'
                          : 'text-gray-600 hover:text-purple-600'
                      }`}
                    >
                      {item}
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


      {/* Event Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                <span>🏢 Executive Event Connection and Marketing Summit</span>
                <span>•</span>
                <span>📅 November 15, 2024 | 8:00 AM - 5:00 PM EAT</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Join leading experts and innovators at the Digital Marketing Summit 2024 to explore the latest trends, strategies, and technologies shaping the future of digital marketing.
              </h1>
              <p className="text-gray-600 mb-6 max-w-4xl">
                This summit offers a unique opportunity to gain actionable insights, network with industry peers, and discover cutting-edge solutions that can transform your marketing efforts. Key topics include: interactive workshops, and panel discussions will cover topics such as AI in marketing, content strategy, SEO, social media engagement, and data analytics. Don't miss this chance to elevate your skills and connect with the brightest minds in the digital space.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2">
                <Bell className="w-4 h-4" />
                <span>Connect with Attendees</span>
              </button>
            </div>
            <div className="ml-8 flex space-x-2">
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  <button
                    onClick={() => setActiveTab('about')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'about'
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    About the Event
                  </button>
                  <button
                    onClick={() => setActiveTab('schedule')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'schedule'
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Event Schedule
                  </button>
                  <button
                    onClick={() => setActiveTab('organizers')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'organizers'
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Meet the Organizers
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'about' && (
                  <div>
                    <p className="text-gray-600 mb-4">
                      Join leading experts and innovators at the Digital Marketing Summit 2024 to explore the latest trends, strategies, and technologies shaping the future of digital marketing. This summit offers a unique opportunity to gain actionable insights, network with industry peers, and discover cutting-edge solutions that can transform your marketing efforts.
                    </p>
                    <p className="text-gray-600">
                      Key topics include: interactive workshops, and panel discussions will cover topics such as AI in marketing, content strategy, SEO, social media engagement, and data analytics. Don't miss this chance to elevate your skills and connect with the brightest minds in the digital space.
                    </p>
                  </div>
                )}

                {activeTab === 'schedule' && (
                  <div className="space-y-4">
                    {schedule.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-lg">
                          <Clock className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <div className="text-sm text-purple-600 font-medium">{item.time}</div>
                          <div className="font-medium text-gray-900">{item.title}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'organizers' && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Global Marketing Co.</h3>
                        <p className="text-gray-600">Lead Organizer</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Digital Innovations Inc.</h3>
                        <p className="text-gray-600">Co-Organizer</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Discussions & Q&A */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Discussions & Q&A</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {discussions.map((discussion, index) => (
                    <div key={index} className="flex space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-purple-600">
                            {discussion.user.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-900">{discussion.user}</span>
                          <span className="text-sm text-gray-500">{discussion.time}</span>
                        </div>
                        <p className="text-gray-600 mt-1">{discussion.question}</p>
                        <button className="text-sm text-purple-600 hover:text-purple-700 mt-2">
                          {discussion.replies} replies
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask a question about the discussion..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                  <div className="flex justify-end mt-3">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Who's Going */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Who's Going?</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {attendees.map((attendee, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-lg">{attendee.avatar}</span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{attendee.name}</div>
                          <div className="text-sm text-gray-500">{attendee.role}</div>
                        </div>
                      </div>
                      <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                        Message
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Event Location */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Event Location</h3>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span>Singapore Expo Convention and Exhibition Centre</span>
                </div>
                <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-gray-500">Map View</span>
                </div>
              </div>
            </div>

            {/* Connect & Network */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Connect & Network</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  Ready to find opportunities to expand your attendance and grow your network with attendees?
                </p>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  Find Connections
                </button>
                <div className="text-center mt-3">
                  <span className="text-sm text-gray-500">30 members online</span>
                </div>
              </div>
            </div>

            {/* Related Events */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Related Events</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {relatedEvents.map((event, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-xl">{event.image}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">{event.title}</div>
                        <div className="text-xs text-gray-500">{event.date}</div>
                        <div className="text-xs text-gray-500">{event.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default EventDetails;