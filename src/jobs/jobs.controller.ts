import { Body, Controller, Get, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './jobs.entity';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  async getAllJobs(): Promise<Job[]> {
    return this.jobsService.getAllJobs();
  }

  @Post()
  async create(@Body() createJobDto: Partial<Job>): Promise<Job> {
    return this.jobsService.create(createJobDto);
  }
}
