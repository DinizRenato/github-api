import { injectable } from 'tsyringe';
import { IRepository } from '../domain/models/IRepository';
import { IRepositoryRepository } from './../domain/repositories/IRepositoryRepository';
import AppError from '../../../shared/errors/AppError';

@injectable()
class GetUserRepositoriesByUserNameService {
    constructor(
        private repositoriesRepository: IRepositoryRepository
    ) { }

    public async execute(username: string): Promise<IRepository[]> {
        const list = this.repositoriesRepository.findRespositoriesByUserName(username);
        return list;
    }
}


export default GetUserRepositoriesByUserNameService;
