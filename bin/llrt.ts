#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import { PersistentStack } from '../lib/persistent-stack';
import { FunctionsStack } from '../lib/functions-stack';
import { TunerStack } from '../lib/tuner-stack';

import { prefix } from '../const';

const app = new cdk.App();
const persistentStack = new PersistentStack(app, `${prefix}${PersistentStack.name}`, {});
new FunctionsStack(app, `${prefix}${FunctionsStack.name}`, {
  table: persistentStack.table,
  bucket: persistentStack.bucket,
});
new TunerStack(app, `${prefix}${TunerStack.name}`, {});
