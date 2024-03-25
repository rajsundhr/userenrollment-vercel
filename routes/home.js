const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://muthuraj-14527.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw%2FuZgZkAeMYt3vtE56gIZdOyfKz9sWEjJ91FiHveXZjjAaVJMgYv2ZtARB%2FnptpKuVvHrLZfXnbJoYupg5DO4qRBwGRFdCV48btXTsGfhZgf4v%2B9I%3D&templateToken=dc2cf31c334ca0790111a9e57f426289"}]}';
  const inputStream = Buffer.from(responseText);

  const responseHeaders = {
    "Content-Type": "application/json",
    "Content-Length": inputStream.length
  };

  console.log(inputStream.length);
  res.writeHead(200, responseHeaders);

  res.write(inputStream);
  res.end();
});

module.exports = router;
