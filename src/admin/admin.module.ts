import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { Admin, ReservedUsername } from './admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Admin, ReservedUsername])],
  providers: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
