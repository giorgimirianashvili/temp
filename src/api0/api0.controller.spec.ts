import { Test, TestingModule } from '@nestjs/testing';
import { Api0Controller } from './api0.controller';
import { Api0Service } from './api0.service';

describe('Api0Controller', () => {
  let controller: Api0Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Api0Controller],
      providers: [Api0Service],
    }).compile();

    controller = module.get<Api0Controller>(Api0Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
