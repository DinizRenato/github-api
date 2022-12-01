import { UsersGithub } from './../../clients/UsersGithub';
import { IUser } from '../../../../modules/users/domain/models/IUser';
import { IUserRepository } from './../../domain/repositories/IUserRepository';
import { UserDetailByUsernameGithub } from '../../../../modules/users/clients/UserDetailByUsernameGithub';

export class UsersRepository implements IUserRepository {

    private usersGithub: UsersGithub;
    private userDetailByUserNameGithub: UserDetailByUsernameGithub;

    private static INSTANCE: UsersRepository;

    private constructor() {
        this.usersGithub = new UsersGithub();
        this.userDetailByUserNameGithub = new UserDetailByUsernameGithub();
    }

    public static getInstance(): UsersRepository {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }
        return UsersRepository.INSTANCE;
    }

    findUsers(since?: number): Promise<IUser[]> {
        const response = this.usersGithub.execute(since);
        return response;
    }
    findByUsername(username: string): Promise<IUser> {
        const response = this.userDetailByUserNameGithub.execute(username);
        return response;
    }
}
