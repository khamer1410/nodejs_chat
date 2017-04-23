'use strict';

const io = require('socket.io')(); //w () można wpisywać dodatkowe rzeczy - przez to się uruchomi, inaczej tylko deklarujesz.

io.on('connection', (client)=> {
    console.log('nowy klient polaczyl sie');

    // client.on('msg', (data) => {
    //     console.log('Klient wysłał:' + data);
    //     client.emit('msg', data);
    // });

    // client.on('msg2', data => {
    //     console.log("Klient mowi " + data);
    //     io.emit('sendIt', data);
    // });

    client.on('sendMsg', data => {
        if (data.startsWith('/login')) {
            var username = data.substring(7);
            client.name = username;
            console.log(client.name);
        } else {
           io.emit('sendResp', {
               msg: data,
               user: client.name || 'Anonim'
           });
        }
    });

    client.on('disconnect', ()=> {              //server jestteż event emmiterem
        console.log('klient rozłączył się');
    });

    // setTimeout(() => {
    //     client.disconnect(() => {
    //         console.log('cośtam');
    //     })
    // })
});

// let count = 0;
// setInterval(() => {
//     count++;
//     io.emit('msg', 'Jestem groźny serwer'+ count);
// }, 2000);

console.log('Serwer stoi!');

io.listen(4000);