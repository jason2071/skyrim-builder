# Skyrim Perk Builder

วางแผน Perk ของ Skyrim → ส่งออกไฟล์คำสั่ง Console → นำ build ไปใช้ในเกม PC โดยเลือกดูคำอธิบาย Perk เป็นภาษาอังกฤษหรือไทยได้ทีละภาษา

โปรเจกต์นี้พัฒนาต่อจาก [chrizel/skyrim](https://github.com/chrizel/skyrim) ของ Christian Zeller; รีโปปัจจุบันคือ [jason2071/skyrim-builder](https://github.com/jason2071/skyrim-builder)

## ทดลองใช้ในเครื่อง

ต้องมี [Node.js และ npm](https://nodejs.org/) ก่อนเริ่ม รันคำสั่งจากโฟลเดอร์รีโป:

1. ติดตั้ง dependencies:

   ```sh
   npm ci
   ```

   ได้แพ็กเกจตาม `package-lock.json` ใน `node_modules/`

2. สร้างไฟล์เว็บและเปิดเซิร์ฟเวอร์ที่รีบิลด์เมื่อแก้ `src/` หรือ `static/`:

   ```sh
   npm run dev
   ```

   เปิด `http://localhost:8080/` ในเบราว์เซอร์; ไฟล์เว็บที่สร้างอยู่ใน `build/`

## ใช้งาน

คลิกสายสกิลทางซ้าย แล้วคลิกซ้ายที่ Perk เพื่อเพิ่ม rank หรือคลิกขวาเพื่อลด rank เลือก `English` หรือ `ไทย` ที่ `Descriptions` (เริ่มต้นเป็น English) ระบบเก็บ build ไว้ใน URL hash จึงคัดลอกลิงก์เพื่อเปิด build เดิมได้

หน้า **Adamant · Nordic Souls** อยู่ที่ `http://localhost:8080/adamant.html` ใช้ข้อมูลจาก Nordic Souls **3.2.2** / Adamant **6.0.4** รวม Hand to Hand, Security, Ascension และแพตช์ที่เปิดใช้อยู่ (18 สายสกิล, 217 Perk, 320 ranks) เลือกคำอธิบายภาษาอังกฤษหรือไทยได้ครบทุก rank และอ่านข้อความเต็มในช่องใต้แผนผัง ลิงก์ build แยกจาก Vanilla และก่อนใช้ไฟล์ส่งออกต้องตรวจเลข Mod Index ใน MO2 ให้ตรงกับช่องในหน้าเว็บ ดูที่มาและวิธีอัปเดตข้อมูลใน [`docs/adamant.md`](docs/adamant.md)

กด `Export reset` และ `Export addperks` เพื่อดาวน์โหลด `reset.txt` และ `addperks.txt` จากนั้นเปิด `How to respec` เพื่อดูขั้นตอนใช้ไฟล์ในเกม คู่มือเปิดในแท็บใหม่และมีทั้ง [English](static/respec.html) กับ [ภาษาไทย](static/respec-th.html) **สำรองเซฟก่อนใช้คำสั่ง Console** เพราะ `reset.txt` ล้าง Perk เดิมก่อนใส่ build ใหม่

## ตรวจสอบและเผยแพร่

- `npm run build` คอมไพล์ TypeScript และคัดลอก `static/` ไป `build/`
- `npm test` รัน Jest หนึ่งครั้ง; `npm run test:dev` รันแบบ watch
- `npm run server` เปิดเว็บจาก `build/` โดยต้อง build ก่อน
- GitHub Actions ใน `.github/workflows/deploy.yml` build และเผยแพร่ `build/` ไปสาขา `gh-pages` เมื่อ push ไป `main`

ข้อมูล Perk สองภาษาอ้างอิงจาก [`docs/skyrim_vanilla_perks_en_th.md`](docs/skyrim_vanilla_perks_en_th.md) โค้ดต้นฉบับใช้สัญญาอนุญาต [GPL-3.0-or-later](LICENSE.txt); Skyrim เป็นเครื่องหมายการค้าของ Bethesda Softworks
