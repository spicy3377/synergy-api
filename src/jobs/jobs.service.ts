import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './jobs.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobsRepository: Repository<Job>,
  ) {}

  async getAllJobs(): Promise<Job[]> {
    return await this.jobsRepository.find();
  }

  async create(jobData: Partial<Job>): Promise<Job> {
    const job = this.jobsRepository.create(jobData);
    return this.jobsRepository.save(job);
  }
}
