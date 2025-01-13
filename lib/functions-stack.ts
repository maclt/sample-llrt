import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Function, LlrtFunction } from './helpers/Function';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as s3 from 'aws-cdk-lib/aws-s3';

interface FunctionsStackProps extends cdk.StackProps {
  table: dynamodb.Table;
  bucket: s3.Bucket;
}

export class FunctionsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: FunctionsStackProps) {
    super(scope, id, props);

    // Node.js 20.x function
    const nodeJsFunction = new Function(this, 'NodeJs', {
      entry: `${__dirname}/../lambdas/hello-world.ts`,
    });

    const nodeJsPutDynamodbFunction = new Function(this, 'NodeJsPutDynamodb', {
      entry: `${__dirname}/../lambdas/put-dynamodb.ts`,
    });
    props.table.grantWriteData(nodeJsPutDynamodbFunction);

    const NodeJsPutS3Function = new Function(this, 'NodeJsPutS3', {
      entry: `${__dirname}/../lambdas/put-s3.ts`,
    });
    props.bucket.grantPut(NodeJsPutS3Function);


    // LLRT function
    const llrtFunction = new LlrtFunction(this, 'Llrt', {
      entry: `${__dirname}/../lambdas/hello-world.ts`,
    });

    const llrtPutDynamodbFunction = new LlrtFunction(this, 'LlrtPutDynamodb', {
      entry: `${__dirname}/../lambdas/put-dynamodb.ts`,
    });
    props.table.grantWriteData(llrtPutDynamodbFunction);

    const llrtPutS3Function = new LlrtFunction(this, 'LlrtPutS3', {
      entry: `${__dirname}/../lambdas/put-s3.ts`,
    });
    props.bucket.grantPut(llrtPutS3Function);
  }
}
