import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfissaController } from './profissa/profissa.controller';

@Module({
  imports: [],
  controllers: [AppController, ProfissaController],
  providers: [AppService],
})
export class AppModule {}
