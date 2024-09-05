import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfissaDocument = Profissa & Document;

@Schema()
export class Profissa {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  rating: number;

  @Prop({ type: Array })
  reviews: Array<{ reviewer: string; comment: string; rating: number }>;

  @Prop({ type: Object })
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };

  @Prop({ type: String })
  servicesDescription: string;

  @Prop({ type: Array })
  servicesOffered: Array<{
    id: number;
    serviceName: string;
    description: string;
    imageUrl: string;
  }>;

  @Prop({ type: Object })
  contact: { phone: string; email: string };

  @Prop({ type: Array })
  availability: string[];

  @Prop({ type: Number })
  yearsOfExperience: number;

  @Prop({ type: Array })
  certifications: string[];

  @Prop({ type: Array })
  projects: Array<{ projectName: string; description: string; year: number }>;

  @Prop({ type: String })
  bio: string;
}

export const ProfissaSchema = SchemaFactory.createForClass(Profissa);
