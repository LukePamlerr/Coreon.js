const WebSocket = require('ws');

class WebSocketServer {
    constructor(server) {
        this.wss = new WebSocket.Server({ server });
        this.clients = new Set();

        this.wss.on('connection', (ws) => {
            this.clients.add(ws);
            console.log('New client connected');

            ws.on('message', (message) => {
                this.handleMessage(ws, message);
            });

            ws.on('close', () => {
                this.clients.delete(ws);
                console.log('Client disconnected');
            });
        });
    }

    handleMessage(ws, message) {
        console.log(`Received message: ${message}`);
        // Broadcast the message to all clients
        this.broadcast(message);
    }

    broadcast(message) {
        this.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    }

    close() {
        this.wss.close(() => {
            console.log('WebSocket server closed');
        });
    }
}

module.exports = WebSocketServer;