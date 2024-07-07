import { Controller, Get, Param } from '@nestjs/common';

@Controller('profissa')
export class ProfissaController {
  @Get(':id')
  getProfissa(@Param('id') id: string) {
    return {
      id: id,
      name: 'profissa',
    };
  }
}
