<?php
include 'connection.php';

$cname = $_POST["name"];
$cemail = $_POST["email"];
$csubjectt = $_POST["subject"];
$cmessage = $_POST["message"];


$sql = "INSERT INTO contact 
(dname, dmail, dsubject, dmessage) 
VALUES ('$cname', '$cemail', '$csubjectt', '$cmessage')";


if (mysqli_query($conn, $sql)) 
{
    echo "New record created successfully";
} 
else
{
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
?>