// bilibili.response.js
var lyricLang = {{lyricLang}};  // Lấy giá trị từ các tham số
var captionLang = {{captionLang}};  // Lấy giá trị từ các tham số

// Kiểm tra nếu phản hồi chứa quảng cáo
if (response.body && response.body.includes('ad')) {
    // Nếu phản hồi có chứa quảng cáo, loại bỏ hoặc thay thế phần quảng cáo
    response.body = response.body.replace(/"ad":\s*true/g, '"ad": false');
}

// Kiểm tra và thay đổi ngôn ngữ lời bài hát hoặc chú thích nếu người dùng đã thiết lập
if (response.body && lyricLang) {
    response.body = response.body.replace(/"lyricLang":\s*".*?"/, '"lyricLang": "' + lyricLang + '"');
}
if (response.body && captionLang) {
    response.body = response.body.replace(/"captionLang":\s*".*?"/, '"captionLang": "' + captionLang + '"');
}

// Chỉnh sửa hoặc loại bỏ các phần khác trong phản hồi nếu cần
if (response.body && blockUpload) {
    response.body = response.body.replace(/"upload":\s*true/g, '"upload": false');
}

// Trả về phản hồi đã được thay đổi
return response;
