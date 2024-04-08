import { Test, TestingModule } from '@nestjs/testing';
import { Case2Controller } from './case2.controller';

describe('Case2Controller', () => {
  let controller: Case2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Case2Controller],
    }).compile();

    controller = module.get<Case2Controller>(Case2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
