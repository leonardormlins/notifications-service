import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  list() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    console.log(body)
    // await this.prismaService.notification.create({
    //   data: {
    //     id: randomUUID(),
    //     content: 'Você tem uma nova solicitação de amizade',
    //     category: 'social',
    //     recipientId: randomUUID()
    //   }
    // })
  }
}
