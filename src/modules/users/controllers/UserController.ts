import { Request, Response } from 'express';
import api_config from 'src/shared/util/api_config';
import { RepositoriesRepository } from '../infra/repositories/RepositoriesRepository';
import { UsersRepository } from '../infra/repositories/UsersRepository';
import GetUserDetailByUserNameService from '../services/GetUserDetailByUserNameService';
import GetUserRepositoriesByUserNameService from '../services/GetUserRepositoriesByUserNameService';

import ListUsersService from '../services/ListUsersService';


export default class UserController {

    public async getUsers(request: Request, response: Response): Promise<Response> {
        const { since } = request.query;
        const usersRepository = UsersRepository.getInstance();
        const listUsersService = new ListUsersService(usersRepository);
        const list = await listUsersService.execute(since ?? 0);
        return response.json({
            data: list,
            links: [
                {
                    "next_page": `${api_config.urls.API_URL}api/users?since=${list[list.length - 1].id}`
                }
            ]
        });
    }

    public async getUserByUserName(request: Request, response: Response): Promise<Response> {
        const { username } = request.params;
        const usersRepository = UsersRepository.getInstance();
        const getUserDetailByUserNameService = new GetUserDetailByUserNameService(usersRepository);
        const user = await getUserDetailByUserNameService.execute(username);
        return response.json(user);
    }

    public async getUserReposByUserName(request: Request, response: Response): Promise<Response> {
        const { username } = request.params;
        const repositoriesRepository = RepositoriesRepository.getInstance();
        const getUserRepositoriesByUserNameService = new GetUserRepositoriesByUserNameService(repositoriesRepository);
        const list = await getUserRepositoriesByUserNameService.execute(username);
        return response.json(list);
    }
}
