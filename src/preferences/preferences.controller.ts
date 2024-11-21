import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { PreferencesService } from './preferences.service';
import { CreateUserPreferenceDto } from './dto/create-user-preference.dto';
import { UpdateUserPreferenceDto } from './dto/update-user-preference.dto';

@Controller('preferences')
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @Post()
  async create(@Body() createUserPreferenceDto: CreateUserPreferenceDto) {
    return this.preferencesService.create(createUserPreferenceDto);
  }

  @Get(':userId')
  async findOne(@Param('userId') userId: string) {
    return this.preferencesService.findOne(userId);
  }

  @Patch(':userId')
  async update(@Param('userId') userId: string, @Body() updateUserPreferenceDto: UpdateUserPreferenceDto) {
    return this.preferencesService.update(userId, updateUserPreferenceDto);
  }

  @Delete(':userId')
  async remove(@Param('userId') userId: string) {
    return this.preferencesService.remove(userId);
  }
}
