const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const poolData = {
  UserPoolId: process.env.USER_POOL_ID,
  ClientId: process.env.CLIENT_ID,
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

exports.Login = (body) => {
  const username = body.username;
  const password = body.password;
  const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
    {
      username,
      password,
    }
  );

  const userData = { username, userPool };
};
