const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage');
    } else if (req.url === '/about') {
        res.end('Welcome to our about page');
    } else {
        res.end(`
        <h1>Oops! </h1>
        <p>we cannot find the page you are looking for 🙄</p>
        <a href="/">home</a>
        `);
    }
})

server.listen(5000);