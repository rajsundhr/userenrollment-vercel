const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {
  // Simulating input stream data
  console.log("Sample")
  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdm-6514-u16.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZxus88ZlFSLZo27u0ks1dcNOX3Ny9MWEGkgglSBvuSOjjAZBsdxM6GYsAIUri1io6%2FIuXDKO%2Fa1b5Qevs4zDL4gFBwGRFdCV48btXTsG%2F5e1vQq%2FIM%3D&templateToken=27fa3f50aaf00f64f05377dbc412f616"}]}'
  const inputStream = Buffer.from(responseText);

  const responseHeaders = {
    "Content-Type": "application/json",
    "Content-Length": inputStream.length
  };

  console.log(inputStream.length);
  res.writeHead(200, responseHeaders);

  // Process the input stream and send it as the response
  res.write(inputStream);
  res.end();
});


module.exports = router;
