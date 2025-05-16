import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Geolocation {
  @Field(() => Number)
  lat: number;

  @Field(() => Number)
  lng: number;
}