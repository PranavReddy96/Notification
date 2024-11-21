import { Module, forwardRef } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationLog, NotificationLogSchema } from './schemas/notification-log.schema';
import { PreferencesModule } from '../preferences/preferences.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: NotificationLog.name, schema: NotificationLogSchema }]),
    forwardRef(() => PreferencesModule), // Added forwardRef to resolve potential circular dependency
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService],
  exports: [NotificationsService],
})
export class NotificationsModule {}
