const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdmqa-lin2.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw%2B5Mscw1WNMti%2F7xt5gIFYOy2dzoUcRmh3hAmEvrmLjzAbVMVwZv2c41Eb%2FndprquV7nnOZaS0asgevcEyWrIuQhwGRFdCV48btXTsTaQKhPF9rYI%3D&templateToken=acd1d96b61c7fb9a5386bd1734486cf3"}]}';
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
