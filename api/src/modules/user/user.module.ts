import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { SharedModule } from '../shared/shared.module';
import { Address } from '../shared/entities/address.entity';
import { Geolocation } from '../shared/entities/geolocation.entity';

@Module({
    imports: [
      TypeOrmModule.forFeature([User, Address, Geolocation]),
      SharedModule
    ],
    providers: [UserResolver, UserService],
    exports: [UserService]
})
export class UserModule {}
