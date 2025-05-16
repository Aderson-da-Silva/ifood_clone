import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { City } from './city.entity';
import { Country } from './country.entity';

@ObjectType()
@Entity('states')
export class State {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ length: 100 })
  name: string;

  @Field(() => String)
  @Column({ length: 2 })
  initials: string;

  @OneToMany(() => City, (city) => city.state)
  @Field(() => [City], { nullable: true })
  cities: City[];

  @Column()
  @Field(() => Int)
  country_id: number;

  @ManyToOne(() => Country, (country) => country.states)
  @Field(() => Country)
  country: Country;
}
