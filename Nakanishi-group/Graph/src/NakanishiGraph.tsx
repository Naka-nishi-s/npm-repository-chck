import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";

export const NakanishiGraph = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "ユーザー名" },
    { field: "domain", headerName: "ドメイン" },
    { field: "plan", headerName: "プラン" },
  ];

  const rows = [
    {
      id: 1,
      name: "A",
      domain: "domainA.com",
      plan: { id: 1, name: "bronze" },
    },
    {
      id: 2,
      name: "B",
      domain: "domainB.com",
      plan: { id: 2, name: "silver" },
    },
    {
      id: 3,
      name: "C",
      domain: "domainC.com",
      plan: { id: 3, name: "gold" },
    },
  ];

  return <DataGrid rows={rows} columns={columns} />;
};
