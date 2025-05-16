import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class AddressInput {
  @Field(() => String)
  @IsNotEmpty()
  address: string;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  number: number;

  @Field(() => String)
  @IsNotEmpty()
  zip_code: string;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  city_id: number;
}