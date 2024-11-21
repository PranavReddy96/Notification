import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateUserPreferenceDto {
  @IsOptional()
  @IsBoolean()
  marketing?: boolean;

  @IsOptional()
  @IsBoolean()
  newsletter?: boolean;

  @IsOptional()
  @IsBoolean()
  updates?: boolean;

  @IsOptional()
  @IsString()
  channel?: string; // Optional: email, sms, push
}

