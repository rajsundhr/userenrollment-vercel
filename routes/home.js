const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://bharath-12760.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw45cpNzQHaMo3tuRsuhNVbPyudzNQWRD90h1uK7eXZ2DBPUsx3Maqes1cbpHZp8v%2FIunGdOfW0PJ4f7Zw8WLgqFRwGRFdCV48btXTsGqQEhvcurIM%3D&templateToken=ed182bc6d2771951e91a0ce6981a15ad"}]}'
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
