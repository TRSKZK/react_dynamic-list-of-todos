/// <reference types="react-scripts" />

interface Todo {
  id: number, 
  userId: number,
  title: string,
  completed: boolean,
};

interface User {
  id: number,
  name: string,
  username: string | null,
  email: string,
  phone: string,
}