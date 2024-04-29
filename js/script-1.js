
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

// localStorage

function saveFormDataOne(event) {
    event.preventDefault();

    // Get form input values
    const from = document.getElementById('from1').value;
    const To = document.getElementById('To1').value;
    const Depart = document.getElementById('Depart1').value;
    const Return = document.getElementById('Return1').value;
    const Travellers = document.getElementById('Travellers1').value;
    const className = document.getElementById('class1').value;


    // Create an object to hold form data
    const formData1 = {
        from: from,
        To: To,
        Depart: Depart,
        Return: Return,
        Travellers: Travellers,
        class: className,
        // Add other form fields as needed
    };


    // Convert formData object to a JSON string
    const formDataJSON1 = JSON.stringify(formData1);

    // Save form data to localStorage
    localStorage.setItem('formData1', formDataJSON1);

    // Submit the form
    event.target.submit();

}

function saveFormDataTwo(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const from2 = document.getElementById('from2').value;
    const To2 = document.getElementById('To2').value;
    const Depart2 = document.getElementById('Depart2').value;
    const Travellers2 = document.getElementById('Travellers2').value;
    const className2 = document.getElementById('class2').value;

    const formData2 = {
        from: from2,
        To: To2,
        Depart: Depart2,
        Travellers: Travellers2,
        class: className2,
        // Add other form fields as needed
    };

    // Convert formData object to a JSON string
    const formDataJSON2 = JSON.stringify(formData2);

    // Save form data to localStorage
    localStorage.setItem('formData2', formDataJSON2);

    // Submit the form
    event.target.submit();
}


function saveFormDataThree(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const from3 = document.getElementById('from3').value;
    const To3 = document.getElementById('To3').value;
    const Depart3 = document.getElementById('Depart3').value;
    const Travellers3 = document.getElementById('Travellers3').value;
    const className3 = document.getElementById('class3').value;

    const from4 = document.getElementById('from4').value;
    const To4 = document.getElementById('To4').value;
    const Depart4 = document.getElementById('Depart4').value;

    const from5 = document.getElementById('from5').value;
    const To5 = document.getElementById('To5').value;
    const Depart5 = document.getElementById('Depart5').value;

    const formData3 = {
        from1: from3,
        To1: To3,
        Depart1: Depart3,
        Travellers1: Travellers3,
        class1: className3,

        from2: from4,
        To2: To4,
        Depart2: Depart4,

        from3: from5,
        To3: To5,
        Depart3: Depart5,
        // Add other form fields as needed
    };

    // Convert formData object to a JSON string
    const formDataJSON3 = JSON.stringify(formData3);

    // Save form data to localStorage
    localStorage.setItem('formData3', formDataJSON3);

    // Submit the form
    event.target.submit();
}


// defined vriables
let test1 = document.getElementById("test1")

// Retrieve data from localStorage

const formDataJSON1 = localStorage.getItem('formData1');

// Check if data exists in localStorage
if (formDataJSON1) {
    // Convert JSON string back to an object
    const formData = JSON.parse(formDataJSON1);

    // Access individual form fields
    const from1 = formData.from;
    const To1 = formData.To;
    const Depart1 = formData.Depart;
    const Return1 = formData.Return;
    const Travellers1 = formData.Travellers;
    const className1 = formData.class;

    // Now you can use the data as needed
    console.log('From:', from1);
    console.log('To:', To1);
    console.log('Depart:', Depart1);
    console.log('Return:', Return1);
    console.log('Travellers:', Travellers1);
    console.log('Class:', className1);

    test1.innerHTML=from
 

} else {
    console.log('No data found in localStorage.');
}


// function Addnotherflight(event){


// }