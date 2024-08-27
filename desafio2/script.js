function chunk() {
    let qntdd = parseInt(document.querySelector("input").value);
    mostrar(recursiva(qntdd));
}

function recursiva(n) {
    if (n == 1) {
        return "chunk";
    } else if (n == 0) {
        return "";
    } else if (n < 0) {
        n *= -1;
        return recursiva(n);
    } else {
        return `chunk-${recursiva(n - 1)}`;
    }
}

function mostrar(item) {
    const ol = document.querySelector("ol");
    const li = document.createElement("li");
    ol.appendChild(li);
    li.innerHTML = item;
}
