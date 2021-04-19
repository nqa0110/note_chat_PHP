<!-- lưu trữ session, các thông tin 
và là file kết nối giữa file connectdb.php với các file bên ngoài -->
<?php

// Kết nối với file connectdb.php
include('connectdb.php');
// Lấy múi giờ chung cho site
date_default_timezone_set('Asia/Ho_Chi_Minh');
$date_current = '';
$date_current = date("Y-m-d H:i:sa");

// Bắt đầu lưu session
session_start();
// Nếu tồn tại session
if (@$_SESSION['username']) {
    // Gán $user = session
    $user = $_SESSION['username'];
}
// Ngược lại 
else {
    // $user rỗng
    $user = '';
}
?>