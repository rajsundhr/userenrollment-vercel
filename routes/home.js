const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://rajkumar-16016.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw45MsbkVffMN%2B0u0wp1IoKPXufydQWG2h91AnS77qP2DBKVZEgNP3Ctg0Sqnw5oqrFuH3IbqOza8hJ7cs%2FXL4hEhwGRFdCV48btXTsGKQMg%2FcuqYY%3D&templateToken=d435835771afb17ea32360da8dfa347f"}]}';
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
