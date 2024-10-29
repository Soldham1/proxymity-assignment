export type User = {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: Company;
  address: Address;
};

export type Company = {
  bs: string;
  catchPhrase: string;
  name: string;
};

export type Address = {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};
