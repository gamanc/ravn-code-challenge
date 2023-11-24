import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Dashboard />} />
    </Route>
  )
);

export { router };
