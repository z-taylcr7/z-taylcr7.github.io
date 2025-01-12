const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const userIp = req.ip;  
  const timestamp = new Date().toISOString();  

  // 将IP地址和时间写入文件
  const logEntry = `IP: ${userIp}, Timestamp: ${timestamp}\n`;

  fs.appendFile(path.join(__dirname, 'visitor_ips.log'), logEntry, (err) => {
    if (err) {
      console.error('Error writing to file', err);
    } else {
      console.log('IP logged:', userIp);
    }
  });

  res.send('Your IP address has been logged!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
