import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Send, Euro } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
  type?: 'text' | 'tip';
  tipAmount?: number;
}

const TipNotification = () => {
  const navigate = useNavigate();
  const { chatId } = useParams();
  const [messages] = useState<Message[]>([
    {
      id: 1,
      text: "Thank you for the amazing content! Here's a tip for your great work promoting our restaurant.",
      isUser: false,
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      type: 'tip',
      tipAmount: 25
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  // Mock chat user data
  const chatUser = {
    username: '@UserInstagram',
    avatar: '/lovable-uploads/af4f172b-c1c6-4c8b-916f-423ef933eeaa.png'
  };

  const handleBack = () => {
    navigate('/chat');
  };

  const handleSendMessage = () => {
    // This would handle sending new messages
    console.log('Send message:', inputValue);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center space-x-3">
          <button onClick={handleBack}>
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <Avatar className="w-8 h-8">
            <AvatarImage src={chatUser.avatar} alt={chatUser.username} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <span className="font-medium text-gray-900">{chatUser.username}</span>
        </div>
        <button>
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="1"/>
              <circle cx="19" cy="12" r="1"/>
              <circle cx="5" cy="12" r="1"/>
            </svg>
          </div>
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className="space-y-1">
            <div className="flex justify-start">
              {message.type === 'tip' ? (
                <div className="max-w-[80%] bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Euro className="w-5 h-5 text-yellow-600" />
                    <span className="font-semibold text-yellow-700">Tip Received: €{message.tipAmount}</span>
                  </div>
                  <p className="text-sm text-gray-700">{message.text}</p>
                </div>
              ) : (
                <div className="max-w-[80%] px-4 py-2 rounded-lg bg-gray-200 text-gray-900">
                  <p className="text-sm">{message.text}</p>
                </div>
              )}
            </div>
            <div className="flex justify-start">
              <span className="text-xs text-gray-400 px-2">
                {formatTimestamp(message.timestamp)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 rounded-full border-gray-300 px-4 py-2"
          />
          <Button
            onClick={handleSendMessage}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 w-10 h-10"
            disabled={!inputValue.trim()}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TipNotification;