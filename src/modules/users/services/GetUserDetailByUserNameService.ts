import { injectable } from 'tsyringe';

import { IUser } from '../domain/models/IUser';
import { IUserRepository } from '../domain/repositories/IUserRepository';

@injectable()
class GetUserDetailByUserNameService {
    constructor(
        private usersRepository: IUserRepository
    ) { }

    public async execute(username: string): Promise<IUser> {
        const user = this.usersRepository.findByUsername(username);
        return user;
    }
}

export default GetUserDetailByUserNameService;
