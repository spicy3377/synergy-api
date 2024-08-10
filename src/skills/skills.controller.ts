import { Body, Controller, Get, Post } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { Skill } from './skills.entity';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  async getAllSkills(): Promise<Skill[]> {
    return this.skillsService.getAllSkills();
  }

  @Post()
  async create(@Body() createSkillDto: Partial<Skill>): Promise<Skill> {
    return this.skillsService.create(createSkillDto);
  }
}
