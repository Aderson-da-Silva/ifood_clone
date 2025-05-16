import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Restaurant } from 'src/modules/restaurant/entities/restaurant.entity';
import { User } from 'src/modules/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderItem } from './order-item.entity';

export enum OrderStatus {
  PENDING = 'pending',
  PREPARING = 'preparing',
  IN_TRANSIT = 'in_transit',
  DELIVERED = 'delivered',
}

registerEnumType(OrderStatus, {
  name: 'OrderStatus',
  description: 'The status of an order',
});

@ObjectType()
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  description: string;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING })
  @Field(() => OrderStatus)
  status: OrderStatus; // PENDING → PREPARING → IN_TRANSIT → DELIVERED

  @Column('decimal')
  @Field()
  total: number;

  @Column()
  @Field(() => String)
  restaurant_id: string;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.orders)
  @JoinColumn({ name: 'restaurant_id' })
  @Field(() => Restaurant)
  restaurant: Restaurant;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  @Field(() => [OrderItem], { nullable: true })
  order_itens: OrderItem[];

  @Column()
  @Field(() => Int)
  client_id: number;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'client_id' })
  @Field(() => User)
  client: User;
}
