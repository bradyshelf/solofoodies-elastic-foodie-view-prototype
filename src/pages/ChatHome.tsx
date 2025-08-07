
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Trash2 } from 'lucide-react';
import { useState } from 'react';

const ChatHome = () => {
  const navigate = useNavigate();

  // Mock chat data with hidden state
  const [chats, setChats] = useState([{
    id: 1,
    username: '@UserInstagram',
    message: 'soy un hombre de influencia. Me encant...',
    timestamp: '1h',
    avatar: '/lovable-uploads/af4f172b-c1c6-4c8b-916f-423ef933eeaa.png',
    hidden: false
  }, {
    id: 2,
    username: '@UserInstagram',
    message: 'soy un hombre de influencia. Me encant...',
    timestamp: '2d',
    avatar: '/lovable-uploads/af4f172b-c1c6-4c8b-916f-423ef933eeaa.png',
    hidden: false
  }, {
    id: 3,
    username: '@UserInstagram',
    message: 'soy un hombre de influencia. Me encant...',
    timestamp: '3w',
    avatar: '/lovable-uploads/af4f172b-c1c6-4c8b-916f-423ef933eeaa.png',
    hidden: false
  }]);

  const handleBack = () => {
    navigate('/');
  };

  const handleChatClick = (chatId: number) => {
    if (chatId === 3) {
      navigate(`/chat/tip/${chatId}`);
    } else {
      navigate(`/chat/${chatId}`);
    }
  };

  const handleDeleteChat = (chatId: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent chat click when deleting
    setChats(prevChats => prevChats.map(chat => 
      chat.id === chatId ? { ...chat, hidden: true } : chat
    ));
  };

  // Filter out hidden chats
  const visibleChats = chats.filter(chat => !chat.hidden);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button onClick={handleBack}>
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Chats</h1>
        <div className="w-6 h-6"></div> {/* Spacer for centering */}
      </div>

      {/* Search Bar */}
      <div className="p-4 border-b border-gray-100">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search chats" 
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1">
        {visibleChats.length === 0 ? (
          <div className="text-center text-gray-500 mt-8 p-4">
            No chats available
          </div>
        ) : (
          visibleChats.map(chat => (
            <div 
              key={chat.id} 
              onClick={() => handleChatClick(chat.id)} 
              className="relative flex items-start p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
            >
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 mr-3">
                <img src={chat.avatar} alt={chat.username} className="w-full h-full object-cover" />
              </div>

              {/* Chat Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-gray-900 text-sm">
                    {chat.username}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {chat.timestamp}
                  </span>
                </div>
                <p className="text-sm text-gray-600 truncate">
                  {chat.message}
                </p>
              </div>

              {/* Delete Icon - positioned at bottom right corner */}
              <div className="absolute bottom-2 right-2">
                <button 
                  onClick={(e) => handleDeleteChat(chat.id, e)} 
                  className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatHome;
