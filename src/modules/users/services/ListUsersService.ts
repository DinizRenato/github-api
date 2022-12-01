
import { IUserRepository } from './../domain/repositories/IUserRepository';
import { injectable } from "tsyringe";
import { IUser } from '../domain/models/IUser';
import AppError from '../../../shared/errors/AppError';

@injectable()
class ListUsersService {

    constructor(
        private usersRepository: IUserRepository
    ) { }

    public async execute(since: any): Promise<IUser[]> {

        const query_since = parseInt(since);

        if (!Number.isInteger(query_since)) {
            throw new AppError('Invalid since option');
        }

        return this.usersRepository.findUsers(query_since);
    }

}

export default ListUsersService;
