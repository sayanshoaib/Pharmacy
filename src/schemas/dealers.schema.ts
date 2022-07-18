import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DealersDocument = Dealer & Document;

@Schema()
export class Dealer {
  @Prop()
  companyId: string;

  @Prop()
  userId: string;

  @Prop()
  region: string;

  @Prop()
  phone: number;

  @Prop()
  email: string;

  @Prop()
  address: {
    addr1: String;
    addr2: String;
    city: String;
    state: String;
    country: String;
    zip: Number;
  };

  @Prop()
  image: string;
}

export const DealerSchema = SchemaFactory.createForClass(Dealer);
