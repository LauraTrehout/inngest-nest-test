import { serve } from 'inngest/express';
import { inngest } from './client';
import { helloWorld } from './fns/helloWorld';
import * as dotenv from 'dotenv';

dotenv.config();

export const handler = serve(inngest, [helloWorld], {
  signingKey: process.env.INNGEST_SIGNING_KEY,
}) as any;
