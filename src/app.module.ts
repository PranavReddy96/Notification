import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PreferencesModule } from './preferences/preferences.module';
import { NotificationsModule } from './notifications/notifications.module';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URI ||
        'mongodb+srv://komandlasaipranavreddy:Sai123%23%23@cluster0.vryf2.mongodb.net/notification'
    ),
    forwardRef(() => PreferencesModule), // Use forwardRef() to resolve circular dependency
    forwardRef(() => NotificationsModule), // Use forwardRef() to resolve circular dependency
  ],
})
export class AppModule {}
