// Boilerplate Code for HTTP Status Code API
const express = require('express');
const app = express();

/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.

Requirements:
1. Create a GET endpoint at "/status-info".
2. The endpoint should accept a "code" as a query parameter (e.g., /status-info?code=200).
3. Based on the status code provided, the API should respond with:
   a. The status code.
   b. A description of the status code.

Example Responses:
- For 200 (OK):
  Request: /status-info?code=200
  Response:
  {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }

- For 404 (Not Found):
  Request: /status-info?code=404
  Response:
  {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  }

- For 500 (Internal Server Error):
  Request: /status-info?code=500
  Response:
  {
    "status": 500,
    "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }

- For 400 (Bad Request):
  Request: /status-info?code=400
  Response:
  {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }

List of Status Codes to Handle:
200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504

*/
 
app.get('/status-info',(req,res)=>{
  const code=req.query.code
  if(!code)
    return res.status(400).json({message:"send correcct url"})

  const  status={
200:"OK: The request has succeeded. The meaning of this status depends on the HTTP method used.",
201:"a new resource was successfully created in response to the request.",
204:" the server successfully processed the client's request but does not need to return any content",
400:"Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.",
401:"a request was not successful because it lacks valid authentication credentials for the requested resource.",
404: "message : Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).",
405:"indicates that the server knows the request method, but the target resource doesn't support this method",
429:"the client has sent too many requests in a given amount of time",
500: "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.",
502:"one server got an invalid response from another",
503:"a website can't be reached at the moment because the server is not ready to handle the request",
504:"indicates that the server, while acting as a gateway or proxy, did not get a response in time from the upstream server in order to complete the request"
  }

const tmessage=status[code]

res.json({
  status:code,
  message:tmessage
})
  
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
