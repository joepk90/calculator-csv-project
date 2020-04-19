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


else: ?>

    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>

    <main>
    <?php
    $records = $csv->get_data();
    $table = new Table($records);
    echo $table->render_table();
    ?>

    </main>
    </body>
    </html>

<?php endif;

?>




