import { Inngest } from 'inngest';
import * as dotenv from 'dotenv';
dotenv.config();

type TestEmail = {
  name: 'test/email';
  data: {
    email: string;
  };
};

type Events = {
  'test/email': TestEmail;
};
export const inngest = new Inngest<Events>({
  name: `My app`,
  eventKey: process.env.INNGEST_EVENT_KEY,
});
