<?php
namespace App\Models;

class Container
{
    public function container($username, $score)
    {
        echo    '<tr>
                <td>' . $username . '</td>
                <td>' . $score . '</td>
                </tr>';
    }
    public function table()
    {
        echo '<table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>';
    }
    public function tableEnd(){
        echo '</tbody>
        </table>';  
    }
}
