// ManageRestaurantPage.tsx
import { useCreateMyRestaurant, useGetMyRestaurant, useGetMyRestaurantOrders, useUpdateMyRestaurant,useUpdateMyRestaurantOrder } from "@/api/MyRestaurantApi";
import { Order, OrderStatus } from "@/types";
import { useState, useEffect } from "react";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";
interface UpdateOrderStatusRequest {
  orderId: string;
  status: OrderStatus;
}
const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } = useUpdateMyRestaurant();
  const { orders: fetchedOrders } = useGetMyRestaurantOrders();

  // Initialize orders with correct type
  const [orders, setOrders] = useState<Order[]>([]);

  // Sync local state with fetched orders
  useEffect(() => {
    if (fetchedOrders) {
      setOrders(fetchedOrders);
    }
  }, [fetchedOrders]);

  // Assume you have a hook for updating order status
  const { updateRestaurantStatus: updateOrderStatusAPI } = useUpdateMyRestaurantOrder();

  // Function to handle status change and update the backend
  const updateOrderStatus = async (orderId: string, newStatus: OrderStatus) => {
    // Optimistically update the local state
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order
      )
    );

// Create the request object
const updateRequest: UpdateOrderStatusRequest = {
  orderId,
  status: newStatus,
};

// Persist the change in the backend
try {
  await updateOrderStatusAPI(updateRequest); // Pass the correct object
} catch (error) {
  console.error("Failed to update order status:", error);
  // Handle error by reverting state or showing an error message
}
  };

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
            <OrderItemCard
              key={order._id}
              order={order}
              onUpdateStatus={(newStatus: OrderStatus) => updateOrderStatus(order._id, newStatus)}
            />
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
            <OrderItemCard
              key={order._id}
              order={order}
              onUpdateStatus={(newStatus: OrderStatus) => updateOrderStatus(order._id, newStatus)}
            />
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
