import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Skill } from './skills.entity';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skill)
    private skillsRepository: Repository<Skill>,
  ) {}

  async getAllSkills(): Promise<Skill[]> {
    return await this.skillsRepository.find();
  }

  async create(skillData: Partial<Skill>): Promise<Skill> {
    const skill = this.skillsRepository.create(skillData);
    return this.skillsRepository.save(skill);
  }
}
