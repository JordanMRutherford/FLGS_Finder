// ---- VALIDATION (File Type and Size)----//
function fileValidation() {
    const fileInput = document.getElementById("image");
    const filePath = fileInput.value;
    const allowedExtensions = /(\.jpeg|\.jpg|\.png)$/i;
    if (!allowedExtensions.exec(filePath)) {
        alert("Invalid file type");
        fileInput.value = "";
        return false;
    }
    if (fileInput.files[0].size > 524288) {
        alert("File size must under 512KB!");
        fileInput.value = "";
        return false;
    } else return true;
}
// ---- MODAL ----//
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const submit = document.querySelector(".submit");
function openModal() {
    modal.classList.add("open");
    modal.style.display = "grid";
    backdrop.style.display = "block";
    setTimeout(function() {
        backdrop.classList.add("open");
    }, 10);
}
document.querySelector(".submit").addEventListener("click", function(e) {
    body.style.overflow = "hidden";
});

//# sourceMappingURL=new.f247ca8b.js.map
