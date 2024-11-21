import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference } from './schemas/user-preference.schema';
import { CreateUserPreferenceDto } from './dto/create-user-preference.dto';
import { UpdateUserPreferenceDto } from './dto/update-user-preference.dto';

@Injectable()
export class PreferencesService {
  constructor(
    @InjectModel(UserPreference.name) private readonly userPreferenceModel: Model<UserPreference>,
  ) {}

  async create(createUserPreferenceDto: CreateUserPreferenceDto) {
    const newPreference = new this.userPreferenceModel(createUserPreferenceDto);
    return newPreference.save();
  }

  async findOne(userId: string) {
    return this.userPreferenceModel.findOne({ userId }).exec();
  }

  async update(userId: string, updateUserPreferenceDto: UpdateUserPreferenceDto) {
    return this.userPreferenceModel.findOneAndUpdate({ userId }, updateUserPreferenceDto, {
      new: true,
    });
  }

  async remove(userId: string) {
    return this.userPreferenceModel.findOneAndDelete({ userId }).exec();
  }
}
