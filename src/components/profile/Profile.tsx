import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUser as getSingleUser } from "../../services/users.services";

type Params = {
  id: string;
};

const Profile: React.FC = () => {
  const { id } = useParams<Params>();
  const fetchUser = async () => {
    let user = await getSingleUser(id);

    console.log({ user });
  };

  useEffect(() => {
    fetchUser();
  });
  return <div>{id}</div>;
};

export default Profile;
