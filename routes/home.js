const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdmqa-lin5.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw4tsNKkQGMZNjuvBt919cGay6Xz9UaRjx30g%2BLvu%2Fb3TBPXpMjZPjDtQJErHdjrvrE7H3NaKLnbs5OvspoW%2B95ExwGRFdCV48btXTsSv4Ph%2Fd%2BqYI%3D&templateToken=e0e2367bf53f0e2b3d14d4a8b7112e7a"}]}';
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
