// ดึง element ทั้งหมดที่มี class "image-container"
const containers = document.querySelectorAll('.image-container');

// เพิ่ม event listener ให้แต่ละ container
containers.forEach(container => {
  container.addEventListener('click', (event) => {
    // ถ้ากดที่ container ใด container นั้นจะ toggle active
    container.classList.toggle('active');

    // เอา active ออกจาก container อื่นๆ
    containers.forEach(otherContainer => {
      if (otherContainer !== container) {
        otherContainer.classList.remove('active');
      }
    });
  });
});