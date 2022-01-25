import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Rental } from './rental.entity';

@Injectable()
export class RentalService {
    constructor(
        @InjectRepository(Rental)
        private rentalRepository: MongoRepository<Rental>
    ) { }
}
