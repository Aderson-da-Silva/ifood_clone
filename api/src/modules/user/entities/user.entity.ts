import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Order } from 'src/modules/order/entities/order.entity';
import { Restaurant } from 'src/modules/restaurant/entities/restaurant.entity';
import { Address } from 'src/modules/shared/entities/address.entity';
import { Geolocation } from 'src/modules/shared/entities/geolocation.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  CLIENT = 'client',
  RESTAURANT = 'restaurant',
  DELIVERY = 'delivery',
}

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column({ unique: true })
  @Field(() => String)
  email: string;

  @Column()
  @Field(() => String)
  password: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  imageUrl: string;

  @Column({ unique: true })
  @Field(() => String)
  document_number: string;

  @Column()
  @Field(() => Date)
  dt_nasc: Date;

  @Column()
  @Field(() => String)
  phone: string;

  @ManyToMany(() => Address)
  @JoinTable({
    name: 'user_addresses', // Name of the join table
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'address_id',
      referencedColumnName: 'id',
    },
  })
  @Field(() => [Address])
  addresses: Address[];

  @OneToMany(() => Restaurant, (restaurant) => restaurant.owner)
  @Field(() => [Restaurant])
  restaurants: Restaurant[];

  @OneToMany(() => Order, (order) => order.client)
  @Field(() => [Order])
  orders: Order[];

  @Column({ type: 'enum', enum: UserRole, default: UserRole.CLIENT })
  @Field(() => UserRole)
  role: UserRole; // ADMIN | CLIENT | RESTAURANT | DELIVERY

  @Column({ type: 'jsonb', nullable: true })
  @Field(() => Geolocation, { nullable: true })
  lastLocation?: { lat: number; lng: number };

  @CreateDateColumn()
  @Field(() => Date)
  created_at: Date;
}
