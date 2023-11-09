const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://muthuraj-14527.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw%2B5Mgaw1LdZdvv60ks1YBaby7MzdcXEm9801uKue%2FbjDBLUJRyNanN5FMXq3tirvrIuX%2FMZPC3P59Ov8hvXO99FxwGRFdCV48btXTsTKVbhvB6q4E%3D&templateToken=7beb3830f0cc541f25a237841e6a6ebc"}]}';
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
