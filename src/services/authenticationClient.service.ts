import { google } from'googleapis';



export class Authorize
{
  async  authorizeAndCallAPI() 
  {
    const {
      TYPE,
      PROJECT_ID,
      PRIVATE_KEY_ID,
      PRIVATE_KEY,
      CLIENT_EMAIL,
      CLIENT_ID,
      AUTH_URL,
      TOKEN_URL,
      AUTH_PROVIDER_X509_CERT_URL,
      CLIENT_X509_CERT_URL,
      UNIVERSE_DOMAIN,
    } = process.env;

    const credentials = {
      type: TYPE,
      project_id: PROJECT_ID,
      private_key_id: PRIVATE_KEY_ID,
      private_key: PRIVATE_KEY,
      client_email: CLIENT_EMAIL,
      client_id: CLIENT_ID,
      auth_url: AUTH_URL,
      token_uri: TOKEN_URL,
      auth_provider_x509_cert_url: AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: CLIENT_X509_CERT_URL,
      UNIVERSE_DOMAIN:UNIVERSE_DOMAIN
    };

    return new google.auth.JWT(credentials.client_email, "", credentials.private_key, credentials.auth_url);
  }
}
