import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BottomNavigation from '@/components/BottomNavigation';

const RestaurantDetail = () => {
  const navigate = useNavigate();
  const { restaurantId } = useParams();

  const handleBack = () => {
    console.log('Back button clicked');
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

          <Button 
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 rounded-lg text-base"
            size="lg"
          >
            Make an offer
          </Button>
          
          <p className="text-sm text-green-600 font-medium">
            ¡Quedan {restaurant.campaign.spotsRemaining} plazas disponibles!
          </p>
        </div>
      </div>

      {/* Bottom padding to avoid navigation overlap */}
      <div className="pb-20"></div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default RestaurantDetail;