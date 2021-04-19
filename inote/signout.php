<!-- file giải phóng session, nó dùng để đăng xuất -->
<?php

// Include database, session, general info
require_once 'core/init.php';
// Xoá session
$session->destroy();
// Trở về trang chủ
header('Location: index.php');

?>