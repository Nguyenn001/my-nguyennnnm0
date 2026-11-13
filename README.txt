FOOTBALL TOURNAMENT MANAGER 

Cấu trúc:
- index.html                 : Khung giao diện HTML
- css/styles.css             : CSS tùy chỉnh
- js/tailwind-config.js      : Cấu hình Tailwind
- js/app.js                 : JavaScript chính của ứng dụng
- js/firebase-init.js       : Khởi tạo Firebase (ES module)

Lưu ý:
- Không di chuyển riêng index.html hoặc các tệp trong css/js.
- Ứng dụng vẫn dùng các thư viện CDN (Tailwind, Google Fonts, Font Awesome),
  vì vậy cần có kết nối Internet để tải các thư viện này.
- Snapshot được lưu cục bộ trong trình duyệt (localStorage); nên xuất file JSON định kỳ để cất giữ bên ngoài thiết bị.
  hãy chạy ứng dụng trong đúng môi trường đã cấu hình trước đó.
