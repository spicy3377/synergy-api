import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { Skill } from './skills.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Skill])],
  providers: [SkillsService],
  controllers: [SkillsController],
})
export class SkillsModule {}
