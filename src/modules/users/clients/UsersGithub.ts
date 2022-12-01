import { IUser } from './../domain/models/IUser';
import axios, { AxiosStatic } from "axios";

const PATH = 'https://api.github.com/users?since='

export class UsersGithub {

    constructor(protected request: AxiosStatic = axios) {
    }

    public async execute(since?: number): Promise<IUser[]> {
        const query_since = since ?? 0;
        const response = await this.request.get<IUser[]>(`${PATH}${query_since}`);
        return response.data;
    }
}
