import { IRepository } from "../models/IRepository";

export interface IRepositoryRepository {
    findRespositoriesByUserName(username: string): Promise<IRepository[]>;
}
