const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {

  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://rajkumar-16016.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw558sZxQeKN4vovxwu3oAIP3ufm9pNFz58hw%2BD6uiLiDBJUJByZvzKvwYbqyxooajA733Ja6e2aJ4duppvU7t5QhwGRFdCV48btXTsGPxZhv8mq4I%3D&templateToken=f8cb4c7758a9c4f08884190ce8737ffa"}]}';
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
