import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Talent } from './talent.entity';
import { TalentResponseDto, TalentStatsDto } from './dto/talent-stats.dto';

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
      .where('talent.created_at >= :date', {
        date: oneWeekAgo.toISOString().split('T')[0],
      })
      .getCount();
  }

  async getTalentsPerDay(): Promise<number> {
    const today = new Date().toISOString().split('T')[0];
    return this.talentsRepository
      .createQueryBuilder('talent')
      .where('talent.created_at = :date', { date: today })
      .getCount();
  }

  async getVerifiedTalents(): Promise<number> {
    return this.talentsRepository.count({ where: { verified: true } });
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
        .where('YEAR(talent.created_at) = :year', { year })
        .andWhere('MONTH(talent.created_at) = :month', { month })
        .getCount();

      data.push(count);
    }

    return data;
  }

  async getAllTalents(): Promise<TalentResponseDto[]> {
    const talents = await this.talentsRepository.find();

    return talents.map((talent) => ({
      id: talent.id,
      first_name: talent.first_name,
      last_name: talent.last_name,
      email: talent.email,
      username: talent.username,
      profile_photo: talent.profile_photo,
      phone: talent.phone,
      about_you_completed: talent.about_you_completed,
      career_completed: talent.career_completed,
      credential_completed: talent.credential_completed,
      career_profile_completed: talent.career_profile_completed,
      current_salary: talent.current_salary,
      desired_salary: talent.desired_salary,
      employment_type: talent.employment_type,
      employment_style: talent.employment_style,
      employment_search_status: talent.employment_search_status,
      professional_adventure: talent.professional_adventure,
      career_plan: talent.career_plan,
      career_achievement: talent.career_achievement,
      career_quest: talent.career_quest,
      profile_complete: talent.profile_complete,
      isVerified: talent.verified,
    }));
  }

  async create(talentData: Partial<Talent>): Promise<Talent> {
    const talent = this.talentsRepository.create(talentData);
    return this.talentsRepository.save(talent);
  }
}
