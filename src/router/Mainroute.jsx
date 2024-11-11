
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/DashboardPage";
import List from "../pages/list/OrderList";

function Mainrouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/List" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Mainrouter;



