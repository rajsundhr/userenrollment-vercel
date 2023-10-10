const express = require("express");
const router = express.Router();

// router.get("/com.apple.remotemanagement", (req, res) => {
//   // Simulating input stream data
//   console.log("Sample")
//   const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdm-win10-13.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZxqtJ5MwQTRMdu8605yhYEPPyvNytoZRjgn1A%2BH7urb2TBKVM13N6HKtAcR%2Fio8pKzDunDMP%2FLjbJ4TuptqD7wrRRwGRFdCV48btXTsTKxY1aR5qtc%3D&templateToken=6821999e2b552a15ed458b4da9263c89"}]}';
//   const inputStream = Buffer.from(responseText);

//   const responseHeaders = {
//     "Content-Type": "application/json",
//     "Content-Length": inputStream.length
//   };

//   console.log(inputStream.length);
//   res.writeHead(200, responseHeaders);

//   // Process the input stream and send it as the response
//   res.write(inputStream);
//   res.end();
// });













//-----------------------
//-----------------------

//BELOW LINES ARE JUST TO CHECK WITH 302 FLOW

//-----------------------
//-----------------------









router.get("/com.apple.remotemanagement/ServiceDiscoveryData.json", (req, res) => {
  // Simulating input stream data
  console.log("Sample")
  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"{"Servers":[{"Version":"mdm-byod","BaseURL":"https://sanjay-14904.csez.zohocorpin.com:443/mdm/client/v1/enroll?encapiKey=1G8rvZw6581BwFveYtrv7Bh80IpYPCqXy4cfGzt01ViLuuvf2jBIBpEkNvycvlEWpSxpo6%2FE7nrIOKe%2Fbp4Yvsw7W%2B4oRxwGRFdCV48btXTsS61c1aR9%2BtM%3D&templateToken=344eca6121b166865bc83f1d8429b24"}]}"}]}';
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


router.get("/com.apple.remotemanagement", (req, res) => {
  // Simulating input stream data
  console.log("Sample")
  const responseText = '{"Servers":[{"Version":"mdm-byod","BaseURL":"https://mdm.manageengine.com.au/mdm/client/v1/enroll?encapiKey=GkDdjPjf%2BFYbzFyXp9noYtFUPshosJfqSs7kN80HpEN97dpbt0wcK8AblSUkmWpJsCaTDVaddO1y82SC47yDeigvdnyteUTuOpwzGB%2Bedd0F9TjSEfaw864%3D&templateToken=3cca80cace7130acbf01f623e0fa88f2"}]}';
  const inputStream = Buffer.from(responseText);

  const responseHeaders = {
    "Location":"https://userenrollment-vercel.vercel.app/.well-known/com.apple.remotemanagement/ServiceDiscoveryData.json"
  };

  console.log(inputStream.length);
  res.writeHead(302, responseHeaders);

  // Process the input stream and send it as the response
  res.write(inputStream);
  res.end();
});

module.exports = router;
