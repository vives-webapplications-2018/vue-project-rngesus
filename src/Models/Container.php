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
    public function tableScore()
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
    public function tableLobby()
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

    public function encode($string){
        echo htmlspecialchars($string, ENT_QUOTES, 'UTF-8');
    }
    public function script($string){
        echo '<script>' . $string . '</script>';
    }
}
