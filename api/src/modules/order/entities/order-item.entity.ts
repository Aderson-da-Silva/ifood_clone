import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';

// order-item.entity.ts
@ObjectType()
@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => Int)
  order_id: number;

  @ManyToOne(() => Order, (order) => order.order_itens)
  @JoinColumn({ name: 'order_id' })
  @Field(() => Order)
  order: Order;

  @Column()
  @Field()
  productName: string; // Nome no momento do pedido (snapshot)

  @Column('int')
  @Field()
  quantity: number;

  @Column('decimal')
  @Field()
  unitPrice: number;
}
