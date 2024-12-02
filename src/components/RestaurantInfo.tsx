import { Restaurant } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dot } from "lucide-react";

type Props = {
  restaurant: Restaurant;
};

const RestaurantInfo = ({ restaurant }: Props) => {
  return (
    <Card className="border-sla">
    <CardHeader>
      <div className="flex items-center gap-4">
        <div className="relative w-[80px]">
          <img
            src={restaurant.imageUrl}
            className="rounded-full object-cover"
            alt="Restaurant Logo"
          />
        </div>
        <CardTitle className="text-3xl font-bold tracking-tight">
          {restaurant.restaurantName}
        </CardTitle>
      </div>
      <CardDescription>
        {restaurant.city}, {restaurant.country}
      </CardDescription>
    </CardHeader>
  
      <CardContent className="flex flex-wrap gap-2 max-w-full sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px]">
        {restaurant.cuisines.map((item, index) => (
          <span className="flex items-center">
            <span>{item}</span>
            {index < restaurant.cuisines.length - 1 && <Dot />}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
