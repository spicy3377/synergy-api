import { Body, Controller, Get, Post } from '@nestjs/common';
import { TalentsService } from './talents.service';
import { TalentResponseDto, TalentStatsDto } from './dto/talent-stats.dto';
import { Talent } from './talent.entity';

// Controller for handling requests related to talents
@Controller('dashboard')
export class TalentsController {
  // Inject TalentsService to interact with talent data
  constructor(private readonly talentsService: TalentsService) {}

  // Endpoint to get the total number of talents
  @Get('total-talents')
  async getTotalNumberOfTalents() {
    return this.talentsService.getTotalNumberOfTalents();
  }

  // Endpoint to get the number of talents per week
  @Get('talents-per-week')
  async getTalentsPerWeek() {
    return this.talentsService.getTalentsPerWeek();
  }

  // Endpoint to get the number of talents per day
  @Get('talents-per-day')
  async getTalentsPerDay() {
    return this.talentsService.getTalentsPerDay();
  }

  // Endpoint to get the number of verified talents
  @Get('verified-talents')
  async getVerifiedTalents() {
    return this.talentsService.getVerifiedTalents();
  }

  // Endpoint to get talent statistics
  @Get('talents-stats')
  async getTalentsStats(): Promise<TalentStatsDto[]> {
    return this.talentsService.getTalentsStats();
  }

  // Endpoint to get all talents
  @Get('all-talents')
  async getAllTalents(): Promise<TalentResponseDto[]> {
    return this.talentsService.getAllTalents();
  }

  @Post()
  async create(@Body() createTalentDto: Partial<Talent>): Promise<Talent> {
    return this.talentsService.create(createTalentDto);
  }
}
