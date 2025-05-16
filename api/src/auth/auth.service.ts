import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from 'src/modules/user/dto/create-user.input';
import { User } from 'src/modules/user/entities/user.entity';
import { UserService } from 'src/modules/user/user.service';



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
