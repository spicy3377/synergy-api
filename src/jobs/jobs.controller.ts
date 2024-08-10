import { Body, Controller, Get, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './jobs.entity';

// Controller for handling requests related to jobs
@Controller('jobs')
export class JobsController {
  // Inject JobsService to interact with job data
  constructor(private readonly jobsService: JobsService) {}

  // Endpoint to get all jobs
  @Get()
  async getAllJobs(): Promise<Job[]> {
    return this.jobsService.getAllJobs();
  }

  @Post()
  async create(@Body() createJobDto: Partial<Job>): Promise<Job> {
    return this.jobsService.create(createJobDto);
  }
}
