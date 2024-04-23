function onSelectForm(e) {
    // debugger
    // e.target.cheched = true;
    showForm(e.target.value)
}
function showForm(selectedForm) {

    // إخفاء جميع النماذج
    document.querySelectorAll('form').forEach(function (form) {
        form.style.display = 'none';
    });

    // إظهار النموذج المحدد
    document.getElementById(selectedForm).style.display = 'block';
}
onload = () => {
    showForm("form1")
}
// document.querySelector('input[value="form2]').checked = true;