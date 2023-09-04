const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {
  // Simulating input stream data
  console.log("Sample")
  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://dhanus-lin1.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw6t8tNwVCNNI7u608vgNZbaCbMytVLQ2x01lmG6rmJiDAZBcVyYfrOsw0Q%2Bn1q9f%2FE7CvOaPO%2BZ5RO78E5Cb99QxwGRFdCV48btXTsS%2Fxc0vF7poI%3D&templateToken=5c2d76099192f7d8fe69940db550280d"}]}''
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
