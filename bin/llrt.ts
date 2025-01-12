#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { FunctionsStack } from '../lib/functions-stack';
import { prefix } from '../const';

const app = new cdk.App();
new FunctionsStack(app, `${prefix}${FunctionsStack.name}`, {});
