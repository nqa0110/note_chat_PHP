// gửi dữ liệu qua Ajax tới file sendmsg.php để tiến hành gửi tin nhắn

// Hàm gửi tin nhắn
function sendMsg() {
    // Khai báo các biến trong form
    $body_msg = $('#formSendMsg input[type="text"]').val();

    // Gửi dữ liệu
    $.ajax({
        url: 'sendmsg.php', // đường dẫn file xử lý
        type: 'POST', // phương thức
        // dữ liệu
        data: {
            body_msg: $body_msg
                // thực thi khi gửi dữ liệu thành công
        },
        success: function() {
            $('#formSendMsg input[type="text"]').val(''); // làm trống thanh trò chuyện
        }
    });
}

// Bắt sự kiện gõ phím enter trong thanh trò chuyện
$('#formSendMsg input[type="text"]').keypress(function() {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') { //13 là enter
        // Chạy hàm gửi tin nhắn
        sendMsg();
    }
});

// Bắt sự kiện click vào thanh trò chuyện
$('#formSendMsg input[type="text"]').click(function(e) {
    // Kéo hết thanh cuộn trình duyệt đến cuối
    window.scrollBy(0, $(document).height());
});