import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { prefix } from '../const';

export class PersistentStack extends cdk.Stack {
  bucket: s3.Bucket;
  table: dynamodb.Table;
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.table = new dynamodb.Table(this, 'Table', {
      tableName: `${prefix}Table`,
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    this.bucket = new s3.Bucket(this, 'Bucket', {
      bucketName: `${prefix}Bucket`.toLowerCase(),
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}
