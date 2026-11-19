// Locket Min - chỉ thay ảnh trong popup Feature Discovery.
// Không chỉnh sửa RevenueCat, trạng thái Gold, receipts hoặc subscribers.
const OLD_IMAGE = "https://i.ibb.co/xkJMqKn/photo-2026-10-16-15-31-19.png";
const NEW_IMAGE = "https://i.ibb.co/MrNX63s/IMG-0103.jpg";

let body = $response.body;
if (typeof body === "string" && body.includes(OLD_IMAGE)) {
  body = body.replaceAll(OLD_IMAGE, NEW_IMAGE);
}
$done({ body });
