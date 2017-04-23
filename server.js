'use strict';

const io = require('socket.io')(); //w () można wpisywać dodatkowe rzeczy - przez to się uruchomi, inaczej tylko deklarujesz.

io.on('connection', (client)=> {
    console.log('nowy klient połączył się');

    client.on('disconnect', ()=> {
        console.log('klient rozłączył się');
    });
});



console.log('to jest serwer');

io.listen(4000);