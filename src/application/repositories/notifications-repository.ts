import { Notification } from 'src/application/entities/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
