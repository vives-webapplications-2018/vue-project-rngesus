// Settings
const settings = {
    brokerUrl: 'mqtt.labict.be',
    port: 1884,
    subscriptionFallbackTopic: 'rpc-chat',
    publishFallbackTopic: 'rpc-chat',
    fallbackQoS: 0,
    fallbackPayload: 'test',
    fallbackusername: ''
};

//Using the HiveMQ public Broker, with a random client Id
const client = new Messaging.Client(settings.brokerUrl, settings.port, "myclientid_" + parseInt(Math.random() * 100, 10));

//Gets  called if the websocket/mqtt connection gets disconnected for any reason
client.onConnectionLost = function (responseObject) {
    //Depending on your scenario you could implement a reconnect logic here
    alert("connection lost: " + responseObject.errorMessage);
};

//Gets called whenever you receive a message for your subscriptions
client.onMessageArrived = function (message , username) {
    //Do something with the push message you received
    //txt = document.write(' <?php encode(message.payloadString); ?> ');
    $('#messages').append('<span>' + settings.fallbackusername + ": " + message.payloadString + '</span><br/>');
};

//Connect Options
const options = {
    timeout: 3,
    //Gets Called if the connection has sucessfully been established
    onSuccess: function () {
        //alert("Connected");
        subscribe();
    },
    //Gets Called if the connection could not be established
    onFailure: function (message) {
        alert("Connection failed: " + message.errorMessage);
    }
};

// Helper function which retrieves the content of a input with the given id,
// and provides a fallback if the input is empty
const getValue = function (id, fallback) {
  var value = $(id).val();
  if (!value) value = fallback;
  return value;
};

// Subscribes to a given topic with a given QoS
const subscribe = function() {
    const topic = 'rpc-chat';
    const qos = 0;
  client.subscribe(topic);
  //alert('Subscribed to ' + topic + ' with QoS ' + qos);
};

//Creates a new Messaging.Message Object and sends it to the HiveMQ MQTT Broker
const publish = function () {
    //Send your message (also possible to serialize it as JSON or protobuf or just use a string, no limitations)
 master
    const topic = 'rpc-chat';
    const qos = 0;
    const message = new Messaging.Message(getValue('#payload', settings.fallbackPayload));

    var topic = 'rpc-chat';
    var qos = 0;
    var message = new Messaging.Message(getValue('#payload', settings.fallbackPayload));
    settings.fallbackusername = getValue('#username', settings.fallbackusername);
    //alert(username);
 master
    message.destinationName = topic;
    message.qos = qos;
    
    client.send(message , settings);
    //alert('Published to ' + topic + ' with QoS ' + qos);
};