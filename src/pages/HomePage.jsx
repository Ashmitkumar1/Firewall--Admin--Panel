import { useLocation } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";
import Datatable from "../components/dataTable";

export default function HomePage() {
  const location = useLocation();

  return (
    <div className="flex h-screen">
      <section className="bg-light-gray-neon-p w-[15vw] h-full">
        <Sidebar />
      </section>

      <section className="flex-grow bg-white">
        {location.pathname.includes("/dashboard") && <Dashboard />}
        {location.pathname.includes("/sites") && <Datatable />}
      </section>
    </div>
  );
}
