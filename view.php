<?php
    session_start();
    require 'connection.php';
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <title>View Bookings</title>
</head>
<body>
  
    <div class="container mt-4">

       

        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Booking Details
                        </h4>
                    </div>
                    <div class="card-body">

                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Customer Name</th>
                                    <th>Customer Mail</th>
                                    <th>Phone</th>
                                    <th>Departure Date</th>
                                    <th>Return Date</th>
                                    <th>Travel Destination</th>
                                    <th>Package Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php 
                                    $query = "SELECT * FROM `booking`";
                                    $query_run = mysqli_query($conn, $query);

                                    if(mysqli_num_rows($query_run) > 0)
                                    {
                                        foreach($query_run as $booking)
                                        {
                                            ?>
                                            <tr>
                                                <td><?= $booking['dname']; ?></td>
                                                <td><?= $booking['dname']; ?></td>
                                                <td><?= $booking['dphone']; ?></td>
                                                <td><?= $booking['departure']; ?></td>
                                                <td><?= $booking['dreturn']; ?></td>
                                                <td><?= $booking['destination']; ?></td>
                                                <td><?= $booking['package']; ?></td>
                                               
                                            </tr>
                                            <?php
                                        }
                                    }
                                    else
                                    {
                                        echo "<h5> No Record Found </h5>";
                                    }
                                ?>
                                
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
