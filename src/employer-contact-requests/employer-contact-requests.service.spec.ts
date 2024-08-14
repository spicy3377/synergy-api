import { Test, TestingModule } from '@nestjs/testing';
import { EmployerContactRequestsService } from './employer-contact-requests.service';

describe('EmployerContactRequestsService', () => {
  let service: EmployerContactRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployerContactRequestsService],
    }).compile();

    service = module.get<EmployerContactRequestsService>(
      EmployerContactRequestsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
