import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployerContactRequestDto } from './dto/create-employer-contact-request.dto';
import { EmployerContactRequest } from './employer-contact-request.entity';

@Injectable()
export class EmployerContactRequestsService {
  constructor(
    @InjectRepository(EmployerContactRequest)
    private employerContactRequestsRepository: Repository<EmployerContactRequest>,
  ) {}

  async create(
    createEmployerContactRequestDto: CreateEmployerContactRequestDto,
  ): Promise<EmployerContactRequest> {
    const employerContactRequest =
      this.employerContactRequestsRepository.create(
        createEmployerContactRequestDto,
      );
    return this.employerContactRequestsRepository.save(employerContactRequest);
  }
}
