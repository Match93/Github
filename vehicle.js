window.addEventListener("load", async (event) => {
    const response = await fetch("https://localhost:7295/api/user/users", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    });

    let tab = '';

    response.json().then(data => {
        data.forEach(x => {
            console.log(x);
            tab += `<tr>
                <td>${x.id}</td>
                <td>${x.producer}</td>
                <td>${x.model}</td>
                <td>${x.registration_no}</td>
                <td>${x.year_of_prod}</td>
                <td>${x.fuel}</td>
                <td>${x.vin}</td>
                <td><button type="button" class="btn btn-primary"><i class="fa-solid fa-plus fa-beat"></i></button>
                <button type="button" class="btn btn-success"><i class="fa-solid fa-comment-pen fa-beat"></i></button>
                <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash fa-beat"></i></button></td>
            </tr>`
        });
        document.getElementById('tbody').innerHTML = tab;
    });
});


function onBackClick() {
    location.href = 'menu_admin.html';
}