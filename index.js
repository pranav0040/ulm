const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000; // Use Render's assigned port or default to 3000

// API URL and request data
const SERVER_URL = "https://server-vldn.onrender.com/api/user/login";
const requestData = {
  name: "Pranav",
  email: "pranav@gmail.com",
  password: "123456",
};

async function sendRequest() {
  try {
    const response = await axios.post(SERVER_URL, requestData);
    console.log(`Status: ${response.status}, Data:`, response.data);
  } catch (error) {
    console.error("Error sending request:", error.message);
  }
}

// Initial API call
sendRequest();

// Schedule to run every 10 minutes (600,000 ms)
setInterval(sendRequest, 10 * 60 * 1000);

console.log("API request scheduled every 10 minutes...");

// Keep the server alive to satisfy Render's port requirement
app.get("/", (req, res) => {
  res.send("Service is running. API calls are being made every 10 minutes.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
