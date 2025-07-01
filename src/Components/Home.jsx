import React, { useState, useEffect } from 'react';
import { Search, Bell, Calendar, Users, Heart, Star, ArrowRight, Play, Check } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../Firebase.jsx';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Home = () => {
  const [activeTab, setActiveTab] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const navItems = [
    { label: 'Events', path: '/event-discovery' },
    { label: 'Learn', path: '/event-details' },
    { label: 'Connect', path: '/contact-chat' },
    { label: 'Profile', path: '/community' },
  ];

  const handleNavClick = (label, path) => {
    if (!user) {
      // If user is not authenticated, redirect to login
      navigate('/login', { state: { redirectTo: path } });
      return;
    }
    setActiveTab(label);
    navigate(path);
  };

  const handleJoinEventPadi = () => {
    if (user) {
      // User is already authenticated, redirect to events or dashboard
      navigate('/event-discovery');
    } else {
      // User is not authenticated, redirect to signup
      navigate('/signup');
    }
  };

  const handleFindYourNextEvent = () => {
    if (!user) {
      navigate('/login', { state: { redirectTo: '/event-discovery' } });
      return;
    }
    navigate('/event-discovery');
  };

  const handleSignOut = async () => {
  try {
    await signOut(auth);
    setUser(null);
    navigate('/');
  } catch (error) {
    console.error('Sign out error:', error);
  }
};
  // Sample data for featured events, testimonials, and how it works
  // In a real application, this data would likely come from an API or database 

  const events = [
    {
      id: 1,
      title: "Harmony Fest 2024: The Ultimate Summer Jam",
      category: "Music",
      date: "Aug 15, 2024",
      attendees: 1234,
      image: "/api/placeholder/300/200",
      tag: "Popular",
      tagColor: "bg-purple-500"
    },
    {
      id: 2,
      title: "Future Innovators Summit: AI & Beyond",
      category: "Technology",
      date: "Sep 20, 2024",
      attendees: 856,
      image: "/api/placeholder/300/200",
      tag: "Tech",
      tagColor: "bg-blue-500"
    },
    {
      id: 3,
      title: "Modern Masters Exhibition: A Visionary Collection",
      category: "Art",
      date: "Oct 5, 2024",
      attendees: 432,
      image: "/api/placeholder/300/200",
      tag: "Featured",
      tagColor: "bg-green-500"
    },
    {
      id: 4,
      title: "Global Finance Food Fair: A Culinary Journey",
      category: "Food",
      date: "Nov 12, 2024",
      attendees: 678,
      image: "/api/placeholder/300/200",
      tag: "Food",
      tagColor: "bg-orange-500"
    },
    {
      id: 5,
      title: "Around City Marathon: Run for a Cause",
      category: "Sports",
      date: "Dec 3, 2024",
      attendees: 2341,
      image: "/api/placeholder/300/200",
      tag: "Sports",
      tagColor: "bg-red-500"
    },
    {
      id: 6,
      title: "Green Earth Workshop Day: Plant a Tree",
      category: "Environment",
      date: "Jan 15, 2025",
      attendees: 567,
      image: "/api/placeholder/300/200",
      tag: "Green",
      tagColor: "bg-emerald-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "EventPad made attending concerts so much easier. I love how it shows me nearby events based on!",
      rating: 5
    },
    {
      name: "David L.",
      text: "I used it for many food events recently, and life. The ability...",
      rating: 5
    },
    {
      name: "Emily R.",
      text: "Organizing our group for the food fair worked. The chatty...",
      rating: 5
    },
    {
      name: "John D.",
      text: "The ability...",
      rating: 5
    }
  ];

  const howItWorksSteps = [
    {
      icon: <Search className="w-8 h-8 text-pink-500" />,
      title: "Discover Events",
      description: "Find local events, concerts, workshops, and social gatherings happening around you."
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: "Connect with Others",
      description: "Meet like-minded people and build lasting connections through shared interests."
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Experience Together",
      description: "Create unforgettable memories and experiences with your new community."
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

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
              
             {user ? (
  <div className="flex items-center space-x-4">
    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
      <span className="text-white text-sm font-medium">
        {user.displayName
          ? user.displayName.charAt(0).toUpperCase()
          : user.email.charAt(0).toUpperCase()}
      </span>
    </div>
    <button
      onClick={handleSignOut}
      className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
    >
      Sign Out
    </button>
  </div>
) : (
  <div className="flex items-center space-x-2">
    <Link
      to="/login"
      className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
    >
      Login
    </Link>
    <Link
      to="/signup"
      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
    >
      Sign Up
    </Link>
  </div>
)}

            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Connect, Explore, Experience: Your Event Journey Starts Here.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Find community-curated events, and make every week unforgettable.
          </p>
          <button 
            onClick={handleFindYourNextEvent}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            Find Your Next Event
          </button>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Upcoming Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-6xl text-gray-400">🎭</div>
                  </div>
                  <span className={`absolute top-4 left-4 ${event.tagColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {event.tag}
                  </span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{event.category}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{event.date}</span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees.toLocaleString()}</span>
                    </span>
                  </div>
                  <button 
                    onClick={() => {
                      if (!user) {
                        navigate('/login', { state: { redirectTo: `/event/${event.id}` } });
                        return;
                      }
                      // Navigate to event details
                    }}
                    className="mt-4 text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center space-x-1 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => {
                if (!user) {
                  navigate('/login', { state: { redirectTo: '/events' } });
                  return;
                }
                navigate('/events');
              }}
              className="text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-2 mx-auto transition-colors"
            >
              <span>View All Events</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* How EventPad Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How EventPad Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Users Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-medium">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-gray-900 font-medium text-sm">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Event Experience?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of event enthusiasts who've discovered their passion through EventPad.
          </p>
          <button 
            onClick={handleJoinEventPadi}
            className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            {user ? 'Explore Events' : 'Join EventPadi Now'}
          </button>
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;