import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) { }

    // @Get()
    @Post()
    async createOrUpdateProfile(@Body() input: User) {
        console.log("createOrUpdateProfile input", input);
        return await this.userService.createOrUpdateProfile(input);
    }

    @Get()
    async getUserAll() {
        return await this.userService.getUserAll();
    }

    @Get(":id")
    async getUserByEmail(@Param() id: any) {
        console.log("id", id);
        return await this.userService.getUserByEmail(id.id);
    }
}
