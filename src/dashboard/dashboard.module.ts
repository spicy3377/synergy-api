import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Talent } from 'src/talents/talent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Talent])], // Register Talent entity
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
