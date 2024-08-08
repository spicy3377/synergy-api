import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TalentsService } from './talents.service';
import { TalentsController } from './talents.controller';
import { Talent } from './talent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Talent])],
  controllers: [TalentsController],
  providers: [TalentsService],
})
export class TalentsModule {}
