import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Car } from './car.entity';

@Injectable()
export class CarService {
    constructor(
        @InjectRepository(Car)
        private carRepositoty: MongoRepository<Car>
    ) { }

    async getCarAllService() {

    }

    async getCarByIdService() {

    }

    async getCarByOwnerIdService() {

    }

    async createCarService() {

    }

    async deleteCarByIdService() {

    }
}
