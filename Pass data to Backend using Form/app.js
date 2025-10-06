import fs from 'fs';
import http from 'http';

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end(); 

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <form action="/message" method="POST">
                <input name="message" placeholder="Type your message" type="text">
                <button type="submit">Send</button>
            </form>
        `);
        return res.end();
    }

    if (req.url === '/message' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const decoded = decodeURIComponent(body.replace(/\+/g, ' '));
            const message = decoded.split('=')[1]; 
            console.log("Received message:", message); 

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("<h1>Message received successfully!</h1>");
            res.end();
        });
    }
});

server.listen(8000, 'localhost', () => {
    console.log("Server is running on http://localhost:8000");
});