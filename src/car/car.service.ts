import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { MongoRepository, ObjectID, ObjectIdColumn } from 'typeorm';
import { Car } from './car.entity';

@Injectable()
export class CarService {
    constructor(
        @InjectRepository(Car)
        private carRepositoty: MongoRepository<Car>,
        private userService: UserService
    ) { }

    async getCarAllService() {
        return await this.carRepositoty.find();
    }

    async getCarByIdService(id: string) {
        console.log("getCarByIdService id", id);
        const carResponse = await this.carRepositoty.findOne(id);
        console.log("carResponse =>", carResponse);
        if (carResponse) {

            const userResponse = await this.userService.getUserByEmail(carResponse.owner_id);
            const dataResponse = {
                ...carResponse,
                owner: userResponse
            }
            return dataResponse
        }
        else {
            return "cannot find car"
        }
    }

    async getCarByOwnerIdService(email: string) {
        return await this.carRepositoty.find({ owner_id: email })
    }

    async createCarService(input: Car) {
        var moment = require('moment'); // require
        // moment().format();
        console.log("moment().format('DD-MMM-YYYY'); =>", moment().format('DD-MM-YYYY'));

        console.log("createCarService input", input);
        input.status = "Active";
        input.created = moment().format('DD-MM-YYYY');
        return await this.carRepositoty.save(input)
    }

    async editCarByIdService(input: Car) {
        // console.log("input =>", input);
        let carResponse = await this.carRepositoty.findOne(input._id);
        // console.log("carResponse =>", carResponse);
        input._id = carResponse._id;
        if (carResponse) {
            // carResponse = {
            //     ...carResponse,
            //     ...input
            // }
            // return await this.carRepositoty.update(carResponse._id, carResponse);
            const response = await this.carRepositoty.save({
                ...carResponse,
                ...input
            });

            const userResponse = await this.userService.getUserByEmail(response.owner_id);
            const dataResponse = {
                ...response,
                owner: userResponse
            }
            return dataResponse

        }
        else {
            return "cannot edit this car"
        }
    }

    async deleteCarByIdService(id: string) {
        console.log("deleteCarByIdService id", id);

        const response = await this.carRepositoty.delete(id)
        if (response) {
            return "delete car by ID is successfully"
        } else {
            return "cannot delete car by Id"
        }
    }
}
