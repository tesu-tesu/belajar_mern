const express = require('express');

const app = express();

app.use(() => {
    console.log('hello server cuy');
    console.log('hello baru');
    console.log('hello baru lagiiii');
    console.log('hello baru lagiiii');
    console.log('hello baru lagiiii');
})

app.listen(4000);