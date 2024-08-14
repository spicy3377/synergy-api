import { Test, TestingModule } from '@nestjs/testing';
import { EmployerContactRequestsController } from './employer-contact-requests.controller';

describe('EmployerContactRequestsController', () => {
  let controller: EmployerContactRequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployerContactRequestsController],
    }).compile();

    controller = module.get<EmployerContactRequestsController>(
      EmployerContactRequestsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
