<?php

use Slim\Http\Request;
use Slim\Http\Response;
use \App\Models\User;
use \App\Models\Lobby;
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

$app->get('/login', function (Request $request, Response $response, array $args) {
    $this->logger->info("GET '/login' route");
    return $this->renderer->render($response, '../public/html/register_login.phtml', $args);
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

$app->post('/lobby/new', function (Request $request, Response $response, array $args) {
    $this->logger->info("GET '/index' route");
    $title = $_POST["title"];
    $password = $_POST["password"];
    $lobby = new Lobby(); 
    $lobby->title = "$title";
    $lobby->password = "$password";
    $lobby->save();
    return "hello  $title  $password";
    //return $this->renderer->render($response, '../public/html/multiplayer.html', $args);
});
$app->post('/register', function (Request $request, Response $response, array $args) {

    $this->logger->info("GET '/index' route");
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    //$email = $_POST["email"];
    return "hello  $username  $password";
    // $rngesus->save();
    //return $this->renderer->render($response, '../public/html/register_login.phtml', $args);
});


