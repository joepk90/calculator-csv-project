<?php

function set_headers() {

    $env = getenv('ENV');

    if ($env === 'develop' ) {

        // allow requests from local host
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: *');
    }

    if(empty($_POST) === false) {
        header('Content-Type: application/json');
    }

}
