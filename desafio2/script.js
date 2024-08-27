const ol = document.querySelector("ol");

function chunk() {
    const qntdd = parseInt(document.querySelector("input").value);
    mostrar(recursiva(qntdd));

    const i = ol.children.length;
    let n = qntdd;
    let flexao = "ões";
    let inspecionar = `${i}. `;

    switch (qntdd) {
        case 0:
            n = "nenhuma";
        case 1:
        case -1:
            flexao = "ão";
        default:
            inspecionar += `${n} repetiç${flexao}`;
    }
    console.log(inspecionar);
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
    const li = document.createElement("li");
    ol.appendChild(li);
    li.innerHTML = item;
}
