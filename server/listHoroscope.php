<?php

function listHoroscope($date) {
    if($date >= '2021-01-21' && $date <= '2021-02-18') {
        $sign = array( 
            'Aquaries'
            
        );
        return $sign;
    } else if($date >= '2021-02-19' && $date <= '2021-03-19'){
        $sign = array(
            'Pisces'
        );
        return $sign; 
    } else if($date >= '2021-03-20' && $date <= '2021-04-19'){
        $sign = array(
            'Airies'
        );
        return $sign;
    } else if($date >= '2021-04-20' && $date <= '2021-05-20'){
        $sign = array(
            'Taurus'
        );
        return $sign; 
    } else if($date >= '2021-05-21' && $date <= '2021-06-20'){
        $sign = array(
            'Gemeni'
        );
        return $sign;
    } else if($date >= '2021-06-21' && $date <= '2021-07-21'){
        $sign = array(
            'Cancer'
        );
        return $sign;
    } else if($date >= '2021-07-22' && $date <= '2021-08-22'){
        $sign = array(
            'Leo'
        );
        return $sign;
    } else if($date >= '2021-08-23' && $date <= '2021-09-22'){
        $sign = array(
            'Virgo'
        );
        return $sign;
    } else if($date >= '2021-09-23' && $date <= '2021-10-22'){
        $sign = array(
            'Libra'
        );
        return $sign;
    } else if($date >= '2021-10-23' && $date <= '2021-11-21'){
        $sign = array(
            'Scorpio'
        );
        return $sign;
    } else if($date >= '2021-11-22' && $date <= '2021-12-21'){
        $sign = array(
            'Sagittarius'
        );
        return $sign;
    } else if($date >= '2021-12-22' && $date <= '2021-01-20'){
        $sign = array(
            'Capricorn'
        );
        return $sign;
    }
};

?>