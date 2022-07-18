import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userId: string;

  @Prop()
  userName: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  phone: number;

  @Prop({ required: true })
  password: string;

  @Prop()
  address: {
    addr1: String;
    addr2: String;
    city: String;
    state: String;
    country: String;
    zip: Number;
  };

  @Prop({ required: false })
  shopName: string;

  @Prop()
  image: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
