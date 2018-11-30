<?php

use Slim\Http\Request;
use Slim\Http\Response;
use \App\Models\User;
use \App\Models\Container;

// Routes

$app->get('/', function (Request $request, Response $response, array $args) {
    return $response->withRedirect('/index', 301);
});

$app->get('/scoreboard', function (Request $request, Response $response, array $args) {
    $this->logger->info("GET '/scoreboard' route");
    $users = User::orderBy('score', 'DESC')->get();
    Container::table();
    foreach ($users as $User) {
        Container::container($User->username , $User->score);  
    }
    Container::tableEnd();
    return $this->renderer->render($response, 'scoreboard.phtml', $args);
});

$app->get('/credits', function (Request $request, Response $response, array $args) {
    $this->logger->info("GET '/credits' route");
    return $this->renderer->render($response, '../public/html/credits.html', $args);
});

$app->get('/instructions', function (Request $request, Response $response, array $args) {
    $this->logger->info("GET '/instructions' route");
    return $this->renderer->render($response, '../public/html/instructions.html', $args);
});

$app->get('/multiplayer', function (Request $request, Response $response, array $args) {
    $this->logger->info("GET '/multiplayer' route");
    return $this->renderer->render($response, '../public/html/multiplayer.html', $args);
});

$app->get('/singlePlayer', function (Request $request, Response $response, array $args) {
    $this->logger->info("GET '/singlePlayer' route");
    return $this->renderer->render($response, '../public/html/singlePlayer.html', $args);
});

$app->get('/index', function (Request $request, Response $response, array $args) {
    $this->logger->info("GET '/index' route");
    return $this->renderer->render($response, 'index.phtml', $args);
});

$app->get('/mode', function (Request $request, Response $response, array $args) {
    $this->logger->info("GET '/mode' route");
    return $this->renderer->render($response, '../public/html/mode.html', $args);
});
// $app->get('/impossible', function (Request $request, Response $response, array $args) {
//     $this->logger->info("GET '/mode' route");
//     return $this->renderer->render($response, '../public/html/impossible.html', $args);
// });
// $app->get('/hard', function (Request $request, Response $response, array $args) {
//     $this->logger->info("GET '/mode' route");
//     return $this->renderer->render($response, '../public/html/hard.html', $args);
// });
// $app->get('/med', function (Request $request, Response $response, array $args) {
//     $this->logger->info("GET '/mode' route");
//     return $this->renderer->render($response, '../public/html/med.html', $args);
// });
 $app->get('/easy', function (Request $request, Response $response, array $args) {
     $this->logger->info("GET '/play' route");
     return $this->renderer->render($response, '../public/html/easy.html', $args);
 });
$app->get('/difficulty', function (Request $request, Response $response, array $args) {
    $this->logger->info("GET '/index' route");
    return $this->renderer->render($response, '../public/html/difficulty.html', $args);
});

$app->get('/lobby', function (Request $request, Response $response, array $args) {
    $this->logger->info("GET '/index' route");
    return $this->renderer->render($response, '../public/html/lobby.html', $args);
});