import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { User } from './user.entity';
import * as uuid from 'uuid';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: MongoRepository<User>
    ) { }

    async createOrUpdateProfile(input: User) {
        const result = await this.userRepository.findOne({ email: input.email });
        console.log("result", result);
        if (result) { 
            input._id = result._id
            return await this.userRepository.save({
                ...result,
                ...input
            });
        }
        else {
            return await this.userRepository.save(input);
        }
    }

    async getUserAll() {
        return await this.userRepository.find();
    }

    async getUserByEmail(email: string) {
        return await this.userRepository.findOne({ email: email });
    }

    async deleteUserByEmail() {

    }
}
