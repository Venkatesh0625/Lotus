const net = require('net');
const fs = require('fs');


const { ObjectID } = require('mongodb');

const config = require('./config')

let host = config.host;
let port = config.port;

//fs.writeFileSync('./uniqid.id', new ObjectID());

let uniqid = fs.readFileSync('uniqid.id').toString();

let server = net.createServer((socket) => {
    console.log('connected bitch!');
});

let listen = (port) => {
    server.listen(port, () => {
        console.log('Server is u on port :', port);
    });
}
let socket = net.createConnection({host, port}, () => {
    console.log('Connected');

    socket.write(JSON.stringify({
        route: 'ready',
        uniqid,
        localAddr: socket.localAddress,
        localPort: socket.localPort
    }))

    listen(socket.localPort);
    console.log(socket.localPort);

});

let connect = (data) => {
    let client = net.createConnection(data, () => {
        console.log('Connected to client');
    });

}