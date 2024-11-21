import { IsEmail, IsEnum, IsObject, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ChannelsDto {
  @IsString() email: boolean;
  @IsString() sms: boolean;
  @IsString() push: boolean;
}

export class CreateUserPreferenceDto {
  @IsString() userId: string;
  @IsEmail() email: string;

  @IsObject()
  @ValidateNested()
  @Type(() => ChannelsDto)
  preferences: {
    marketing: boolean;
    newsletter: boolean;
    updates: boolean;
    frequency: 'daily' | 'weekly' | 'monthly' | 'never';
    channels: ChannelsDto;
  };

  @IsString() timezone: string;
}

