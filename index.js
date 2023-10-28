function adicionar(listaAdicao = null) {
  const item = prompt("Insira o item");
  if (item) {
    const lista = document.getElementById(listaAdicao);
    const novoLi = document.createElement("li");
    novoLi.innerHTML = `${item} <span class="delete-icon" onclick="removerItem(this)">-</span>`;
    lista.appendChild(novoLi);
  }
}

function removerItem(span) {
  const item = span.parentElement;
  item.remove();
}
