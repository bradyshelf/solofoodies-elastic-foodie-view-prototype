import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RestaurantDetail = () => {
  const navigate = useNavigate();
  const { restaurantId } = useParams();

  const handleBack = () => {
    navigate(-1);
  };

  // Mock restaurant data - in a real app this would come from an API
  const restaurant = {
    id: restaurantId,
    name: "Restaurante de Don Juan",
    images: [
      "/lovable-uploads/115bc3d6-61b7-4973-a9a7-63d6ac2f7584.png",
      "/lovable-uploads/115bc3d6-61b7-4973-a9a7-63d6ac2f7584.png"
    ],
    campaign: {
      type: "PÚBLICA",
      startDate: "08/12/21",
      endDate: "27/12/21",
      daysAvailable: ["L", "V", "X", "J", "V", "S", "D"],
      companions: 3,
      price: "50€",
      spotsRemaining: 3
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative">
        <div className="grid grid-cols-2 gap-1">
          <img 
            src={restaurant.images[0]} 
            alt={restaurant.name}
            className="w-full h-48 object-cover"
          />
          <img 
            src={restaurant.images[1]} 
            alt={restaurant.name}
            className="w-full h-48 object-cover"
          />
        </div>
        
        {/* Back button overlay */}
        <div className="absolute top-4 left-4">
          <Button
            onClick={handleBack}
            variant="ghost"
            className="text-white hover:bg-black/20 p-2 h-auto"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-medium">ATRÁS</span>
          </Button>
        </div>

        {/* Restaurant name overlay */}
        <div className="absolute bottom-4 left-4">
          <h1 className="text-xl font-bold text-white drop-shadow-lg">
            {restaurant.name}
          </h1>
        </div>
      </div>

      {/* Campaign Details */}
      <div className="p-6 space-y-6">
        {/* Campaign Type and Price */}
        <div className="flex items-center justify-between">
          <div>
            <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
              {restaurant.campaign.type}
            </span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {restaurant.campaign.price}
          </div>
        </div>

        {/* Campaign Dates */}
        <div className="space-y-2">
          <div className="text-sm text-gray-600">
            Del {restaurant.campaign.startDate} al {restaurant.campaign.endDate}
          </div>
          
          {/* Days of the week */}
          <div className="flex space-x-2">
            {restaurant.campaign.daysAvailable.map((day, index) => (
              <div 
                key={index}
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-700"
              >
                {day}
              </div>
            ))}
          </div>
        </div>

        {/* Companions */}
        <div className="flex items-center text-gray-600">
          <Users className="w-4 h-4 mr-2" />
          <span className="text-sm">+{restaurant.campaign.companions} acompañantes</span>
        </div>

        {/* Collaboration Question */}
        <div className="text-center space-y-4 py-8">
          <h2 className="text-lg font-semibold text-gray-900">
            ¿Quieres colaborar con nosotros?
          </h2>
          
          <Button 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg text-base"
            size="lg"
          >
            Solicitar colaboración
          </Button>
          
          <p className="text-sm text-green-600 font-medium">
            ¡Quedan {restaurant.campaign.spotsRemaining} plazas disponibles!
          </p>
        </div>
      </div>

      {/* Bottom Navigation Placeholder */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 21H5V3H13V9H19V21Z"/>
            </svg>
          </div>
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 21H5V3H13V9H19V21Z"/>
            </svg>
          </div>
          <div className="w-6 h-6 text-gray-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;