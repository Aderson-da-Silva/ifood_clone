import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { State } from './state.entity';

@ObjectType()
@Entity('countries')
export class Country {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ length: 2, unique: true })
  code: string;

  @Field(() => String)
  @Column({ length: 100 })
  name: string;

  @Field(() => Int)
  @Column()
  patter_number: number;

  @OneToMany(() => State, (state) => state.country)
  @Field(() => [State], { nullable: true })
  states: State[];
}
