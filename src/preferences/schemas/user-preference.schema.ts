import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Define the interface for preferences to improve type safety
interface Preferences {
  marketing: boolean;
  newsletter: boolean;
  updates: boolean;
  frequency: 'daily' | 'weekly' | 'monthly' | 'never';
  channels: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
}

@Schema({ timestamps: true })
export class UserPreference extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: Object, required: true })
  preferences: Preferences;

  @Prop({ required: true })
  timezone: string;
}

export const UserPreferenceSchema = SchemaFactory.createForClass(UserPreference);
