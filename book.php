<?php
include 'connection.php';

$cname = $_POST["name"];

$cemail = $_POST["email"];

$cphone = $_POST["phone"];

$cdeparture = $_POST["departuredate"];

$cdreturn = $_POST["returndate"];

$cdestination = $_POST["td"];
$tdestination = implode(", ", $cdestination);

$cpackage = $_POST["packages"];

$sql = "INSERT INTO booking 
(dname, dmail, dphone, departure, dreturn, destination, package) 
VALUES ('$cname', '$cemail', '$cphone', '$cdeparture', '$cdreturn', '$tdestination', '$cpackage')";


if (mysqli_query($conn, $sql)) 
{
    echo "Booking Added Successfully";
} 
else
{
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
?>  