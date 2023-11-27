import { lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorBoundary from "../components/ErrorBoundary";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<ErrorBoundary />}>
      <Route index element={<Dashboard />} errorElement={<ErrorBoundary />} />
      <Route
        path="profile"
        element={<Profile />}
        errorElement={<ErrorBoundary />}
      />
    </Route>
  )
);

export { router };
