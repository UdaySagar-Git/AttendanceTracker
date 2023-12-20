import { NextApiRequest, NextApiResponse } from "next";
import getCurrentUser from "@/actions/getCurrentUser";

const isAdminMiddleware =
  (handler: any) => async (req: NextApiRequest, res: NextApiResponse) => {
    const currentUser = await getCurrentUser();
    const userRole = currentUser?.role;

    if (userRole === "admin") {
      return handler(req, res); // User has admin role, proceed to the route handler
    } else {
      res
        .status(403)
        .json({ message: "Access denied. Only admins are allowed." });
    }
  };

export default isAdminMiddleware;
