var config = {
  "uuid": "DEVICE-A-UUID",
  "token": "DEVICE-A-TOKEN"
};

var conn = meshblu.createConnection(config);

conn.on('ready', function(data) {
  console.log("Ready!");

  conn.whoami({
    "uuid": data.uuid
  }, function(device) {
    console.log(device);
  });

  conn.update({
    "uuid": config.uuid,
    "$set": { "meshblu.whitelists.broadcast.sent": [
      { "uuid": "DEVICE-B-UUID" }
    ] }
  });
});

var sendMessage = function(){
  conn.message({
    "devices": "*",
    "payload": {
      "some_value": "5"
    }
  });
};
