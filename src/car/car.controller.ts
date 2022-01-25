import { Controller, Get, Param } from '@nestjs/common';

@Controller('car')
export class CarController {

    async getCarAll() {

    }

    async getCarById() {

    }

    async getCarByOwnerId() {

    }

    async createCar() {

    }

    async deleteCarById() {

    }

    @Get("id")
    async getCarByEmail(@Param() id: any) {
        return {
            data: "this is car"
        }
    }


}
