import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from '../user/dto/create-user.input';
import { User } from '../user/entities/user.entity';

const SALT_ROUNDS = 10;

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async register(createUserInput: CreateUserInput): Promise<User> {
        const hashedPassword = await bcrypt.hash(createUserInput.password, SALT_ROUNDS);
        createUserInput.password = hashedPassword;
        return this.userService.create(createUserInput);
    }
}
