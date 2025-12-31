// Unit Tests for Proxy Server
const http = require('http');
const ProxyServer = require('../src/proxyServer');
describe('Proxy Server', () => {
    let proxy;

    beforeAll(() => {
        proxy = new ProxyServer(3000);
beforeAll(() => { \
n  proxy.start(); \
n}); \
n it('should respond to requests', (done) => { \
n  http.get('http://localhost:3000', (res) => { \
n      expect(res.statusCode).toBe(200); \
n      done(); \
n  }); \
n}); \ n}); \ n
