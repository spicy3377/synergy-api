import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployerContactRequestsService } from './employer-contact-requests.service';
import { EmployerContactRequestsController } from './employer-contact-requests.controller';
import { EmployerContactRequest } from './employer-contact-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployerContactRequest])],
  controllers: [EmployerContactRequestsController],
  providers: [EmployerContactRequestsService],
})
export class EmployerContactRequestsModule {}
