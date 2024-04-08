import { Test, TestingModule } from '@nestjs/testing';
import { Case1Controller } from './case1.controller';

describe('Case1Controller', () => {
  let controller: Case1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Case1Controller],
    }).compile();

    controller = module.get<Case1Controller>(Case1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
