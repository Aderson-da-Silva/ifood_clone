import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';
import { State } from './entities/state.entity';
import { Country } from './entities/country.entity';
import { Address } from './entities/address.entity';

@Injectable()
export class SharedService {
  constructor(
    @InjectRepository(City) private cityRepository: Repository<City>,
    @InjectRepository(State) private stateRepository: Repository<State>,
    @InjectRepository(Country) private countryRepository: Repository<Country>,
    @InjectRepository(Address) private addressRepository: Repository<Address>,
  ) {}

  async getAllCities(): Promise<City[]> {
    console.log(await this.cityRepository.find({
      relations: {
        state: {
          country: true,
        },
      },
    }))
    return this.cityRepository.find({
      relations: {
        state: {
          country: true,
        },
      },
    });
  }

  getAllStates(): Promise<State[]> {
    return this.stateRepository.find({
      relations: {
        country: true,
      },
    });
  }

  getAllCountries(): Promise<Country[]> {
    return this.countryRepository.find();
  }

  getAllAdress(): Promise<Address[]> {
    return this.addressRepository.find({
      relations: {
        city: {
          state: {
            country: true,
          },
        },
      },
    });
  }
}
