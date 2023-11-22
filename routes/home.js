const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://gowtham-15943.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw7sMpKlFrYZoq060J%2B0tZcaHvKwIEeR2gm1F7V7%2B2JjDBIX8InY%2FjPswMarHZipv2RsizPbqPkZ5RJucEzU7gpQxwGRFdCV48btXTsHakIgP4sqIQ%3D&templateToken=26ffa6988348f371f394191bae4f95b7"}]}';
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
