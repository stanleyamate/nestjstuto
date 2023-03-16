import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({unique: true })
  id: string;
  
  @Prop({ required: true, unique: true })
  phone_number: string;

  @Prop()
  email: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  resetPasswordToken: string;
  
  @Prop()
  resetPasswordExpires:string
}

export const UserSchema = SchemaFactory.createForClass(User);