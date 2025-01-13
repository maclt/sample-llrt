import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sam from 'aws-cdk-lib/aws-sam';

export class TunerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new sam.CfnApplication(this, 'powerTuner', {
      location: {
        applicationId: 'arn:aws:serverlessrepo:us-east-1:451282441545:applications/aws-lambda-power-tuning',
        semanticVersion: '4.3.6'
      },
      parameters: {
        "lambdaResource": "*",
        "PowerValues": "128,256,512,1024,1536,3008"
      }
    });
  }
}
