import { IUser } from "../models/IUser";

export interface IUserRepository {
    findUsers(since?: number): Promise<IUser[]>;
    findByUsername(username: string): Promise<IUser>;
}
