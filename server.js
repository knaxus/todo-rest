'use strict';

const {app} = require('./app');
let port = process.env.PORT || 3000;

// Listen to the port 
app.listen(port, () => {
    console.log('server listening at port : ' + port);
});
