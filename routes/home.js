const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdmqa-lin4.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw1tZ4cxQCJMY7vtB8ogoFfPX2cmYEdEm9zgFyEv%2ByJhTBNXpMhMKHJswxBpXtq86OVviyeaKWzO8pKscltWrwuRRwGRFdCV48btXTsGPkI1vQmr9U%3D&templateToken=9a4e606463ed75e5db031e882a7d2547"}]}';
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
