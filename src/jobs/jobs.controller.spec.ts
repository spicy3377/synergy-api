import { Test, TestingModule } from '@nestjs/testing';
import { JobsController } from './jobs.controller';

// Test suite for JobsController
describe('JobsController', () => {
  let controller: JobsController;

  // Setup before each test
  beforeEach(async () => {
    // Create and compile a testing module with JobsController
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobsController],
    }).compile();

    // Get an instance of JobsController from the testing module
    controller = module.get<JobsController>(JobsController);
  });

  // Test to check if JobsController is defined
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
