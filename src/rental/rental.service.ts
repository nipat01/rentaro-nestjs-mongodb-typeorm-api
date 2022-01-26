import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { MongoRepository } from 'typeorm';
import { Rental } from './rental.entity';
// import moment from 'moment';

@Injectable()
export class RentalService {
    constructor(
        @InjectRepository(Rental)
        private rentalRepository: MongoRepository<Rental>,
        private userService: UserService
    ) { }

    async getAllRentalService() {

        return await this.rentalRepository.find();
    }

    async createRentalService(input: Rental) {
        var moment = require('moment'); // require
        // moment().format();
        console.log("moment().format('DD-MMM-YYYY'); =>", moment().format('DD-MM-YYYY'));

        console.log("input before", input);
        input.status = "Pending";
        input.created = moment().format('DD-MM-YYYY');
        console.log("input after", input);

        return await this.rentalRepository.save(input);

    }

    async getRentalByIdService(id: string) {
        return await this.rentalRepository.findOne(id);
    }

    async deleteRentalByIdService(id: string) {
        const response = await this.rentalRepository.delete(id);
        if (response) {
            return "delete rental by ID is successfully"
        } else {
            return "cannot delete rental by Id"
        }
    }

    async getRentalByCarIdService(carId: string) {
        console.log("carId =>", carId);

        const response = await this.rentalRepository.find({ car_id: carId });
        console.log("response =>", response);
        return response

    }
    async getRentalByRenterIdService(renterId: string) {
        let response;
        const rentalResponse = await this.rentalRepository.find({ renter_id: renterId });
        console.log("response =>", rentalResponse);
        response = await Promise.all(
            rentalResponse.map(async item => {
                return {
                    ...item,
                    owner: await this.userService.getUserByEmail(item.owner_id)
                }
            })
        )
        console.log("response =>", response);

        return response;
    }

    async getRentalByOwnerIdService(ownerId: string) {
        let response;
        const rentalResponse = await this.rentalRepository.find({ owner_id: ownerId });
        console.log("response =>", rentalResponse);
        response = await Promise.all(
            rentalResponse.map(async item => {
                return {
                    ...item,
                    renter: await this.userService.getUserByEmail(item.renter_id)
                }
            })
        )
        console.log("response =>", response);

        return response;
    }

    async editRentalService(input: Rental) {
        let rentalResponse = await this.rentalRepository.findOne(input._id);
        input._id = rentalResponse._id;
        if (rentalResponse) {
            const response = await this.rentalRepository.save({
                ...rentalResponse,
                ...input
            });
            return response;
        }
    }

}
