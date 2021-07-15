# Lambda@Edge/Cloudfront Functions for basic auth on Cloudfront

This is a Cloudfront Functions/Lambda@Edge function that adds 'basic auth' to your Cloudfront distribution.

The project is deployed with Serverless Framework.

## Prerequisites

- AWS account
- Logged into AWS in your environment
- Pre-existing Cloudfront distribution, or sufficient permissions to create one after deploying this function

## Instructions

- Edit `src/index.ts` to use your desired user and password credentials
- Deploy with `npm run deploy`
- After deployment, in your Cloudfront distribution, assign the function ARN (with version, i.e `{{FUNCTION_ARN}}:1`) to your event
- After a few minutes it should work

## Teardown

To remove the stack, run `npm run remove`.
