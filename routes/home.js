const express = require("express");
const router = express.Router();

router.get("/com.apple.remotemanagement", (req, res) => {
  // Simulating input stream data
  console.log("Sample")
  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdm.localzoho.com/mdm/client/v1/enroll?encapiKey=OlyO55TUNxYoxJUlfpaY2%2FOykhqt9KMKjXETa6W00mXDwHDgAx2jEcMCN3yXO5N0xa5N%2BvpZkaqoSZSLzHOQ45qlU7ql%2BY0KeItwz2yAguFPBGgVAJAIHWc%3D&templateToken=1c74c394477fbdfa8fe40dd7f3024ae0"}]}';
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
