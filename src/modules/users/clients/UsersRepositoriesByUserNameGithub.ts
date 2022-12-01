import axios, { AxiosStatic } from 'axios';

import AppError from '../../../shared/errors/AppError';
import { IRepository } from './../domain/models/IRepository';

const PATH = 'https://api.github.com/users/'

export class UsersRepositoriesByUserNameGithub {

    constructor(protected request: AxiosStatic = axios) {
    }

    public async execute(username: string): Promise<IRepository[]> {
        try {
            const response = await this.request.get<IRepository[]>(`${PATH}${username}/repos`);
            return response.data;
        } catch (e) {
            throw new AppError('User not found', 404)
        }
    }

}
