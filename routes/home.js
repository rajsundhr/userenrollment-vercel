const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://muthuraj-14527.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw%2B5ZpJkwSMP93t70p61dEJPC%2FPm9QfFDMnhV3SvOuIiDAZAsUnNqyc41AQr31rpK2S7H%2FKOPXgbJoY6JpuX%2Bx5SRwGRFdCV48btXTsTKgKhvIsrdI%3D&templateToken=51703f09b3bf9840c583443f57ef13ee"}]}';
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
