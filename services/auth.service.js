const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const poolData = {
  UserPoolId: '123456',
  ClientId: '123456',
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

exports.Login = (body,callback) => {
  const username = body.username;
  const password = body.password;
  const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
    {
      username,
      password,
    }
  );

  const userData = { username, userPool };
  const cognitoUSer=new AmazonCognitoIdentity.CognitoUser(userData)
  cognitoUSer.authenticateUser(authenticationDetails,{
    onSuccess:function(result){
      console.log(`access token ${result.getAccessToken().getJwtToken()}`);
      console.log(`id token ${result.getIdToken().getJwtToken()}`);
      console.log(`refresh token ${result.getRefreshToken().getToken()}`);
      callback(null,result.getAccessToken().getJwtToken())
    },onFailure:function(error){
      console.error(error)
      callback(error)
    }
  })
};
