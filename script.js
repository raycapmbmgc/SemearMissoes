const estados = {
    1: 0,
    2: 0,
    3: 0
  };

  function mudarImagem(id, direcao) {
    const carrossel = document.querySelector(`.carrossel[data-id="${id}"]`);
    const imagens = carrossel.querySelectorAll("img");
    imagens[estados[id]].classList.remove("active");

    estados[id] = (estados[id] + direcao + imagens.length) % imagens.length;
    imagens[estados[id]].classList.add("active");
  }