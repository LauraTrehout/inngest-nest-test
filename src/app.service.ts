import { Injectable } from '@nestjs/common';
import { inngest } from './inngest/client';

@Injectable()
export class AppService {
  async getHello() {
    await inngest.send({
      name: 'test/email',
      data: {
        email: 'testFromNext@example.com',
      },
    });
  }
}
