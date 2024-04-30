function getTickets() {
    // defined vriables


    // Retrieve data from localStorage

    const oneWayTickets = localStorage.getItem('oneWayTickets');
    const roundTickets = localStorage.getItem('roundTrip');
    const multiTickets = localStorage.getItem('multiCityTickets');

    createTable(oneWayTickets, "oneWay")
    createTable(roundTickets, "round")
    createTable(multiTickets, "tickets")
}

function createTable(item, id) {
    // Check if data exists in localStorage
    if (item) {
        const ticketsTable = document.getElementById(id)
        // Convert JSON string back to an object
        const tickets = JSON.parse(item);
        ticketsTable.querySelector("thead").innerHTML +=
            getColHeader(tickets[0])
        tickets.forEach(ticket => {
            ticketsTable.querySelector("tbody").innerHTML +=
                getColRow(ticket)
        });



    } else {
        console.log('No data found in localStorage.');
    }
}
function getColHeader(item) {
    return `<tr>${Object.keys(item).map(getaddColValue)}</tr>`
}
function getColRow(values) {
    return `<tr>${Object.values(values).map(getaddColValue)}</tr>`
}
function getaddColValue(val) {
    return `<td><p class="td">${val}</p></td>`
}

function getaddColHead(key) {
    return `<th><p class="td">${key}</p></th>`
}

onload = getTickets