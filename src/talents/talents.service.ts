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

  async getTotalNumberOfTalents(): Promise<number> {
    return this.talentsRepository.count();
  }

  async getTalentsPerWeek(): Promise<number> {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    return this.talentsRepository
      .createQueryBuilder('talent')
      .where('talent.createdAt >= :date', {
        date: oneWeekAgo.toISOString().split('T')[0],
      })
      .getCount();
  }

  async getTalentsPerDay(): Promise<number> {
    const today = new Date().toISOString().split('T')[0];
    return this.talentsRepository
      .createQueryBuilder('talent')
      .where('talent.createdAt = :date', { date: today })
      .getCount();
  }

  async getVerifiedTalents(): Promise<number> {
    return this.talentsRepository.count({ where: { isVerified: true } });
  }
}
