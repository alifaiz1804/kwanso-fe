export interface ILocation {
  street: {
    number: string;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
}

export interface IUser {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: Location;
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export interface IPageInfo {
  results: number;
  page: number;
}
