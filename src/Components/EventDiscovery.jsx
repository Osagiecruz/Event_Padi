import React, { useState } from 'react';
import { Search, Bell, Calendar, Users, Heart, Star, ArrowRight, Play, Check, MapPin, Clock, Filter } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom'; // Added useNavigate import

const EventDiscovery = () => {
  const [activeTab, setActiveTab] = useState('Events');
  const [selectedCategory, setSelectedCategory] = useState('All Events');
  const [selectedLocation, setSelectedLocation] = useState('New York');
  const [selectedDate, setSelectedDate] = useState('This Week');
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
  

  const categories = [
    { name: 'All Events', count: 2847, color: 'bg-purple-500' },
    { name: 'Best Conferences', count: 156, color: 'bg-blue-500' },
    { name: 'Art & Exhibition', count: 89, color: 'bg-pink-500' },
    { name: 'Workshops', count: 234, color: 'bg-green-500' },
    { name: 'Sports Events', count: 167, color: 'bg-orange-500' },
    { name: 'Local Meetups', count: 445, color: 'bg-indigo-500' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Global Tech Summit 2024",
      date: "Dec 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Madison Square Garden, New York",
      attendees: 1234,
      price: "From $99",
      tag: "Tech Event",
      tagColor: "bg-blue-500"
    },
    {
      id: 2,
      title: "Summer Music Fest",
      date: "Jan 20, 2025",
      time: "7:00 PM - 11:00 PM",
      location: "Central Park, New York",
      attendees: 856,
      price: "From $45",
      tag: "Music",
      tagColor: "bg-purple-500"
    },
    {
      id: 3,
      title: "Food & Wine Expo",
      date: "Feb 5, 2025",
      time: "12:00 PM - 8:00 PM",
      location: "Brooklyn Convention Center",
      attendees: 432,
      price: "From $25",
      tag: "Food & Drink",
      tagColor: "bg-orange-500"
    },
    {
      id: 4,
      title: "Art Gallery Opening",
      date: "Feb 12, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "MoMA, New York",
      attendees: 678,
      price: "Free",
      tag: "Art",
      tagColor: "bg-pink-500"
    },
    {
      id: 5,
      title: "Startup Pitch Day",
      date: "Feb 18, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "WeWork Times Square",
      attendees: 234,
      price: "From $15",
      tag: "Business",
      tagColor: "bg-green-500"
    },
    {
      id: 6,
      title: "Community Yoga Retreat",
      date: "Feb 25, 2025",
      time: "8:00 AM - 12:00 PM",
      location: "Prospect Park, Brooklyn",
      attendees: 156,
      price: "From $20",
      tag: "Wellness",
      tagColor: "bg-teal-500"
    },
    {
      id: 7,
      title: "Fantasy Gaming Convention",
      date: "Mar 5, 2025",
      time: "10:00 AM - 10:00 PM",
      location: "Javits Center, New York",
      attendees: 2341,
      price: "From $35",
      tag: "Gaming",
      tagColor: "bg-indigo-500"
    },
    {
      id: 8,
      title: "Sustainable Living Fair",
      date: "Mar 12, 2025",
      time: "11:00 AM - 5:00 PM",
      location: "Union Square, Manhattan",
      attendees: 789,
      price: "Free",
      tag: "Environment",
      tagColor: "bg-emerald-500"
    },
    {
      id: 9,
      title: "International Film Festival",
      date: "Mar 20, 2025",
      time: "6:00 PM - 11:00 PM",
      location: "Lincoln Center, New York",
      attendees: 1567,
      price: "From $50",
      tag: "Film",
      tagColor: "bg-red-500"
    }
  ];

  const recentlyViewed = [
    {
      id: 1,
      title: "Global Tech Summit 2024",
      date: "Dec 15, 2024",
      location: "Madison Square Garden",
      price: "From $99",
      attendees: 1234
    },
    {
      id: 2,
      title: "Summer Music Fest",
      date: "Jan 20, 2025",
      location: "Central Park",
      price: "From $45",
      attendees: 856
    },
    {
      id: 3,
      title: "Food & Wine Expo",
      date: "Feb 5, 2025",
      location: "Brooklyn Convention Center",
      price: "From $25",
      attendees: 432
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100 to-pink-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Find events that match your passions, connect with others, and make unforgettable memories.
          </p>
          
          {/* Search Filters */}
          <div className="bg-white rounded-xl shadow-lg p-4 flex flex-wrap gap-4 items-center justify-center max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Event name or keyword"
              className="flex-1 min-w-64 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
              <option>Miami</option>
            </select>
            <select 
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option>This Week</option>
              <option>This Month</option>
              <option>Next Month</option>
              <option>Custom Date</option>
            </select>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Search Events
            </button>
          </div>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Filters:</span>
              <button className="flex items-center space-x-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                <span>Free Events</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                <span>Online Events</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                <span>Today</span>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="text-sm border border-gray-300 rounded px-3 py-1 focus:ring-2 focus:ring-purple-500">
                <option>Date</option>
                <option>Popularity</option>
                <option>Price</option>
                <option>Distance</option>
              </select>
              <button className="p-2 text-gray-600 hover:text-purple-600">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Categories */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Trending Categories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all ${
                  selectedCategory === category.name
                    ? 'bg-purple-600 text-white border-purple-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-purple-300'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${category.color}`}></span>
                <span className="font-medium">{category.name}</span>
                <span className="text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events Near You</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-4xl text-gray-400">🎭</div>
                  </div>
                  <span className={`absolute top-4 left-4 ${event.tagColor} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    {event.tag}
                  </span>
                  <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-purple-600">{event.price}</span>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Viewed */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recently Viewed</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentlyViewed.map((event) => (
              <div key={event.id} className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-shadow">
                <div className="w-full h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-2xl text-gray-500">🎭</div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{event.date}</p>
                <p className="text-sm text-gray-600 mb-2">{event.location}</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-medium">{event.price}</span>
                  <span className="text-xs text-gray-500">{event.attendees} attending</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Discover Your Next Great Event?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of events finding enthusiasts discovering new experiences every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 border border-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-semibold transition-colors">
              Create My Own Event
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Sign Up for Event Alerts
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
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

export default EventDiscovery;