import { Controller, Get } from '@nestjs/common';
import { TalentsService } from './talents.service';

@Controller('dashboard')
export class TalentsController {
  constructor(private readonly talentsService: TalentsService) {}

  @Get('total-talents')
  async getTotalNumberOfTalents() {
    return this.talentsService.getTotalNumberOfTalents();
  }

  @Get('talents-per-week')
  async getTalentsPerWeek() {
    return this.talentsService.getTalentsPerWeek();
  }

  @Get('talents-per-day')
  async getTalentsPerDay() {
    return this.talentsService.getTalentsPerDay();
  }

  @Get('verified-talents')
  async getVerifiedTalents() {
    return this.talentsService.getVerifiedTalents();
  }
}
