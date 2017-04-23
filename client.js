'use strict';

const io = require('socket.io-client');
const socket = io('http://localhost:4000');

// setInterval(()=> {
//     console.log('wysyłam wiadomość');
//     socket.emit('msg', 'Hello word!'); //,sg -dowolne słowo
// }, 2000);

// socket.on('msg', (data)=> {
//     console.log("serwer mówi" + data);
// });

//Umożliwia wpisywanie w konsoli klienta wiadomości
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.on('line', (line) => {
    socket.emit('sendMsg', line);
});

readline.prompt();

socket.on('sendResp', data => {
    console.log(`${data.user}: ${data.msg}\n`);
})



//ZADANIE sprawdzeie czy to komenda czy tekst
//wysłanie na serwer - 2 sposoby
//serwer - jak tekst to wysyłamy, jak komenda to client.name = name;


