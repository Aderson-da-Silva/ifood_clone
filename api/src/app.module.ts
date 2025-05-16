import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { RestaurantModule } from './modules/restaurant/restaurant.module';
import { OrderModule } from './modules/order/order.module';
import { SharedModule } from './modules/shared/shared.module';
import { GqlModuleOptions, GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get<number>('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // set to false in production
      }),
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver, // <--- "driver" should be here, as shown in the docs
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        return {
          playground: ['dev', 'homolog'].includes(
            config.get<string>('NODE_ENV')!,
          )
            ? true
            : false,
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          context: ({ req, res }: any) => ({ req, res }),
          csrfPrevention: false,
        } as GqlModuleOptions;
      },
      inject: [ConfigService],
    }),
    UserModule,
    RestaurantModule,
    OrderModule,
    SharedModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
