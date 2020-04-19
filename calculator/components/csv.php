<?php

class CSV {

    public function __construct($file_name) {
        $this->file_name = $file_name;
        $this->utilites = new Utilities();
    }

    public function save_data($result) {

        if ($result == null) return null;

        $data = array(
            array(
                $result,
                $this->utilites->get_array_element('REMOTE_ADDR', $_SERVER),
                date('Y-m-d h:i:s', time()),
                $this->utilites->get_array_element('HTTP_USER_AGENT', $_SERVER)
            )
        );

        $file = fopen($this->file_name . ".csv","a"); // appends data to new file

        foreach ($data as $line) {
            fputcsv($file, $line);
        }

        return fclose($file);

    }

    public function get_data() {

        $file = fopen($this->file_name . '.csv', 'r');

        $data = array();

        while (($line = fgetcsv($file)) !== FALSE) {
            $data[] = $line;
        }

        fclose($file);

        if (empty($data)) return null;

        return $data;

    }


}
