import { Controller } from '@nestjs/common';
import { RentalService } from './rental.service';

@Controller('rental')
export class RentalController {
    constructor(
        private rentalService: RentalService
    ) { }

    async createRental() {

    }

    async getRentalById() {

    }

    async deleteRentalById() {
        
    }

    async getRentalByRenterId() {

    }

    async getRentalByOwnerId() {

    }

    async editRental() {

    }




}
