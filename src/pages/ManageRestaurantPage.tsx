import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useGetMyRestaurantOrders,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  const { orders } = useGetMyRestaurantOrders();
  console.log('orders', orders);

  const isEditing = !!restaurant;

  return (
    <Tabs defaultValue="active-orders">
  <TabsList>
    <TabsTrigger value="active-orders">
      Active Orders ({orders?.filter((order) => order.status !== "delivered").length})
    </TabsTrigger>
    <TabsTrigger value="delivered-orders">
      Delivered Orders ({orders?.filter((order) => order.status === "delivered").length})
    </TabsTrigger>
    <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
  </TabsList>

  {/* Active Orders */}
  <TabsContent
    value="active-orders"
    className="space-y-5 bg-gray-50 p-10 rounded-lg"
  >
    <h2 className="text-2xl font-bold">
      {orders?.filter((order) => order.status !== "delivered").length} Active Orders
    </h2>
    {orders
      ?.filter((order) => order.status !== "delivered")
      .map((order) => (
        <OrderItemCard key={order._id} order={order} />
      ))}
  </TabsContent>

  {/* Delivered Orders */}
  <TabsContent
    value="delivered-orders"
    className="space-y-5 bg-gray-50 p-10 rounded-lg"
  >
    <h2 className="text-2xl font-bold">
      {orders?.filter((order) => order.status === "delivered").length} Delivered Orders
    </h2>
    {orders
      ?.filter((order) => order.status === "delivered")
      .map((order) => (
        <OrderItemCard key={order._id} order={order} />
      ))}
  </TabsContent>

  {/* Manage Restaurant */}
  <TabsContent value="manage-restaurant">
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={isEditing ? updateRestaurant : createRestaurant}
      isLoading={isCreateLoading || isUpdateLoading}
    />
  </TabsContent>
</Tabs>

  );
};

export default ManageRestaurantPage;
