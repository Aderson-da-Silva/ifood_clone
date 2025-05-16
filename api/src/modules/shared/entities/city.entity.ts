import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from './address.entity';
import { State } from './state.entity';

@ObjectType()
@Entity('city')
export class City {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @OneToMany(() => Address, (address) => address.city)
  @Field(() => [Address], { nullable: true })
  adresses: Address[];

  @Column()
  @Field(() => Int)
  state_id: number;

  @ManyToOne(() => State, (state) => state.cities)
  @JoinColumn({ name: 'state_id' })
  @Field(() => State)
  state: State;
}
