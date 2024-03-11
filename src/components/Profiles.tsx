import React, { useEffect, useState } from "react";
import { fetchUsers } from "../services/users.services";
import { IPageInfo, IUser } from "../interfaces/user.interface";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params?.row?.name?.first} ${params?.row?.name?.last}`,
  },
  { field: "gender", headerName: "Gender", width: 120 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
    valueGetter: (params: GridValueGetterParams) => `${params?.row?.dob?.age}`,
  },
  {
    field: "city",
    headerName: "City",
    type: "number",
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params?.row?.location?.city}`,
  },
  {
    field: "country",
    headerName: "Country",
    type: "number",
    width: 250,
    valueGetter: (params: GridValueGetterParams) =>
      `${params?.row?.location?.country}`,
  },
  {
    field: "id",
    headerName: "Action",
    width: 200,
    renderCell: (params: GridRenderCellParams<any, Date>) => (
      <button>
        <Link to={`/profiles/${params?.row?.email}`}>View</Link>
      </button>
    ),
  },
];

function Profiles() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [pageInfo, setPageInfo] = useState<IPageInfo>();
  const getUserProfiles = async () => {
    const response = await fetchUsers();
    setUsers(
      response?.results?.map((user: IUser, index: number) => {
        return { id: index, ...user };
      })
    );
    setPageInfo(response?.info);
  };

  useEffect(() => {
    getUserProfiles();
  }, []);

  return <DataGrid columns={columns} rows={users} />;
}

export default Profiles;
