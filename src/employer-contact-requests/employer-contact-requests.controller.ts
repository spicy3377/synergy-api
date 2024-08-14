import { Controller, Post, Body } from '@nestjs/common';
import { EmployerContactRequestsService } from './employer-contact-requests.service';
import { CreateEmployerContactRequestDto } from './dto/create-employer-contact-request.dto';

@Controller('employer-contact-requests')
export class EmployerContactRequestsController {
  constructor(
    private readonly employerContactRequestsService: EmployerContactRequestsService,
  ) {}

  @Post()
  create(
    @Body() createEmployerContactRequestDto: CreateEmployerContactRequestDto,
  ) {
    return this.employerContactRequestsService.create(
      createEmployerContactRequestDto,
    );
  }
}
