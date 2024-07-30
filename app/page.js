"use client";

import BackgroundController from "@/components/BackgroundController";
import Header from "@/components/Header";
import IconController from "@/components/IconController";
import LogoPreview from "@/components/LogoPreview";
import SideNav from "@/components/SideNav";
import { Button } from "@/components/ui/button";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import { useState } from "react";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});

  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <div className="w-64 ">
            <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-6 overflow-hidden">
            <div className="md:col-span-2 border shadow-sm p-5 overflow-y-auto">
              {selectedIndex == 0 ? (
                <IconController />
              ) : (
                <BackgroundController />
              )}
            </div>
            <div className="md:col-span-3  overflow-y-auto">
              <LogoPreview />
            </div>
            <div className="bg-blue-500 overflow-y-auto">Personal</div>
          </div>
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
}
