import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Talent } from 'src/talents/talent.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Talent)
    private talentsRepository: Repository<Talent>,
  ) {}

  async getTotalTalents() {
    // Count the total number of talents
    const count = await this.talentsRepository.count();
    return { total: count };
  }

  async getTalentsStats() {
    // Count talents added per week and per day
    const [weeklyCount, dailyCount] = await Promise.all([
      this.talentsRepository.query(`
        SELECT COUNT(*) as count FROM talents WHERE created_at >= DATE_SUB(NOW(), INTERVAL 1 WEEK)
      `),
      this.talentsRepository.query(`
        SELECT COUNT(*) as count FROM talents WHERE created_at >= DATE_SUB(NOW(), INTERVAL 1 DAY)
      `),
    ]);
    return { weekly: weeklyCount[0].count, daily: dailyCount[0].count };
  }

  async getVerifiedTalents() {
    // Count the number of verified talents
    const verifiedCount = await this.talentsRepository.count({
      where: { verified: true },
    });
    return { verified: verifiedCount };
  }
}
