function onSelectForm(e) {
    // debugger
    // e.target.cheched = true;
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
// document.querySelector('input[value="form2]').checked = true;