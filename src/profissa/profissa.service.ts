import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profissa, ProfissaDocument } from './schemas/profissa.schema';

@Injectable()
export class ProfissaService {
  constructor(
    @InjectModel(Profissa.name) private profissaModel: Model<ProfissaDocument>,
  ) {}

  async findById(id: string): Promise<Profissa> {
    return this.profissaModel.findOne({ _id: id }).exec();
  }
}
