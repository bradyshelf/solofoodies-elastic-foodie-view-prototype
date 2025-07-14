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
    image: "/lovable-uploads/ac468fcd-a778-4887-97c9-2cb092c93be6.png",
    rating: 4.8,
    reviews: 324,
    cuisine: "Mediterranean",
    location: "Downtown Barcelona",
    hours: "11:00 AM - 11:00 PM",
    description: "Authentic Mediterranean cuisine with a modern twist. Experience the finest ingredients and traditional recipes passed down through generations.",
    specialties: ["Paella Valenciana", "Grilled Octopus", "Jamón Ibérico", "Sangria"],
    priceRange: "€€€",
    features: ["Outdoor Seating", "Wine Bar", "Live Music", "Private Events"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4">
          <Button
            onClick={handleBack}
            className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
            size="sm"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h1 className="text-3xl font-bold text-white mb-2">{restaurant.name}</h1>
          <div className="flex items-center space-x-4 text-white/90">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{restaurant.rating}</span>
              <span>({restaurant.reviews} reviews)</span>
            </div>
            <span>•</span>
            <span>{restaurant.cuisine}</span>
            <span>•</span>
            <span>{restaurant.priceRange}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Basic Info */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{restaurant.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{restaurant.hours}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">Suitable for groups</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{restaurant.description}</p>
            </div>
          </div>
        </div>

        {/* Specialties */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Signature Dishes</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {restaurant.specialties.map((specialty, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                <span className="text-sm font-medium text-gray-700">{specialty}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Features & Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {restaurant.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-medium">
              Start Collaboration
            </Button>
            <Button variant="outline" className="flex-1">
              Save Restaurant
            </Button>
            <Button variant="outline" className="flex-1">
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;