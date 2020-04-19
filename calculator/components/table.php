<?php

class Table {

    public function __construct($data) {
        $this->data = $data;
        $this->utilites = new Utilities();
    }

    public function render_table() {

        if (empty($this->data)) return '<p>No data to dispay</p>';

        ob_start(); ?>

        <table>
            <th>
                <tr>
                    <td>Calculation</td>
                    <td>IP Address</td>
                    <td>Data/Time</td>
                    <td>User Agent</td>
                </tr>
            </th>
            <tbody>
            <?php foreach($this->data as $row): ?>

                <tr>
                    <?php foreach($row as $record):?>
                        <td><?php echo $record ;?></td>
                    <?php endforeach; ?>
                </tr>

            <?php endforeach; ?>
            </tbody>
        </table>


        <?php return ob_get_clean();

    }


}
