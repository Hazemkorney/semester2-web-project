function onSelectPage(e) {
    showForm(e.target.value)
}
function showForm(selectedsection) {

    // إخفاء جميع النماذج
    document.querySelectorAll('section').forEach(function (section) {
        section.style.display = 'none';
    });

    // إظهار النموذج المحدد
    document.getElementById(selectedsection).style.display = 'flex';
}
onload = () => {
    showForm("page1")
}

function myFunction() {
  location.href = "https://www.w3schools.com";
}