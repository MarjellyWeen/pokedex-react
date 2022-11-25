import { Home } from "../../components/screens/home.screen";
import { IRoute } from "../interfaces/route.interface";

export const routes: Record<string, IRoute> = {
  home: {
    path: "/",
    element: Home,
  },
};
