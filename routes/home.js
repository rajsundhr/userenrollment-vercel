const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {
  // Simulating input stream data
  console.log("Sample")
  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://dhanus-lin1.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw158JMkFSNMIrv6UJ4h4oKOynNndQYETsghg%2BKs%2BqIjDAbApdyZKvPsAZDqSxj8a3EvCqeO6fga5xNu884Ce8sFRwGRFdCV48btXTsFv4Eg%2FQmqg%3D%3D&templateToken=c60a5bd2958e12ab8fb634167ca1556d"}]}';
  const inputStream = Buffer.from(responseText);

  const responseHeaders = {
    "Content-Type": "application/json",
    "Content-Length": inputStream.length
  };

  console.log(inputStream.length);
  res.writeHead(200, responseHeaders);

  // Process the input stream and send it as the response
  res.write(inputStream);
  res.end();
});

module.exports = router;
