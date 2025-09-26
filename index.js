const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Route ส่ง HTML แบบตรง ๆ
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="th">
    <head>
      <meta charset="UTF-8">
      <title>My Story</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 2rem; background: #f9f9f9; }
        h1 { color: darkblue; }
        p { line-height: 1.5; }
        .card { padding: 1rem; margin: 1rem 0; border: 1px solid #ddd; background: white; border-radius: 8px; }
      </style>
    </head>
    <body>
      <h1>ยินดีต้อนรับ 🚀</h1>
      <p>นี่คือ HTML ที่ส่งออกมาจาก <code>res.send()</code> โดยตรง</p>

      <div class="card">
        <h2>Section 1</h2>
        <p>เพื่อนสามารถเขียน HTML ได้เต็ม ๆ เลย ไม่ต้องใช้ EJS</p>
      </div>

      <div class="card">
        <h2>Section 2</h2>
        <ul>
          <li>✔️ Route / แสดงหน้าแรก</li>
          <li>✔️ ใช้ CSS inline</li>
          <li>✔️ เขียนโค้ด HTML ยาว ๆ ได้เลย</li>
        </ul>
      </div>

      <footer>
        <p>&copy; 2025 MyStory</p>
      </footer>
    </body>
    </html>
  `);
});

// Route HTML อื่น
app.get("/about", (req, res) => {
  res.send(`
    <html>
      <head><title>About</title></head>
      <body>
        <h1>เกี่ยวกับเพื่อน</h1>
        <p>หน้านี้สร้างด้วย <code>res.send()</code> เช่นกัน</p>
        <a href="/">กลับหน้าแรก</a>
      </body>
    </html>
  `);
});

// 404
app.use((req, res) => {
  res.status(404).send(`
    <html>
      <head><title>Not Found</title></head>
      <body>
        <h1>404 - ไม่พบหน้า</h1>
        <a href="/">กลับหน้าแรก</a>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
