import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (payload: TOrder) => {
  const result = await Order.create(payload);

  return result;
};

const getRevenueFromDB = async () => {
  const result = await Order.aggregate([
    // stage-1: group them all and retrieve totalRevenue
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: "$totalPrice",
        },
      },
    },
    // stage-2: skep _id and just send totalRevenue
    { $project: { _id: 0 } },
  ]);

  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getRevenueFromDB,
};
