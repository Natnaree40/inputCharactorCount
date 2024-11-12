const count = document.querySelector(".count")
const input = document.querySelector("input")

input.addEventListener("keyup", () => {
    count.innerHTML = input.value.length
})

// input.addEventListener("keyup", ...): บรรทัดนี้ใช้ในการเพิ่ม Event Listener ให้กับองค์ประกอบ input เพื่อตรวจจับเหตุการณ์ "keyup" ซึ่งเหตุการณ์นี้จะทำงานทุกครั้งที่ผู้ใช้ปล่อยคีย์หลังจากกดลงไป
// () => { ... }: เป็นฟังก์ชันแบบ Arrow Function ซึ่งจะทำงานทุกครั้งที่เกิดเหตุการณ์ "keyup"