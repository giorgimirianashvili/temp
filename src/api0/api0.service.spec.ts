import { Test, TestingModule } from '@nestjs/testing';
import { Api0Service } from './api0.service';

describe('Api0Service', () => {
  let service: Api0Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Api0Service],
    }).compile();

    service = module.get<Api0Service>(Api0Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
