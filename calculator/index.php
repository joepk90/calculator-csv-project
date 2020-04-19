<?php

// Composer Includes
require_once './vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

require_once __DIR__ . '/components/components.php';

$csv = new CSV('calculations');
$utilites = new Utilities();

set_headers();

if (empty($_POST) === false) :

    $result = $utilites->get_array_element('result', $_POST);

    $response = $csv->save_data($result);

    $message = ($response === true) ? 'success: calculation has been saved' : 'failed: calculation could not be saved';

    echo json_encode($message);


else:

    $records = $csv->get_data();

    var_dump($records);

    echo 'hello world';

endif;



