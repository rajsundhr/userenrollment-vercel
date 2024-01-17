const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://muthuraj-14527.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw%2B454cwwONPoq%2B70p6h4ZabX3PwNtKEzgggAiGue%2Fb2DBLApAkYaic5FFHpHdu9amTvnjKb6XlaJVJ7cBpW%2Bl5FxwGRFdCV48btXTsGasJ0aMrqYU%3D&templateToken=880d899f521a34ca35491a2463a20ad"}]}';
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
