import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Function, LlrtFunction } from './helpers/Function';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class FunctionsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Normal function
    const normalFunction = new Function(this, 'NormalFunction', {
      entry: `${__dirname}/../lambdas/function.ts`,
    });

    normalFunction.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.AWS_IAM,
    });

    // LLRT Standard function
    const llrtStandardFunction = new LlrtFunction(this, 'LlrtStandardFunction', {
      entry: `${__dirname}/../lambdas/function.ts`,
    });

    llrtStandardFunction.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.AWS_IAM,
    })
  }
}
