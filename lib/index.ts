// import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface LlrtProps {
  // Define construct properties here
}

export class Llrt extends Construct {

  constructor(scope: Construct, id: string, props: LlrtProps = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'LlrtQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
