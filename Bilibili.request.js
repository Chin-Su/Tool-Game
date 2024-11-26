// bilibili.request.js
var blockUpload = {{blockUpload}};  // Lấy giá trị từ các tham số
var blockImmersive = {{blockImmersive}};  // Lấy giá trị từ các tham số

// Kiểm tra xem yêu cầu có phải là yêu cầu quảng cáo không
if (request.url.indexOf('advertise') !== -1 || request.url.indexOf('splash') !== -1) {
    // Nếu là yêu cầu quảng cáo, chặn yêu cầu
    return Response.error();
}

// Có thể thêm các logic tùy chỉnh khác ở đây, như chuyển hướng hoặc thay đổi URL
if (request.url.indexOf('video') !== -1 && blockImmersive) {
    // Nếu yêu cầu là video và người dùng muốn chặn quảng cáo video
    // Xóa hoặc thay đổi các tham số để loại bỏ quảng cáo video
    request.url = request.url.replace('ad=true', 'ad=false');
}

// Nếu yêu cầu không phải quảng cáo, giữ nguyên
return request;
