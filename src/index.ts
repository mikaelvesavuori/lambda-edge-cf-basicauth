// Reference: https://betterprogramming.pub/how-to-restrict-access-to-your-cloudfront-distribution-with-basic-authentication-e2cdae5fca7e

/**
 * @description This is a Lambda@Edge/Cloudfront Functions function that adds "basic auth" to your Cloudfront distribution.
 */
export async function handler(event: any) {
  const request = event.Records[0].cf.request;
  const headers = request.headers;

  const user = 'user';
  const pass = 'pass';

  const basicAuthentication = 'Basic ' + new Buffer(user + ':' + pass).toString('base64');

  if (
    typeof headers.authorization === 'undefined' ||
    headers.authorization[0].value !== basicAuthentication
  )
    return {
      status: '401',
      statusDescription: 'Unauthorized',
      body: 'Unauthorized',
      headers: {
        'www-authenticate': [{ key: 'WWW-Authenticate', value: 'Basic' }]
      }
    };

  return request;
}
