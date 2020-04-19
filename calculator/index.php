<?php

// Composer Includes
require_once './vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

require_once __DIR__ . '/components/components.php';

set_headers();

new CSV('calculations');

if (empty($_POST) === false) :

    echo json_encode($_POST);


else:

    echo 'hello world';

endif;



