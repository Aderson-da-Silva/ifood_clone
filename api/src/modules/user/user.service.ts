import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from '../shared/entities/address.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}
  async create(createUserInput: CreateUserInput): Promise<User> {
    let addresses = [];
    if (createUserInput.addresses && createUserInput.addresses.length > 0) {
      addresses = await Promise.all(
        createUserInput.addresses.map((addressInput) =>
          this.addressRepository.save(
            this.addressRepository.create(addressInput),
          ),
        ),
      );
    }

    const user = this.usersRepository.create(createUserInput);
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: string) {
    return this.usersRepository.findOneBy({ id: id });
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string): Promise<User | null> {
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: ['addresses'],
    });

    if (!user) return null;

    if (user.addresses && user.addresses.length > 0) {
      await this.usersRepository.remove(user);
      await this.addressRepository.remove(user.addresses);
    } else await this.usersRepository.remove(user);

    return user;
  }
}
