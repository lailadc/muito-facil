let notas = [];

const input = document.querySelector("input");
const table = document.querySelector("table");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        novaNota();
    }
});

input.addEventListener("focus", () => {
    if (table.lastChild.nodeName == "THEAD") {
        const thead = table.lastChild;
        thead.remove();

        const tbody = table.children[1];
        const itens = tbody.children.length;
        for (let i = itens - 1; i >= 0; i--) {
            tbody.children[i].remove();
        }
        notas = [];
    }
});

function novaNota() {
    const nota = parseFloat(input.value);
    if (nota < 0 || nota > 10) {
        alert("Nota inválida!\nApenas valores de 0 a 10 serão aceitos");
    } else {
        notas.push(nota);
        novaLinha("tbody", "tr", "td", notas.length, nota);
    }
    input.value = "";
}

function calcularMedia() {
    const soma = notas.reduce((a, b) => a + b);
    const media = soma / notas.length;
    console.log(media);

    const thead = document.createElement("thead");
    table.appendChild(thead).classList.add("resultado");
    novaLinha(".resultado", "tr", "th", "MÉDIA", media.toFixed(1));
}

function novaLinha(elemento, filho, neto, id, nota) {
    const tag = document.querySelector(elemento);
    const novaLinha = document.createElement(filho);
    const coluna1 = document.createElement(neto);
    const coluna2 = document.createElement(neto);
    tag.appendChild(novaLinha);
    tag.lastChild.appendChild(coluna1);
    tag.lastChild.lastChild.append(id);
    tag.lastChild.appendChild(coluna2);
    tag.lastChild.lastChild.append(nota);
}
