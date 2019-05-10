const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname,'..','public');
const port = process.env.PORT || 3000; //PORT variable set up by heroku

app.use(express.static(publicPath)); //serves up static assets from public folder

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath,'index.html'));   //if what user requests is not in public folder , give back index.html
});

app.listen(port, () => {
    console.log('Server is up !')
});