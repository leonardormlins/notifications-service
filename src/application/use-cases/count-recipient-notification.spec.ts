import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { CancelNotification } from './cancel-notification';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        recipientId: 'recipient-1',
        content: new Content('Nova solicaitção de amizade'),
        category: 'social',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        recipientId: 'recipient-1',
        content: new Content('Nova solicaitção de amizade'),
        category: 'social',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        recipientId: 'recipient-2',
        content: new Content('Nova solicaitção de amizade'),
        category: 'social',
      }),
    );

    const { count } = await countNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
