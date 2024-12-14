import { useState } from "react";
import { useNearbyRestaurants } from "@/api/RestaurantApi";
import landingImage from "../assets/landing4.png";
import { useNavigate } from "react-router-dom";
import { cities } from "@/config/city-names-config";
import { SearchForm } from "@/components/SearchBar";


const HomePage = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState<string | undefined>("Chennai"); // Default no city selected
  const [maxDeliveryTime] = useState(60); // Example delivery time (can be dynamic)
  
  const { restaurants, isLoading } = useNearbyRestaurants(maxDeliveryTime, selectedCity); // pass selectedCity

  const handleCardClick = (restaurantId: string) => {
    console.log(`Navigating to /restaurant/${restaurantId}`);
    navigate(`/detail/${restaurantId}`);
  };

const handleSearchSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  const searchFormValues: SearchForm = { searchQuery: 'chennai' };
  navigate({
    pathname: `/search/${searchFormValues.searchQuery}`,
  });
};


  const handleViewMoreClick = () => {
    console.log("Navigating with selectedCity:", selectedCity);
    // Navigate to a page where more restaurants are displayed (you can update this based on your routing setup)
    navigate(`/search/${selectedCity}`);
  };

  // Handle city selection change
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className="flex flex-col gap-12">

      {/* City Dropdown Section */}
      <div className="flex items-center justify-start mt-4">
        <label htmlFor="city" className="text-xl font-semibold text-orange-600 mr-4">
          Select a City:
        </label>
        <select
          id="city"
          value={selectedCity}
          onChange={handleCityChange}
          className="p-2 text-sm border rounded-full bg-orange-50 text-Black focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Nearby Restaurants Section */}
      <div className="mt-2">
      <div className="mt-2 flex items-center justify-between">
  <h2 className="text-2xl font-bold text-orange-600">Restaurants Near You</h2>
  <button
  className="text-white bg-orange-500 hover:bg-black px-6 py-2 text-sm font-medium rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:scale-105"
  onClick={handleViewMoreClick}
>
  View All
</button>


</div>

        {!selectedCity && (
          <div className="mt-4 p-4 bg-orange-100 rounded-lg text-center">
            <p className="text-lg text-orange-600">Please select a city to see nearby restaurants.</p>
          </div>
        )}
        {isLoading ? (
          <p className="text-center mt-5">Loading...</p>
        ) : restaurants?.length === 0 && selectedCity ? (
          <div className="mt-4 p-4 bg-orange-100 rounded-lg text-center">
            <p className="text-lg text-orange-600">No restaurants found in your area.</p>
          </div>
        ) : (
          <div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {restaurants?.map((restaurant) => (
                <div
                  key={restaurant._id}
                  className="border border-orange-500 rounded-lg p-3 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-orange-700"
                  onClick={() => handleCardClick(restaurant._id)}
                >
                  <img
                    src={restaurant.imageUrl}
                    alt={restaurant.restaurantName}
                    className="rounded-lg w-full object-cover transition-all duration-300 hover:opacity-90"
                  />
                  <h3 className="mt-3 font-bold text-lg">{restaurant.restaurantName}</h3>
                  <p className="text-gray-600">{restaurant.city}</p>
                  <p className="text-gray-600">{restaurant.country}</p>
                  <p className="text-orange-500 font-semibold">
                    Delivery in {restaurant.estimatedDeliveryTime} minutes
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

            {/* Discover best restaurants */}
            <div className="mt-2">
      <div className="mt-2 flex items-center justify-between">
  <h2 className="text-2xl font-bold text-orange-600">Discover best restaurants</h2>
  <button
  className="text-white bg-orange-500 hover:bg-black px-6 py-2 text-sm font-medium rounded-lg shadow-md transition-all duration-200 ease-in-out transform hover:scale-105"
  onClick={handleSearchSubmit}
>
  View All
</button>


</div>
        {isLoading ? (
          <p className="text-center mt-5">Loading...</p>
        ) : restaurants?.length === 0 ? (
          <div className="mt-4 p-4 bg-orange-100 rounded-lg text-center">
            <p className="text-lg text-orange-600">No restaurants found in your area.</p>
          </div>
        ) : (
          <div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {restaurants?.map((restaurant) => (
                <div
                  key={restaurant._id}
                  className="border border-orange-500 rounded-lg p-3 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-orange-700"
                  onClick={() => handleCardClick(restaurant._id)}
                >
                  <img
                    src={restaurant.imageUrl}
                    alt={restaurant.restaurantName}
                    className="rounded-lg w-full object-cover transition-all duration-300 hover:opacity-90"
                  />
                  <h3 className="mt-3 font-bold text-lg">{restaurant.restaurantName}</h3>
                  {/* <p className="text-gray-600">{restaurant.city}</p>
                  <p className="text-gray-600">{restaurant.country}</p> */}
                  {/* <p className="text-orange-500 font-semibold">
                    Delivery in {restaurant.estimatedDeliveryTime} minutes
                  </p> */}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Hero Section */}
<div className="grid md:grid-cols-2 gap-5 py-12 px-6 bg-gray-50">
  <div className="flex flex-col items-center justify-center gap-4 text-center">
    <h2 className="text-4xl font-extrabold text-orange-600 tracking-tight">
     Experience the Joy of Dining!
    </h2>
    <p className="text-lg text-gray-700">
      Explore a variety of cuisines, find top-rated restaurants, and enjoy fast delivery—all in one place.
    </p>
    <button
      className="bg-orange-500 hover:bg-black text-white py-2 px-8 rounded-lg shadow-md font-semibold text-lg transition-all duration-300"
      onClick={handleSearchSubmit}
    >
      Start Exploring
    </button>
  </div>
  <div className="relative flex items-center justify-center">
    <img
      src={landingImage}
      alt="Discover Food"
      className="w-full h-auto rounded-lg shadow-lg object-cover transition-all duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40 rounded-lg"></div>
  </div>
</div>

    </div>
  );
};

export default HomePage;
