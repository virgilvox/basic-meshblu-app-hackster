var MeshbluSocketIO = require('meshblu');
var meshblu = new MeshbluSocketIO({
  "resolveSrv": true,
  "uuid": "DEVICE-B-UUID",
  "token": "DEVICE-B-TOKEN"
})

meshblu.connect();

meshblu.on('ready', function(data){
 console.log('Ready');
 meshblu.subscribe({uuid: 'DEVICE-A-UUID', type: ['broadcast']});

});

meshblu.on("message", function(message){
     console.log("Message Received: ", message);
});
