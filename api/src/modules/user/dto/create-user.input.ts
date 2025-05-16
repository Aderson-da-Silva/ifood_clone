import { InputType, Field, registerEnumType } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUUID, MinLength } from 'class-validator';
import { UserRole } from '../entities/user.entity';
import { AddressInput } from 'src/modules/shared/dto/address.input';


// Register the UserRole enum for GraphQL
registerEnumType(UserRole, {
  name: 'UserRole',
  description: 'User role types',
});

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  imageUrl?: string;

  @Field(() => String)
  @IsNotEmpty()
  document_number: string;

  @Field(() => Date)
  dt_nasc: Date;

  @Field(() => String)
  phone: string;

  @Field(() => [AddressInput], { nullable: true })
  @IsOptional()
  addresses?: AddressInput[];

  @Field(() => UserRole, { defaultValue: UserRole.CLIENT })
  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole;
}
