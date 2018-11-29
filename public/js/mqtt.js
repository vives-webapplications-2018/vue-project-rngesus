// Settings
var settings = {
    brokerUrl: 'test.mosquitto.org',
    port: 8080,
    subscriptionFallbackTopic: 'rps-chat',
    publishFallbackTopic: 'rps-chat',
    fallbackQoS: 0,
    fallbackPayload: 'test',
    fallbackusername: '',
    test: ''
};



//Using the HiveMQ public Broker, with a random client Id
var client = new Messaging.Client(settings.brokerUrl, settings.port, "myclientid_" + parseInt(Math.random() * 100, 10));

//Gets  called if the websocket/mqtt connection gets disconnected for any reason
client.onConnectionLost = function(responseObject) {
    //Depending on your scenario you could implement a reconnect logic here
    alert("connection lost: " + responseObject.errorMessage);
};

//Gets called whenever you receive a message for your subscriptions
client.onMessageArrived = function(message) {
    //Do something with the push message you received
    if (message.payloadString == "rock_grhgihrwhbuwr" || message.payloadString == "paper_grhgihrwhbuwr" || message.payloadString == "scissors_grhgihrwhbuwr") {

    } else {
        $('#messages').append('<span>' + message.payloadString + '</span><br/>');
    }

};

//Connect Options
var options = {
    timeout: 3,
    //Gets Called if the connection has sucessfully been established
    onSuccess: function() {
        //alert("Connected");
        subscribe();
    },
    //Gets Called if the connection could not be established
    onFailure: function(message) {
        alert("Connection failed: " + message.errorMessage);
    }
};

// Helper function which retrieves the content of a input with the given id,
// and provides a fallback if the input is empty
var getValue = function(id, fallback) {
    var value = $(id).val();
    if (!value) value = fallback;
    return value;
};

// Subscribes to a given topic with a given QoS
var subscribe = function() {
    var topic = 'rps-chat';
    var qos = 0;
    client.subscribe(topic);
};

//Creates a new Messaging.Message Object and sends it to the HiveMQ MQTT Broker
var publish = function(rps) {
    //Send your message (also possible to serialize it as JSON or protobuf or just use a string, no limitations)
    var topic = 'rps-chat';
    var qos = 0;
    if (rps == "rock_grhgihrwhbuwr" || rps == "paper_grhgihrwhbuwr" || rps == "scissors_grhgihrwhbuwr") {
        var message = new Messaging.Message(rps);
        settings.fallbackusername = '';
    } else {
        test = getValue('#payload', settings.fallbackPayload);
        settings.fallbackusername = getValue('#username', settings.fallbackusername);
        var message = new Messaging.Message((settings.fallbackusername) + ": " + (test));
    }
    message.destinationName = topic;
    message.qos = qos;

    client.send(message);
};