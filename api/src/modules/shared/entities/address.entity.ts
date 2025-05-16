import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { City } from './city.entity';
import { User } from 'src/modules/user/entities/user.entity';

@ObjectType()
@Entity('address')
export class Address {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  address: string;

  @Column()
  @Field(() => Int)
  number: number;

  @Column()
  @Field(() => String)
  zip_code: string;

  @Column()
  @Field(() => Int)
  city_id: number;

  @ManyToOne(() => City, (city) => city.adresses)
  @JoinColumn({ name: 'city_id' })
  @Field(() => City)
  city: City;

  @ManyToMany(() => User, (user) => user.addresses)
  @Field(() => [User])
  users: User[];
}
