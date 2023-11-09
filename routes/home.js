const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdm-win10-13.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZxqtJ5MwQTRMdu8605yhYEPPyvNytoZRjgn1A%2BH7urb2TBKVM13N6HKtAcR%2Fio8pKzDunDMP%2FLjbJ4TuptqD7wrRRwGRFdCV48btXTsTKxY1aR5qtc%3D&templateToken=6821999e2b552a15ed458b4da9263c89"}]}';
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
