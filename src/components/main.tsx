import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "../state/constants/routes.constants";

import "../styling/App.css";

export const Main: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {Object.values(routes).map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};
