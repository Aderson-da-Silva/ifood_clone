import { SharedService } from './shared.service';
import { Country } from './entities/country.entity';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { City } from './entities/city.entity';
import { State } from './entities/state.entity';
import { Address } from './entities/address.entity';

@Resolver()
export class SharedResolver {
  constructor(private readonly sharedService: SharedService) {}

  @Query(() => [Country], { name: 'getAllCountries' })
  getAllCountries(): Promise<Country[]> {
    
    return this.sharedService.getAllCountries();
  }

   @Query(() => [City], { name: 'getAllCities' })
  getAllCities(): Promise<City[]> {
    
    return this.sharedService.getAllCities();
  }


   @Query(() => [State], { name: 'getAllStates' })
  getAllStates(): Promise<State[]> {
    
    return this.sharedService.getAllStates();
  }

   @Query(() => [Address], { name: 'getAllAdresses' })
  getAllAdresses(): Promise<Address[]> {
    
    return this.sharedService.getAllAdress();
  }
}
