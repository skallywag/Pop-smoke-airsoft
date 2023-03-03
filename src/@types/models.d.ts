export interface User {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  createOn: string;
  modifiedOn?: string;
  state?: string;
  city?: string;
}

export interface operations {
  id: number;
  title: string;
  duration: string;
  date: string;
  time: string | number;
  description: string;
  operators: number;
  image?: string;
}

export interface Product {
  id: number;
  image: string;
  price: string | number;
  title: string;
  description: string;
}
