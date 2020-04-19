<?php


class Utilities {

    public function __construct() {}

    public function get_array_element($property, $parent ) {
        return array_key_exists( $property, $parent) && !empty( $parent[$property] ) ? $parent[$property]: null;
    }

    public function get_object_property($property, $parent ) {
        return array_key_exists( $property, (array) $parent) && !empty( $parent->$property ) ? $parent->$property : null;
    }

}
