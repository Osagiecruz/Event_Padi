import React, { useState } from 'react';
import { 
  Search, 
  MessageCircle, 
  Users, 
  Calendar, 
  UserPlus, 
  Phone, 
  Video, 
  MoreHorizontal,
  Paperclip,
  Smile,
  Send,
  Download,
  FileText,
  Coffee,
  MapPin,
  Clock,
  Bell
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom'; // Added useNavigate import

const ContactChat = () => {
  const [selectedChat, setSelectedChat] = useState('sarah-johnson');
  const [activeTab, setActiveTab] = useState('about');
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
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

  const contacts = [
    {
      id: 'sarah-johnson',
      name: 'Sarah Johnson',
      lastMessage: 'Sounds good! See you there.',
      time: '2:30 PM',
      unread: 0,
      online: true,
      avatar: '👩‍💼'
    },
    {
      id: 'michael-chen',
      name: 'Michael Chen',
      lastMessage: 'I\'ve sent the meeting invite.',
      time: 'Nov 5',
      unread: 1,
      online: false,
      avatar: '👨‍💻'
    },
    {
      id: 'emily-adams',
      name: 'Emily Adams',
      lastMessage: 'Thanks for connecting the group.',
      time: 'Nov 4',
      unread: 0,
      online: true,
      avatar: '👩‍🎨'
    },
    {
      id: 'james-wilson',
      name: 'James Wilson',
      lastMessage: 'Can you share the event details?',
      time: 'Nov 3',
      unread: 0,
      online: false,
      avatar: '👨‍💼'
    },
    {
      id: 'lisa-kim',
      name: 'Lisa Kim',
      lastMessage: 'Awesome! Looking forward to it!',
      time: 'Nov 2',
      unread: 2,
      online: true,
      avatar: '👩‍💻'
    },
    {
      id: 'david-thompson',
      name: 'David Thompson',
      lastMessage: 'Let me know if you need help.',
      time: 'Oct 30',
      unread: 0,
      online: false,
      avatar: '👨‍🔬'
    },
    {
      id: 'chloe-green',
      name: 'Chloe Green',
      lastMessage: 'Checking out the music lineup.',
      time: 'Oct 28',
      unread: 0,
      online: true,
      avatar: '👩‍🎤'
    },
    {
      id: 'ryan-harris',
      name: 'Ryan Harris',
      lastMessage: 'See you at the concert!',
      time: 'Oct 26',
      unread: 0,
      online: false,
      avatar: '👨‍🎸'
    }
  ];

  const chatMessages = [
    {
      id: 1,
      sender: 'other',
      content: 'Hey! Yes, definitely I\'m especially interested in the AI ethics panel on Saturday morning. Are you attending that one?',
      time: '2024-05-15T10:00:00',
      avatar: '👩‍💼'
    },
    {
      id: 2,
      sender: 'me',
      content: 'That\'s exactly what I was thinking! It\'d be great to meet up before or after that session if you\'re free.',
      time: '2024-05-15T10:05:00'
    },
    {
      id: 3,
      sender: 'other',
      content: 'Absolutely! I\'m open. Let me check my schedule and I\'ll suggest a time.',
      time: '2024-05-15T10:10:00',
      avatar: '👩‍💼'
    },
    {
      id: 4,
      sender: 'me',
      content: 'I\'ve sent over the latest agenda in case you haven\'t seen it yet. It has the room numbers.',
      time: '2024-05-15T10:15:00'
    },
    {
      id: 5,
      sender: 'other',
      content: 'Perfect, thanks! That\'s super helpful. I\'ll take a look now.',
      time: '2024-05-15T10:20:00',
      avatar: '👩‍💼'
    },
    {
      id: 6,
      sender: 'me',
      content: 'How about a quick coffee at the convention center cafe before the panel? Sent an invite.',
      time: '2024-05-15T10:45:00'
    },
    {
      id: 7,
      sender: 'other',
      content: 'Looks good! I\'ve accepted the invite. See you Saturday!',
      time: '2024-05-15T10:50:00',
      avatar: '👩‍💼'
    }
  ];

  const selectedContact = contacts.find(c => c.id === selectedChat);

  const formatTime = (timeString) => {
    const date = new Date(timeString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add message logic here
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
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

      {/* Main Content - Three Column Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Column - New Message Section */}
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>New Message</span>
            </button>
          </div>

          {/* Navigation Menu */}
          <div className="flex-1">
            <div className="py-2">
              <button className="w-full px-4 py-3 text-left text-sm font-medium text-purple-600 bg-purple-50 border-r-2 border-purple-600 flex items-center space-x-3">
                <MessageCircle className="w-4 h-4" />
                <span>Direct Messages</span>
              </button>
              <button className="w-full px-4 py-3 text-left text-sm text-gray-600 hover:bg-gray-50 flex items-center space-x-3">
                <Users className="w-4 h-4" />
                <span>Group Chats</span>
              </button>
              <button className="w-full px-4 py-3 text-left text-sm text-gray-600 hover:bg-gray-50 flex items-center space-x-3">
                <Calendar className="w-4 h-4" />
                <span>Meeting Requests</span>
              </button>
              <button className="w-full px-4 py-3 text-left text-sm text-gray-600 hover:bg-gray-50 flex items-center space-x-3">
                <UserPlus className="w-4 h-4" />
                <span>Contacts</span>
              </button>
            </div>
          </div>
        </div>

        {/* Middle Column - Search & Contacts */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Contacts List */}
          <div className="flex-1 overflow-y-auto">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => setSelectedChat(contact.id)}
                className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
                  selectedChat === contact.id ? 'bg-purple-50 border-r-2 border-r-purple-600' : ''
                }`}
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">{contact.avatar}</span>
                  </div>
                  {contact.online && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900 truncate">{contact.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">{contact.time}</span>
                      {contact.unread > 0 && (
                        <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-medium">{contact.unread}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Chat Interface */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">{selectedContact?.avatar}</span>
                  </div>
                  {selectedContact?.online && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">{selectedContact?.name}</h2>
                  <p className="text-sm text-gray-500">
                    {selectedContact?.online ? 'Active now' : 'Last seen recently'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <Video className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="text-center">
              <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">May 15, 2024</span>
            </div>

            {chatMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  msg.sender === 'me' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <p className="text-sm">{msg.content}</p>
                  <p className={`text-xs mt-1 ${
                    msg.sender === 'me' ? 'text-purple-200' : 'text-gray-500'
                  }`}>
                    {formatTime(msg.time)}
                  </p>
                </div>
              </div>
            ))}

            {/* File Attachments */}
            <div className="flex justify-end">
              <div className="bg-purple-600 text-white px-4 py-2 rounded-2xl max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm font-medium">SummitAgenda.pdf</span>
                </div>
                <p className="text-xs text-purple-200">1.2 MB</p>
                <button className="flex items-center space-x-1 mt-2 text-xs text-purple-200 hover:text-white">
                  <Download className="w-3 h-3" />
                  <span>Download</span>
                </button>
              </div>
            </div>

            {/* Meeting Invite */}
            <div className="flex justify-end">
              <div className="bg-purple-600 text-white px-4 py-3 rounded-2xl max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <Coffee className="w-4 h-4" />
                  <span className="text-sm font-medium">Coffee Meetup before AI Panel</span>
                </div>
                <div className="text-xs text-purple-200 space-y-1">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>Saturday 9:00 AM</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>Convention center cafe</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-purple-200">Meeting accepted</span>
                  <div className="flex -space-x-1">
                    <div className="w-5 h-5 bg-purple-400 rounded-full border border-purple-600"></div>
                    <div className="w-5 h-5 bg-purple-400 rounded-full border border-purple-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 p-10 ">
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Paperclip className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Smile className="w-5 h-5" />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
              </div>
              <button 
                onClick={handleSendMessage}
                className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Positioned to not cover chat */}
      <div className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8">
            {/* <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">EP</span>
              </div>
              <span className="text-lg font-bold text-gray-900">EventPadi</span>
            </div> */}
            <div className="flex items-center justify-center space-x-2">
                 <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                 </div>
                   <span className="text-2xl font-bold">EventPadi</span>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-gray-600">Stay up-to-date with EventPadi</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  //  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="bg-purple-600 text-white px-4 py-1 text-sm rounded font-medium hover:bg-purple-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              English • © 2025 EventPadi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactChat;