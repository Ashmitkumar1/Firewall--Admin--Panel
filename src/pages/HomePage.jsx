import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex h-screen">
      <section className="bg-light-gray-neon-p w-[15vw] h-full">
        <Sidebar />
      </section>

      <section className="flex-grow bg-white">
        <Dashboard />
      </section>
    </div>
  );
}
