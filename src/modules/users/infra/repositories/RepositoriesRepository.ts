import { IRepositoryRepository } from './../../domain/repositories/IRepositoryRepository';
import { IRepository } from './../../domain/models/IRepository';
import { UsersRepositoriesByUserNameGithub } from '../../../../modules/users/clients/UsersRepositoriesByUserNameGithub';

export class RepositoriesRepository implements IRepositoryRepository {

    private usersRepositoriesByUserNameGithub: UsersRepositoriesByUserNameGithub;

    private static INSTANCE: RepositoriesRepository;

    private constructor() {
        this.usersRepositoriesByUserNameGithub = new UsersRepositoriesByUserNameGithub();
    }

    public static getInstance(): RepositoriesRepository {
        if (!RepositoriesRepository.INSTANCE) {
            RepositoriesRepository.INSTANCE = new RepositoriesRepository();
        }
        return RepositoriesRepository.INSTANCE;
    }

    findRespositoriesByUserName(username: string): Promise<IRepository[]> {
        const response = this.usersRepositoriesByUserNameGithub.execute(username);
        return response;
    }
}
