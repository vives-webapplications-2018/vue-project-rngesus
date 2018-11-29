// Settings
var settings = {
    brokerUrl: 'test.mosquitto.org',
    port: 8080,
    subscriptionFallbackTopic: 'rps-chat',
    publishFallbackTopic: 'rps-chat',
    fallbackQoS: 0,
    fallbackPayload: 'test',
    fallbackusername: '',
    test: '',
    userID: '',
    opponentID: '',
    counter: 3,
    i: 0,
    rps: ''
};

function randomValue() {
    return Math.floor(Math.random() * 90000) + 10000;
}

//Using the HiveMQ public Broker, with a random client Id
var client = new Messaging.Client(settings.brokerUrl, settings.port, "myclientid_" + parseInt(Math.random() * 100, 10));

//Gets  called if the websocket/mqtt connection gets disconnected for any reason
client.onConnectionLost = function (responseObject) {
    //Depending on your scenario you could implement a reconnect logic here
    alert("connection lost: " + responseObject.errorMessage);
};

//Gets called whenever you receive a message for your subscriptions
client.onMessageArrived = function (message) {
    //Do something with the push message you received
    console.log(message.payloadString)
    console.log(settings.opponentID)
    if ( message.payloadString.includes("_grhgihrwhbuwr") && message.payloadString.includes(settings.opponentID)) {

        str = message.payloadString.slice(0, message.payloadString.length - 20);
        //choose(str);
        console.log("reeeee")

    } else if (message.payloadString.includes('opponentID') && !(message.payloadString.includes(settings.userID))) {
        if (settings.counter > settings.i) {
            settings.opponentID = '';
            settings.opponentID = message.payloadString;
            //console.log('userID_' + settings.userID);
            console.log(settings.opponentID);
            sendID();
            settings.i++
        }
    } else if (!(message.payloadString.includes('ID_') || message.payloadString.includes('grhgihrwhbuwr'))) {
        $('#messages').append('<span>' + message.payloadString + '</span><br/>');
    }
};

//Connect Options
var options = {
    timeout: 3,
    //Gets Called if the connection has sucessfully been established
    onSuccess: function () {
        //alert("Connected");
        settings.userID = '';
        settings.userID = randomValue();
        subscribe();
    },
    //Gets Called if the connection could not be established
    onFailure: function (message) {
        alert("Connection failed: " + message.errorMessage);
    }
};

// Helper function which retrieves the content of a input with the given id,
// and provides a fallback if the input is empty
var getValue = function (id, fallback) {
    var value = $(id).val();
    if (!value) value = fallback;
    return value;
};

// Subscribes to a given topic with a given QoS
var subscribe = function () {
    var topic = 'rps-chat';
    var qos = 0;
    client.subscribe(topic);
    sendID();
};

//Creates a new Messaging.Message Object and sends it to the HiveMQ MQTT Broker
var publish = function (rps) {
    //Send your message (also possible to serialize it as JSON or protobuf or just use a string, no limitations)
    var topic = 'rps-chat';
    var qos = 0;

    if (rps == "rock_grhgihrwhbuwr" || rps == "paper_grhgihrwhbuwr" || rps == "scissors_grhgihrwhbuwr") {
        var message = new Messaging.Message(rps + '_opponentID_' + settings.userID);
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

var sendID = function () {
    var topic = 'rps-chat';
    var qos = 0;
    var message = new Messaging.Message('opponentID_' + settings.userID);
    message.destinationName = topic;
    message.qos = qos;
    client.send(message);
}