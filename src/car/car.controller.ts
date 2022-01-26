import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Car } from './car.entity';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
    constructor(
        private carService: CarService
    ) { }

    @Get()
    async getCarAll() {
        return await this.carService.getCarAllService();
    }

    @Get(":id")
    async getCarById(@Param("id") id: any) {
        console.log("getCarById =>", id);
        return await this.carService.getCarByIdService(id)
    }

    @Get("ownerid/:email")
    async getCarByOwnerId(@Param() param: any) {
        return await this.carService.getCarByOwnerIdService(param.email);
    }

    @Post()
    async createCar(@Body() input: Car) {
        return await this.carService.createCarService(input);
    }

    @Delete(":id")
    async deleteCarById(@Param() param: any) {
        return await this.carService.deleteCarByIdService(param.id);
    }

    @Put()
    async editCarById(@Body() input: Car) {
        return await this.carService.editCarByIdService(input);
    }


    // @Get("id")
    // async getCarByEmail(@Param() id: any) {
    //     return {
    //         data: "this is car"
    //     }
    // }


}
