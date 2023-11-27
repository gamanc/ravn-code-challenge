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
import MyTask from "../pages/MyTask";

import { ROUTES } from "../constants/routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={ROUTES.main}
      element={<MainLayout />}
      errorElement={<ErrorBoundary />}
    >
      <Route index element={<Dashboard />} errorElement={<ErrorBoundary />} />
      <Route
        path={ROUTES.profile}
        element={<Profile />}
        errorElement={<ErrorBoundary />}
      />
      <Route
        path={ROUTES.myTasks}
        element={<MyTask />}
        errorElement={<ErrorBoundary />}
      />
    </Route>
  )
);

export { router };
