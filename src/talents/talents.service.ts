import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Talent } from './talent.entity';
import { TalentStatsDto } from './dto/talent-stats.dto';

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

  async getTalentsStats(): Promise<TalentStatsDto[]> {
    const currentYear = new Date().getFullYear();
    const lastYear = currentYear - 1;

    // Replace these with actual queries to get data per month for the current year and last year
    const thisYearData = await this.getTalentsDataByYear(currentYear);
    const lastYearData = await this.getTalentsDataByYear(lastYear);

    return [
      { name: 'This year', data: thisYearData },
      { name: 'Last year', data: lastYearData },
    ];
  }

  private async getTalentsDataByYear(year: number): Promise<number[]> {
    const data: number[] = [];

    for (let month = 1; month <= 12; month++) {
      const count = await this.talentsRepository
        .createQueryBuilder('talent')
        .where('YEAR(talent.createdAt) = :year', { year })
        .andWhere('MONTH(talent.createdAt) = :month', { month })
        .getCount();

      data.push(count);
    }

    return data;
  }
}
