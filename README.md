# serverless-dynatrace

Simple serverless function to demonstrate it's use with dynatrace on aws lambdas 

## Features

- Makes a simple HTTP GET and returns a success/fail 

## Dependencies 

[Add AWS keys](https://serverless.com/framework/docs/providers/aws/guide/credentials/) 

## Installing serverless and running the function locally then on AWS

_This assumes you've got AWS keys set up.(see link above)_ 

Step 1. Install serverless 
```bash
yarn global add serverless
 - OR - 
 npm install -g serverless
```

Step 2. Clone repo
```bash
git clone {this repo}
cd serverless-dynatrace
yarn install
- OR -
npm install
```

Step 3. Amend the REDACTED variables in env.dev.yml to suit your needs

Step 4. Run the function locally
```bash
sls invoke local -f gitHubUser
```

Step 5. Deploy to AWS 
```bash
sls deploy 
```

Step 6. Change the handler function in AWS (I wish this was automated):
from:
```bash
lambdas/handler.gitHubUser
- TO - 
node_modules/@dynatrace/oneagent.lambdas/handler$gitHubUser
```
 
Step 7. Invoke on AWS 
```bash
sls invoke -f gitHubUser
```

Step 8. Check Dynatrace for successful invocation






