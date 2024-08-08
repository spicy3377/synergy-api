import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Talent } from './talent.entity';

@Injectable()
export class TalentsService {
  constructor(
    @InjectRepository(Talent)
    private talentsRepository: Repository<Talent>,
  ) {}

  findAll(): Promise<Talent[]> {
    return this.talentsRepository.find();
  }

  findOne(id: number): Promise<Talent> {
    return this.talentsRepository.findOne({ where: { id } });
  }

  create(talent: Talent): Promise<Talent> {
    return this.talentsRepository.save(talent);
  }

  async remove(id: number): Promise<void> {
    await this.talentsRepository.delete(id);
  }

  // Additional methods as needed
}
