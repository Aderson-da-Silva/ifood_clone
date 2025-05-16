import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { City } from './entities/city.entity';
import { Country } from './entities/country.entity';
import { State } from './entities/state.entity';
import { SharedResolver } from './shared.resolver';
import { SharedService } from './shared.service';
import { Geolocation } from './entities/geolocation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Address, City, Country, State, Geolocation]),
    // other imports...
  ],
  providers: [SharedResolver, SharedService,  Address, City, Country, State, Geolocation],
  exports: [SharedService, Address, City, Country, State, Geolocation],
})
export class SharedModule {}
