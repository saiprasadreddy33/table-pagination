"use client";
import React from "react";
import StatusBox from "./common/StatusBox";
import TableFilter from "./filter/TableFilter";
import MainTable from "./filter/MainTable";
import { useAppContext } from "../provider/AppContext";
import TableFooter from "./table/TableFooter";

const MainContent = () => {
  const { isCollapsed } = useAppContext();
  return (
    <div
      className={`${
        isCollapsed ? "w-[calc(100%-3rem)]" : "w-[calc(100%-16rem)]"
      } ml-auto p-6 bg-gray-100`}
    >
      <h1 className="text-[20px] font-bold mb-4">Waitlist</h1>
      <StatusBox />
      <TableFilter />
      <MainTable />
      <TableFooter/>
    </div>
  );
};

export default MainContent;
