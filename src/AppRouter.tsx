import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReserveTable from "./ui/ReserveTable";
import Home from "./ui/Home";
import ShowReservations from "./ui/ShowReservations";
import ContactUs from "./ui/ContactUs";
import MainLayout from "./layouts/MainLayout";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={MainLayout}>
            <Route path="/" Component={Home} />
            <Route path="/reserve-table" Component={ReserveTable} />
            <Route path="/show-reservations" Component={ShowReservations} />
            <Route path="/contact-us" Component={ContactUs} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
