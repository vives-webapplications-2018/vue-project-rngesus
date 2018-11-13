<?php
namespace App\Models;

class Container
{
    public function container($username, $score)
    {   
        echo '<li class="collection-item">   
            <span class="purple-text text-darken-2" >
            ' . $username . '
            </span>
            </li>
            <li class="collection-item">
            description: ' . $score .'
            </li>';
    }

}
