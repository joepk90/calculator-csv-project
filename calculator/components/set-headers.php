<?php

function set_headers() {

    header('Content-Type: application/json');

    $env = getenv('ENV');

    if ($env === 'develop') {

        // allow requests from local host
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: *');

    }



}
