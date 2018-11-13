<?php
namespace App\Models;

class Container
{
    public function container($username, $score)
    {   
        echo '<li class="collection-item">   
            <span class="purple-text text-darken-2" >
            name:   ' . $username . '
            </span>
            </li>
            <li class="collection-item">
            score: ' . $score .'
            </li>';
    }

}
