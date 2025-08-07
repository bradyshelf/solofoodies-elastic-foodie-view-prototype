import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Euro } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const TipNotification = () => {
  const navigate = useNavigate();
  const { chatId } = useParams();

  // Mock data for the tip notification
  const tipData = {
    amount: 25,
    restaurant: {
      name: "Don Juan Restaurant",
      username: "@UserInstagram",
      avatar: "/lovable-uploads/af4f172b-c1c6-4c8b-916f-423ef933eeaa.png"
    },
    message: "Thank you for the amazing content! Here's a tip for your great work promoting our restaurant."
  };

  const handleBack = () => {
    navigate('/chat');
  };

  const handleGoToChat = () => {
    navigate(`/chat/${chatId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button onClick={handleBack}>
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Tip Received</h1>
        <div className="w-6 h-6"></div> {/* Spacer for centering */}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tip Received!</h2>
          <p className="text-gray-600">You've received a tip from the restaurant</p>
        </div>

        {/* Restaurant Info */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-3 mb-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={tipData.restaurant.avatar} alt={tipData.restaurant.username} />
              <AvatarFallback>R</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-gray-900">{tipData.restaurant.name}</h3>
              <p className="text-sm text-gray-500">{tipData.restaurant.username}</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm">{tipData.message}</p>
        </div>

        {/* Tip Amount */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Euro className="w-8 h-8 text-yellow-600" />
            <span className="text-4xl font-bold text-yellow-600">{tipData.amount}</span>
          </div>
          <p className="text-yellow-700 font-medium">Tip Amount</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={handleGoToChat}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg py-3"
          >
            Continue Conversation
          </Button>
          <Button 
            onClick={handleBack}
            variant="outline"
            className="w-full font-medium rounded-lg py-3"
          >
            Back to Chats
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-xs text-blue-700 text-center">
            This tip will be added to your account balance and can be withdrawn according to our payment terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TipNotification;