const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdmqa-lin4.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw4sZ0dwVWMYdy16xsu1tBdbCebzdVOFjlwiQ7SuuqL3zAdV5YlYavIsFAXpSo79PiW7i2cZPHjPZxK68A5C7p%2BEhwGRFdCV48btXTsS69bgKQsrtQ%3D&templateToken=435deb1bcf51256f94d1653a13625da9"}]}';
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
