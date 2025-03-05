const express = require('express');
const fs = require('fs');
const app = express();

app.use((req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const log = `${new Date().toISOString()} - Visitor IP: ${ip}\n`;
    
    // 追加写入到 logs.txt
    fs.appendFile('logs.txt', log, (err) => {
        if (err) console.error('Failed to write log:', err);
    });

    console.log(log);
    next();
});

app.get('/', (req, res) => {
    res.send('Your visit has been logged.');
});

app.listen(80, () => {
    console.log('Server running on port 3000');
});
