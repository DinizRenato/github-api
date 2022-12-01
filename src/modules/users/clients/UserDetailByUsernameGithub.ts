import { IUser } from '../domain/models/IUser';
import axios, { AxiosStatic } from "axios";
import AppError from '../../../shared/errors/AppError';

const PATH = 'https://api.github.com/users/'

export class UserDetailByUsernameGithub {
    constructor(protected request: AxiosStatic = axios) { }

    public async execute(username: string): Promise<IUser> {

        try {
            const response = await this.request.get<IUser>(`${PATH}${username}`);
            return response.data;
        } catch (e) {
            throw new AppError('User not found', 404)
        }

    }
}
