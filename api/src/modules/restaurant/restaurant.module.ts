import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantResolver } from './restaurant.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Restaurant]),
    // other imports...
  ],
  providers: [RestaurantResolver, RestaurantService],
})
export class RestaurantModule {}
