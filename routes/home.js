const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdm-enrollment.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZxt5MkalwSNZo7o7k0vhIVYPS%2BZnIVLGz0h1QqF6LqLizBGAsR1YvzItVBG%2Fio%2BoK3B6XvKbvOwOpgT6807W%2Bl9FRwGRFdCV48btXTsT6Vc1vEs%2Ft4%3D&templateToken=b534a42d01dfecc3717103f541999455"}]}'
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
