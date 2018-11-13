<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/', function (Request $request, Response $response, array $args) {
    return $response->withRedirect('/index.phtml', 301);
});

$app->get('/scorebord', function (Request $request, Response $response, array $args) {
    $this->logger->info("GET '/scorebord' route");
    $data = RNGesus::all();
    foreach ($data as $RNGesus) {
        Container::container($RNGesus->username , $RNGesus->score);  
    }
    return $this->renderer->render($response, 'scorebord.phtml', $args);
});

$app->get('/credits', function (Request $request, Response $response, array $args) {
    $this->logger->info("GET '/credits' route");
    return $this->renderer->render($response, 'credits.html', $args);
});

$app->get('/instructions', function (Request $request, Response $response, array $args) {
    $this->logger->info("GET '/instructions' route");
    return $this->renderer->render($response, 'instructions.html', $args);
});

$app->get('/multiplayer', function (Request $request, Response $response, array $args) {
    $this->logger->info("GET '/multiplayer' route");
    return $this->renderer->render($response, 'multiplayer.html', $args);
});

$app->get('/play', function (Request $request, Response $response, array $args) {
    $this->logger->info("GET '/play' route");
    return $this->renderer->render($response, 'play.html', $args);
});

$app->get('/singleplayer', function (Request $request, Response $response, array $args) {
    $this->logger->info("GET '/singleplayer' route");
    return $this->renderer->render($response, 'singleplayer.html', $args);
});
