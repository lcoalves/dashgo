import { useQuery } from "react-query";

import { api } from "../api";
import { User } from "../mirage";

type UserResponse = {
  users: User[];
};

export async function getUsers(): Promise<User[]> {
  const response = await api.get<UserResponse>("/users");

  const users = response.data.users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: new Date(user.created_at).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  }));

  return users;
}

export function useUsers() {
  return useQuery("users", getUsers, {
    staleTime: 1000 * 10, // 10 seconds
  });
}
