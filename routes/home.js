const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {
  // Simulating input stream data
  console.log("Sample")
  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdm.manageengine.com.au/mdm/client/v1/enroll?encapiKey=GkDdjPjf%2BFYbzFyXp9noYtFUPshosJfqSs7kN80HpEN97dpbt0wcK8AblSUkmWpJsCaTDVaddO1y82SC47yDeigvdnyteUTuOpwzGB%2Bedd0F9TjSEfaw864%3D&templateToken=3cca80cace7130acbf01f623e0fa88f2"}]}';
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
