import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotificationLog } from './schemas/notification-log.schema';
import { SendNotificationDto } from './dto/send-notification.dto';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel(NotificationLog.name) private readonly notificationLogModel: Model<NotificationLog>,
  ) {}

  async send(sendNotificationDto: SendNotificationDto) {
    try {
      const { userId, type, channel, content } = sendNotificationDto;

      const status = Math.random() > 0.1 ? 'sent' : 'failed';
      const log = new this.notificationLogModel({
        userId,
        type,
        channel,
        status,
        sentAt: status === 'sent' ? new Date() : undefined,
        failureReason: status === 'failed' ? 'Simulated failure' : undefined,
        metadata: content,
      });

      return await log.save();
    } catch (error) {
      console.error('Error sending notification:', error);
      throw new Error('Failed to send notification');
    }
  }

  async findLogsByUser(userId: string) {
    return this.notificationLogModel.find({ userId }).exec();
  }
}
