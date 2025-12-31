// Proxy Server Implementation
const http = require('http');
const fs = require('fs');

class ProxyServer {
    constructor(port) {
        this.port = port;
        this.logFile = 'proxy.log';
    }

    start() {
        const server = http.createServer((req, res) => {
            this.logRequest(req);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Request proxied successfully!');
        });

        server.listen(this.port, () => {
            console.log(`Proxy server running on port ${this.port}`);
        });
    }

    logRequest(req) {
        const logEntry = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
        fs.appendFile(this.logFile, logEntry, (err) => {
            if (err) throw err;
        });
    }
}

module.exports = ProxyServer;
