
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
    const from1 = document.getElementById('from1').value;
    const To1 = document.getElementById('To1').value;
    const Depart1 = document.getElementById('Depart1').value;
    const Return1 = document.getElementById('Return1').value;
    const Travellers1 = document.getElementById('Travellers1').value;
    const className1 = document.getElementById('class1').value;


    // Create an object to hold form data
    const formData1 = {
        from: from1,
        To: To1,
        Depart: Depart1,
        Return: Return1,
        Travellers: Travellers1,
        class: className1,
        // Add other form fields as needed
    };

    saveStorageByName("roundTrip" , formData1 );
    // Submit the form
    location.href = "/pages/ticket1.html"

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

    saveStorageByName("oneWayTickets" , formData2 );


    // Submit the form
    location.href = "/pages/ticket1.html"
}


function saveFormDataThree(event) {

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

    const newTicket = {
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

    saveStorageByName("multiCityTickets" , newTicket );
    // Submit the form
    location.href = "/pages/ticket1.html"
}


function saveStorageByName(storageName , item ){
    const currentItems = JSON.parse(localStorage.getItem(storageName)) || []
    currentItems.push(item)
    localStorage.setItem(storageName, JSON.stringify(currentItems));
}





// function Addnotherflight(event){


// }