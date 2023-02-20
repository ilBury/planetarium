import { News } from "./news.type";
import { RoleUsers } from "./role-users.enum";

export interface User {
  login: string,
  password: string,
  email: string,
  role: RoleUsers,
  avatar: string,
  interested: News[],
  discount: number
}
