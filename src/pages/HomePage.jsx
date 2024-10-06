import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Datatable from "../components/dataTable";

export default function HomePage() {
  const [activeKey, setActiveKey] = useState(null);

  const renderContent = () => {
    switch (activeKey) {
      case "site":
        return <Datatable />;
      default:
        return null; // Or some default content
    }
  };

  return (
    <section className="bg-light-gray-neon-p w-screen h-screen flex">
      <div className="w-[13.33%]">
        <Sidebar onSelectKey={setActiveKey} />
      </div>
      <div className="w-[86.67%]">
        {renderContent()}
      </div>
    </section>
  );
}
