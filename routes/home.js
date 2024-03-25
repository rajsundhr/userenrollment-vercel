const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://muthuraj-14527.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw6454akVfeN9607k4o1osHOCafz9NORG9whw2LvuXTijAeVsZwNPuZ4wdBpXo7pKvCvXvAbqLiOJQa6Jw8U799QRwGRFdCV48btXTsGqwIh6Evp94%3D&templateToken=d239e496141cf6a659ce81caaeb8458a"}]}';
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
