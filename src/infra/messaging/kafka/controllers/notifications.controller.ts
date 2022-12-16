import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class NotificationsController {
  @EventPattern('notifications.send-notification')
  async handleSendNotification(@Payload() content: any) {
    console.log(content);
  }
}
