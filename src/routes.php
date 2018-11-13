<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/scorebord', function (Request $request, Response $response, array $args) {
    $this->logger->info("GET '/scorebord' route");
    $data = RNGesus::all();
    foreach ($data as $RNGesus) {
        Container::container($RNGesus->username , $RNGesus->score);  
    }
    return $this->renderer->render($response, 'scorebord.phtml', $args);
});
