# Sample LLRT 
This is a repo to test how fast [LLRT](https://github.com/awslabs/llrt) is.  
The result of this test is shared in [this post](https://maclt.substack.com/p/llrt).  

## Prepare
Please create `const.ts` file in the root directory and export 2 variables `prefix` and `region`.  
```
export const prefix = 'xxx';
export const region = 'us-east-1';
```

> [!NOTE]
> `prefix` may prevents the unexpected conflict in AWS account.

## CDK commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

## Invoke Lambdas
To invoke lambda functions, I used 
[AWS Lambda Power Tuning
](https://github.com/alexcasalboni/aws-lambda-power-tuning). Please refer its document.