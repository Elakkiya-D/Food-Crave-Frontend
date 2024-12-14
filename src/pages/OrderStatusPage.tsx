import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return "Loading...";
  }

  if (!orders || orders.length === 0) {
    return "No orders found";
  }

  return (
    <div className="space-y-10">
      {orders.map((order) => (
        <div className="space-y-10 bg-gray-50 p-10 rounded-lg">
          <OrderStatusHeader order={order} />
          <div className="grid gap-10 md:grid-cols-2">
            <OrderStatusDetail order={order} />
            <div className="relative w-[150px] h-[150px] mb-2 flex justify-center items-center mx-auto">
              <img
                src={order.restaurant.imageUrl}
                className="rounded-md-full object-cover"
                alt="Restaurant Logo"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  
}  

export default OrderStatusPage;
