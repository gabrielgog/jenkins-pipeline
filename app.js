const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello test on prod with reverse proxy')
})

app.listen(PORT, () => console.log('app is running on', PORT))