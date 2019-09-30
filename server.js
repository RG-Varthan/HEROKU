const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./TC_Eos_Tracker'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/TC_Eos_Tracker/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000, () => { console.log("TC EOS Tracker runs: http://192.168.1.29:3000")});
