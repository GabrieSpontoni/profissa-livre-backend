import { Controller, Get, Param } from '@nestjs/common';
import { ProfissaService } from './profissa.service';

@Controller('profissa')
export class ProfissaController {
  constructor(private readonly profissaService: ProfissaService) {}

  @Get(':id')
  async getProfissa(@Param('id') id: string) {
    return this.profissaService.findById(id);
  }

  @Get()
  async getAllProfissas() {
    return this.profissaService.findAll();
  }
}
