import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Order } from 'src/modules/order/entities/order.entity';
import { Address } from 'src/modules/shared/entities/address.entity';
import { User } from 'src/modules/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  description: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  imageUrl: string;

  @Column()
  address_id: number;

  @ManyToOne(() => Address)
  @JoinColumn({ name: 'address_id' })
  @Field(() => Address)
  address: Address;

  @Column()
  owner_id: string;

  @ManyToOne(() => User, (user) => user.restaurants)
  @JoinColumn({ name: 'owner_id' })
  @Field(() => User)
  owner: User;

  @OneToMany(() => Order, (order) => order.restaurant)
  @Field(() => [Order], { nullable: true })
  orders: Order[];
  
}
