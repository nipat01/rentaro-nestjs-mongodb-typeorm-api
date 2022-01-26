import { Module } from '@nestjs/common';
import { RentalService } from './rental.service';
import { RentalController } from './rental.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rental } from './rental.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Rental]),
    UserModule,
  ],
  providers: [RentalService],
  controllers: [RentalController]
})
export class RentalModule { }
