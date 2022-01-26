import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Rental } from './rental.entity';
import { RentalService } from './rental.service';

@Controller('rental')
export class RentalController {
    constructor(
        private rentalService: RentalService
    ) { }

    @Get()
    async getAllRental() {
        return await this.rentalService.getAllRentalService();
    }

    @Post()
    async createRental(@Body() input: Rental) {
        return await this.rentalService.createRentalService(input);
    }

    @Get(":id")
    async getRentalById(@Param() param: any) {
        return await this.rentalService.getRentalByIdService(param.id);
    }

    @Delete(":id")
    async deleteRentalById(@Param() param: any) {
        return await this.rentalService.deleteRentalByIdService(param.id);
    }

    @Get("carid/:carid")
    async getRentalByCarId(@Param() param: any) {
        console.log("param =>", param);

        return await this.rentalService.getRentalByCarIdService(param.carid);
    }

    @Get("renterid/:email")
    async getRentalByRenterId(@Param() param: any) {
        return await this.rentalService.getRentalByRenterIdService(param.email);
    }

    @Get("ownerid/:email")
    async getRentalByOwnerId(@Param() param: any) {
        return await this.rentalService.getRentalByOwnerIdService(param.email);
    }

    @Put()
    async editRental(@Body() input: Rental) {
        return await this.rentalService.editRentalService(input);
    }




}
