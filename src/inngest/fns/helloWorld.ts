import { inngest } from '../client';

export const helloWorld = inngest.createFunction(
  { name: 'Test email' },
  { event: 'test/email' },
  async ({ event }) => {
    console.log(`EVENT DATA`, event.data);
    return;
  },
);
