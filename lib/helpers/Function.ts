import { Duration } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import {
  NodejsFunction,
  NodejsFunctionProps,
} from 'aws-cdk-lib/aws-lambda-nodejs';
import * as logs from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';
import { prefix } from '../../const';
import { LlrtFunction as BaseLlrtFunction } from "cdk-lambda-llrt";

export class Function extends NodejsFunction {
  constructor(scope: Construct, id: string, props: NodejsFunctionProps) {
    (props = {
      architecture: lambda.Architecture.ARM_64,
      bundling: { minify: true },
      functionName: `${prefix}${id}`,
      handler: 'handler',
      logRetention: logs.RetentionDays.ONE_DAY,
      memorySize: 128,
      runtime: lambda.Runtime.NODEJS_20_X,
      timeout: Duration.seconds(30),
      ...props,
    }),
      super(scope, id, props);
  }
}

export class LlrtFunction extends BaseLlrtFunction {
  constructor(scope: Construct, id: string, props: NodejsFunctionProps) {
    (props = {
      architecture: lambda.Architecture.ARM_64,
      bundling: { minify: true },
      functionName: `${prefix}${id}`,
      handler: 'handler',
      logRetention: logs.RetentionDays.ONE_DAY,
      memorySize: 128,
      // runtime ... not applied, overwritten by Amazon Linux 2023 (lambda.Runtime.PROVIDED_AL2023)
      timeout: Duration.seconds(30),
      ...props,
    }),
      super(scope, id, props);
  }
}
