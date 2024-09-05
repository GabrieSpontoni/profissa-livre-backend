import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfissaController } from './profissa.controller';
import { ProfissaService } from './profissa.service';
import { Profissa, ProfissaSchema } from './schemas/profissa.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Profissa.name, schema: ProfissaSchema },
    ]),
  ],
  controllers: [ProfissaController],
  providers: [ProfissaService],
  exports: [ProfissaService],
})
export class ProfissaModule {}
