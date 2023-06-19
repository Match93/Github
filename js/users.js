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
                <td>${x.firstName}</td>
                <td>${x.lastName}</td>
                <td>${x.email}</td>
                <td><button type="button" class="btn btn-primary"><i class="fa-solid fa-user"></i></button>
                <button type="button" class="btn btn-success"><i class="fa-solid fa-user-pen"></i></button>
                <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button></td>
            </tr>`
        });
        document.getElementById('tbody').innerHTML = tab;
    });
});


function onBackClick() {
    location.href = 'menu_admin.html';
}