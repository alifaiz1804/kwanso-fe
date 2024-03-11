import axios from "axios";
import { IPageInfo, IUser } from "../interfaces/user.interface";

export const fetchUsers = async (
  limit: number = 10,
  page: number = 1,
  filter: string = ""
): Promise<any> => {
  try {
    const respose = await axios.get(
      `${
        process.env.REACT_APP_BASE_URI
      }?inc=email,name,gender,dob,location&results=${limit}&page=${page}${
        filter ? `&filter=${filter}` : ""
      }`
    );
    return respose?.data;
  } catch (error) {
    throw error;
  }
};

export const fetchUser = async (id: string = ""): Promise<any> => {
  try {
    const respose = await axios.get(
      `${process.env.REACT_APP_BASE_URI}?seed=${id}`
    );
    return respose?.data;
  } catch (error) {
    throw error;
  }
};
