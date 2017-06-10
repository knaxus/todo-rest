'use strict';

const {app} = require('./app');

// Listen to the port 
app.listen(port, () => {
    console.log('server listening at port : ' + port);
});
