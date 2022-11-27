import { Details } from "../../components/screens/details.screen";
import { Favorites } from "../../components/screens/favorites.screen";
import { Home } from "../../components/screens/home.screen";
import { Team } from "../../components/screens/team.screen";
import { IRoute } from "../interfaces/route.interface";

export const routes: Record<string, IRoute> = {
  home: {
    path: "/",
    element: Home,
  },
  favorites: {
    path: "/favorites",
    element: Favorites,
  },
  team: {
    path: "/team",
    element: Team,
  },
  details: {
    path: "/details/:id",
    element: Details,
  },
};
