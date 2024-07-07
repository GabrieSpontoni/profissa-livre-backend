import { Test, TestingModule } from '@nestjs/testing';
import { ProfissaController } from './profissa.controller';

describe('ProfissaController', () => {
  let controller: ProfissaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfissaController],
    }).compile();

    controller = module.get<ProfissaController>(ProfissaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
