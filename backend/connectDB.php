<?php
	$servername = "localhost";   // where MySQL is running
    $dbusername = "root";        // default XAMPP username
    $dbpassword = "";            // default XAMPP password (blank)
    $dbname = "movielibrary_db";        // name of your database

    try {
        // Create a new PDO connection
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $dbusername, $dbpassword);
        // Set error mode to exception so we can catch mistakes
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // If successful, no output is needed
    } catch(PDOException $e) {  
        // Show error if connection fails
        echo "Connection failed: " . $e->getMessage();
    }
?>