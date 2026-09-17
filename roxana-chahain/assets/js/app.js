(function () {
  "use strict";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const catNombre = (id) => {
    const c = CATEGORIAS.find((x) => x.id === id);
    return c ? c.nombre : "";
  };

  const waLink = (texto) =>
    "https://wa.me/" + ACADEMIA.whatsapp + "?text=" + encodeURIComponent(texto);

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));

  const normalizar = (s) =>
    String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  const ICONOS = {
    reloj: '<svg viewBox="0 0 24 24" class="ico"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.2 3.12.8-1.32-4.5-2.67z"/></svg>',
    calendario: '<svg viewBox="0 0 24 24" class="ico"><path d="M7 2v2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm12 7v10H5V9h14z"/></svg>',
    repetir: '<svg viewBox="0 0 24 24" class="ico"><path d="M7 7h8v2.5L19 6l-4-3.5V5H5v6h2V7zm10 10H9v-2.5L5 18l4 3.5V19h10v-6h-2v4z"/></svg>',
    regalo: '<svg viewBox="0 0 24 24" class="ico"><path d="M20 7h-2.2a3 3 0 0 0-4.55-3.6L12 4.5l-1.25-1.1A3 3 0 0 0 6.2 7H4a1 1 0 0 0-1 1v3h9V8h-1.9a1 1 0 1 1 .7-1.7L12 7.6l1.2-1.3a1 1 0 1 1 .7 1.7H12v3h9V8a1 1 0 0 0-1-1zM4 13v7a1 1 0 0 0 1 1h6v-8H4zm9 8h6a1 1 0 0 0 1-1v-7h-7v8z"/></svg>',
    zoom: '<svg viewBox="0 0 24 24" class="ico"><path d="M10.5 3a7.5 7.5 0 1 0 4.61 13.42l4.23 4.24a1 1 0 0 0 1.42-1.42l-4.24-4.23A7.5 7.5 0 0 0 10.5 3zm0 2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm.5 2v2H9v1h2v2h1v-2h2V9h-2V7h-1z"/></svg>',
    wa: '<svg viewBox="0 0 24 24" class="ico"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm4.52 11.87c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.06s.89 2.39 1.01 2.56c.12.16 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/></svg>'
  };

  /* Contacto */

  const mensajeGeneral =
    "Hola! Quisiera recibir información sobre los cursos de la Academia Roxana Chahaín.";

  $$("[data-wa-general]").forEach((el) => {
    el.setAttribute("href", waLink(mensajeGeneral));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  $("#waVisible").textContent = ACADEMIA.whatsappVisible;
  $("#footerWa").textContent = ACADEMIA.whatsappVisible;
  $("#igLink").href = ACADEMIA.instagram;
  $("#footerIg").href = ACADEMIA.instagram;
  $("#fbLink").href = ACADEMIA.facebook;
  $("#footerFb").href = ACADEMIA.facebook;
  $("#mapaLink").href = ACADEMIA.ubicacionMapa;
  $("#footerMapa").href = ACADEMIA.ubicacionMapa;
  $("#ubicacionTexto").textContent = ACADEMIA.ubicacionTexto;

  const atencionHTML = ACADEMIA.atencion
    .map((a) => "<li>" + esc(a.dias) + "<span>" + esc(a.horas) + "</span></li>")
    .join("");
  $("#atencionLista").innerHTML = atencionHTML;
  $("#atencionFooter").innerHTML = atencionHTML;

  /* Política y pagos */

  $("#politicaLista").innerHTML = POLITICA_RESERVAS
    .map((p) => "<li>" + esc(p) + "</li>")
    .join("");

  $("#pagosGrid").innerHTML = CUENTAS_PAGO.cuentas
    .map(
      (c) => `
      <article class="pago-card">
        <h3 class="pago-banco">${esc(c.banco)}</h3>
        <p class="pago-titular">${esc(c.titular)}</p>
        <div class="pago-alias">
          <span class="pago-alias-txt">
            <span class="pago-alias-label">${esc(c.etiqueta)}</span>
            <span class="pago-alias-valor">${esc(c.valor)}</span>
          </span>
          <button class="btn btn-outline btn-sm" type="button" data-copiar="${esc(c.valor)}">Copiar</button>
        </div>
      </article>`
    )
    .join("");

  $("#pagosNotas").innerHTML = CUENTAS_PAGO.notas
    .map((n) => "<li>" + esc(n) + "</li>")
    .join("");

  /* Cursos */

  const grid = $("#cursosGrid");
  const vacio = $("#vacio");
  const resultado = $("#resultado");
  const buscador = $("#buscador");
  const buscadorClear = $("#buscadorClear");

  let filtroCategoria = "todos";
  let consulta = "";

  $("#filtros").innerHTML = CATEGORIAS
    .map(
      (c) =>
        `<button type="button" class="chip${c.id === "todos" ? " is-active" : ""}" data-cat="${c.id}" aria-pressed="${c.id === "todos"}">${esc(c.nombre)}</button>`
    )
    .join("");

  const indice = CURSOS.map((c) =>
    normalizar(
      [
        c.nombre,
        catNombre(c.categoria),
        c.costo,
        c.costoNota,
        c.duracion,
        c.frecuencia,
        c.incluye,
        c.horarioNota,
        (c.horarios || []).join(" "),
        (c.contenido || []).join(" "),
        (c.planes || []).map((p) => p.duracion + " " + p.costo + " " + p.frecuencia).join(" ")
      ]
        .filter(Boolean)
        .join(" ")
    )
  );

  const cursoWa = (c) =>
    waLink("Hola! Me interesa el " + c.nombre + ". ¿Podrían darme más información?");

  function tarjeta(c, i) {
    const horariosVista = c.horarios ? c.horarios.slice(0, 2) : [];
    const restantes = c.horarios ? c.horarios.length - horariosVista.length : 0;

    const filaHorario = c.horarios
      ? `<div class="curso-dato">${ICONOS.reloj}<ul class="curso-horarios-mini">${horariosVista
          .map((h) => "<li>" + esc(h) + "</li>")
          .join("")}${restantes > 0 ? '<li class="mas">+ ' + restantes + " horario" + (restantes > 1 ? "s" : "") + " más</li>" : ""}</ul></div>`
      : c.horarioNota
        ? `<div class="curso-dato">${ICONOS.reloj}<span><b>${esc(c.horarioNota)}</b></span></div>`
        : "";

    return `
      <article class="curso-card" data-index="${i}">
        <button class="curso-foto" type="button" data-abrir-visor="${i}" aria-label="Ampliar la imagen de ${esc(c.nombre)}">
          <img src="${c.imagen}" alt="${esc(c.nombre)}" loading="lazy" decoding="async" width="1080" height="1350">
          <span class="curso-lupa" aria-hidden="true">${ICONOS.zoom}</span>
        </button>
        <div class="curso-body">
          <p class="curso-tag">${esc(catNombre(c.categoria))}</p>
          <h3 class="curso-nombre">${esc(c.nombre)}</h3>
          <p class="curso-precio"><strong>${esc(c.costo)}</strong>${c.costoNota ? "<span>" + esc(c.costoNota) + "</span>" : ""}</p>
          <div class="curso-datos">
            <div class="curso-dato">${ICONOS.calendario}<span>Duración: <b>${esc(c.duracion)}</b></span></div>
            <div class="curso-dato">${ICONOS.repetir}<span>${esc(c.frecuencia)}</span></div>
            ${c.incluye ? `<div class="curso-dato">${ICONOS.regalo}<span>${esc(c.incluye)}</span></div>` : ""}
            ${filaHorario}
          </div>
          <div class="curso-acciones">
            <button class="btn btn-outline btn-sm" type="button" data-detalle="${i}">Ver detalles</button>
            <a class="btn btn-wa btn-sm" href="${cursoWa(c)}" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
      </article>`;
  }

  function render() {
    const q = normalizar(consulta.trim());
    const visibles = [];

    CURSOS.forEach((c, i) => {
      const okCat = filtroCategoria === "todos" || c.categoria === filtroCategoria;
      const okTexto = !q || indice[i].includes(q);
      if (okCat && okTexto) visibles.push(i);
    });

    grid.innerHTML = visibles.map((i) => tarjeta(CURSOS[i], i)).join("");
    vacio.hidden = visibles.length > 0;
    resultado.textContent =
      visibles.length === 0
        ? ""
        : visibles.length === CURSOS.length
          ? CURSOS.length + " cursos disponibles"
          : visibles.length + (visibles.length === 1 ? " curso encontrado" : " cursos encontrados");
    buscadorClear.hidden = consulta.length === 0;
  }

  $("#filtros").addEventListener("click", (e) => {
    const chip = e.target.closest("[data-cat]");
    if (!chip) return;
    filtroCategoria = chip.dataset.cat;
    $$("#filtros .chip").forEach((b) => {
      const activo = b === chip;
      b.classList.toggle("is-active", activo);
      b.setAttribute("aria-pressed", String(activo));
    });
    render();
  });

  buscador.addEventListener("input", () => {
    consulta = buscador.value;
    render();
  });

  buscadorClear.addEventListener("click", () => {
    buscador.value = "";
    consulta = "";
    buscador.focus();
    render();
  });

  render();

  /* Horarios */

  $("#acordeonHorarios").innerHTML = CURSOS.map((c, i) => {
    let cuerpo;
    if (c.horarios) {
      cuerpo =
        '<ul class="horario-lista">' +
        c.horarios.map((h) => "<li>" + esc(h) + "</li>").join("") +
        "</ul>" +
        (c.frecuencia ? '<p class="horario-nota">' + esc(c.frecuencia) + " · " + esc(c.duracion) + "</p>" : "");
    } else if (c.horarioNota) {
      cuerpo =
        '<ul class="horario-lista"><li>' + esc(c.horarioNota) + "</li></ul>" +
        '<p class="horario-nota">' + esc(c.frecuencia) + " · " + esc(c.duracion) + "</p>";
    } else {
      cuerpo =
        '<p class="horario-nota">Horarios a confirmar con la academia. ' +
        esc(c.frecuencia) + " · " + esc(c.duracion) + ".</p>" +
        '<a class="btn btn-outline btn-sm" href="' + cursoWa(c) + '" target="_blank" rel="noopener" style="margin-top:14px">Consultar por WhatsApp</a>';
    }

    const cantidad = c.horarios
      ? c.horarios.length + (c.horarios.length === 1 ? " horario" : " horarios")
      : c.horarioNota || "Consultar";

    return `
      <div class="acordeon-item" data-acordeon>
        <h3>
          <button class="acordeon-btn" type="button" aria-expanded="false" aria-controls="panel-${c.id}">
            <span class="acordeon-titulo">${esc(c.nombre)}</span>
            <span class="acordeon-meta">${esc(cantidad)}</span>
            <span class="acordeon-mas" aria-hidden="true">+</span>
          </button>
        </h3>
        <div class="acordeon-panel" id="panel-${c.id}">
          <div><div class="acordeon-cuerpo">${cuerpo}</div></div>
        </div>
      </div>`;
  }).join("");

  $("#acordeonHorarios").addEventListener("click", (e) => {
    const btn = e.target.closest(".acordeon-btn");
    if (!btn) return;
    const item = btn.closest("[data-acordeon]");
    const abierto = item.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(abierto));
  });

  /* Modal de detalles */

  const modal = $("#modal");
  const modalScroll = $("#modalScroll");
  let ultimoFoco = null;

  function filasDetalle(c) {
    const filas = [];

    if (c.planes) {
      filas.push([
        "Planes",
        '<div class="modal-planes">' +
          c.planes
            .map(
              (p) =>
                '<div class="modal-plan"><strong>' + esc(p.duracion) + " · " + esc(p.costo) +
                "</strong><span>" + esc(p.frecuencia) + "</span></div>"
            )
            .join("") +
          "</div>"
      ]);
    } else {
      filas.push(["Duración", esc(c.duracion)]);
      filas.push(["Frecuencia", esc(c.frecuencia)]);
    }

    if (c.incluye) filas.push(["Materiales", esc(c.incluye)]);

    if (c.horarios) {
      filas.push([
        "Horarios",
        "<ul>" + c.horarios.map((h) => "<li>" + esc(h) + "</li>").join("") + "</ul>"
      ]);
    } else if (c.horarioNota) {
      filas.push(["Horarios", esc(c.horarioNota)]);
    }

    if (c.contenido) {
      filas.push([
        "Contenido",
        "<ul>" + c.contenido.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul>"
      ]);
    }

    return filas
      .map((f) => '<div class="modal-fila"><dt>' + f[0] + "</dt><dd>" + f[1] + "</dd></div>")
      .join("");
  }

  function abrirModal(index) {
    const c = CURSOS[index];
    ultimoFoco = document.activeElement;

    modalScroll.innerHTML = `
      <div class="modal-hero">
        <button class="modal-hero-img" type="button" data-abrir-visor="${index}" data-slide="0" aria-label="Ampliar imagen">
          <img src="${c.galeria[0].src}" alt="${esc(c.galeria[0].titulo)}">
        </button>
        ${c.galeria.length > 1
          ? '<div class="modal-thumbs">' +
            c.galeria
              .map(
                (g, gi) =>
                  `<button class="modal-thumb${gi === 0 ? " is-active" : ""}" type="button" data-thumb="${gi}" aria-label="${esc(g.titulo)}"><img src="${g.src}" alt="${esc(g.titulo)}" loading="lazy"></button>`
              )
              .join("") +
            "</div>"
          : ""}
      </div>
      <div class="modal-body">
        <p class="modal-tag">${esc(catNombre(c.categoria))}</p>
        <h2 class="modal-titulo" id="modalTitulo">${esc(c.nombre)}</h2>
        <p class="modal-precio"><strong>${esc(c.costo)}</strong>${c.costoNota ? "<span>" + esc(c.costoNota) + "</span>" : ""}</p>
        <dl class="modal-lista">${filasDetalle(c)}</dl>
        <div class="modal-acciones">
          <a class="btn btn-wa" href="${cursoWa(c)}" target="_blank" rel="noopener">${ICONOS.wa} Consultar por WhatsApp</a>
          <button class="btn btn-outline" type="button" data-abrir-visor="${index}" data-slide="0">Ver imágenes en grande</button>
        </div>
      </div>`;

    modal.hidden = false;
    document.body.classList.add("no-scroll");
    requestAnimationFrame(() => modal.classList.add("is-open"));
    $(".modal-close").focus();
  }

  function cerrarModal() {
    modal.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
    setTimeout(() => {
      modal.hidden = true;
      modalScroll.innerHTML = "";
      if (ultimoFoco) ultimoFoco.focus();
    }, 260);
  }

  document.addEventListener("click", (e) => {
    const detalle = e.target.closest("[data-detalle]");
    if (detalle) {
      abrirModal(Number(detalle.dataset.detalle));
      return;
    }
    if (e.target.closest("[data-close-modal]")) cerrarModal();
  });

  modalScroll.addEventListener("click", (e) => {
    const thumb = e.target.closest("[data-thumb]");
    if (!thumb) return;
    const i = Number(thumb.dataset.thumb);
    const hero = $(".modal-hero-img", modalScroll);
    const cursoIndex = Number(hero.dataset.abrirVisor);
    const g = CURSOS[cursoIndex].galeria[i];
    $("img", hero).src = g.src;
    $("img", hero).alt = g.titulo;
    hero.dataset.slide = String(i);
    $$(".modal-thumb", modalScroll).forEach((t) =>
      t.classList.toggle("is-active", t === thumb)
    );
  });

  /* Visor de imágenes */

  const visor = $("#visor");
  const visorStage = $("#visorStage");
  const visorImg = $("#visorImg");
  const visorCaption = $("#visorCaption");
  const btnPrev = $(".visor-prev");
  const btnNext = $(".visor-next");

  let galeriaActual = [];
  let slideActual = 0;
  let escala = 1;
  let offX = 0;
  let offY = 0;
  const punteros = new Map();
  let pinchInicial = 0;
  let escalaInicial = 1;
  let arrastreDesde = null;
  let focoPrevio = null;

  function aplicarTransform() {
    visorImg.style.transform =
      "translate(" + offX + "px," + offY + "px) scale(" + escala + ")";
    $('[data-zoom="reset"]', visor).textContent = Math.round(escala * 100) + "%";
    visorStage.style.cursor = escala > 1 ? "grab" : "default";
  }

  function resetZoom() {
    escala = 1;
    offX = 0;
    offY = 0;
    aplicarTransform();
  }

  function setZoom(nuevo) {
    escala = Math.min(5, Math.max(1, nuevo));
    if (escala === 1) { offX = 0; offY = 0; }
    aplicarTransform();
  }

  function mostrarSlide(i) {
    slideActual = (i + galeriaActual.length) % galeriaActual.length;
    const g = galeriaActual[slideActual];
    visorImg.src = g.src;
    visorImg.alt = g.titulo;
    visorCaption.textContent = g.titulo;
    resetZoom();
    const solo = galeriaActual.length < 2;
    btnPrev.hidden = solo;
    btnNext.hidden = solo;
  }

  function abrirVisor(galeria, indice) {
    galeriaActual = galeria;
    focoPrevio = document.activeElement;
    visor.hidden = false;
    document.body.classList.add("no-scroll");
    requestAnimationFrame(() => visor.classList.add("is-open"));
    mostrarSlide(indice || 0);
    $(".visor-close").focus();
  }

  function cerrarVisor() {
    visor.classList.remove("is-open");
    setTimeout(() => {
      visor.hidden = true;
      visorImg.removeAttribute("src");
      if (!modal.hidden) {
        $(".modal-close").focus();
      } else {
        document.body.classList.remove("no-scroll");
        if (focoPrevio) focoPrevio.focus();
      }
    }, 240);
  }

  document.addEventListener("click", (e) => {
    const disparador = e.target.closest("[data-abrir-visor]");
    if (disparador) {
      const c = CURSOS[Number(disparador.dataset.abrirVisor)];
      abrirVisor(c.galeria, Number(disparador.dataset.slide || 0));
      return;
    }
    const suelta = e.target.closest("[data-img]");
    if (suelta) {
      abrirVisor([{ src: suelta.dataset.img, titulo: suelta.dataset.imgTitle || "" }], 0);
    }
  });

  $(".visor-close").addEventListener("click", cerrarVisor);
  btnPrev.addEventListener("click", () => mostrarSlide(slideActual - 1));
  btnNext.addEventListener("click", () => mostrarSlide(slideActual + 1));

  $(".visor-tools").addEventListener("click", (e) => {
    const b = e.target.closest("[data-zoom]");
    if (!b) return;
    if (b.dataset.zoom === "in") setZoom(escala + 0.5);
    else if (b.dataset.zoom === "out") setZoom(escala - 0.5);
    else resetZoom();
  });

  visorStage.addEventListener("wheel", (e) => {
    e.preventDefault();
    setZoom(escala + (e.deltaY < 0 ? 0.25 : -0.25));
  }, { passive: false });

  visorStage.addEventListener("dblclick", () => {
    setZoom(escala > 1 ? 1 : 2.5);
  });

  visorStage.addEventListener("pointerdown", (e) => {
    visorStage.setPointerCapture(e.pointerId);
    punteros.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (punteros.size === 2) {
      const p = Array.from(punteros.values());
      pinchInicial = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
      escalaInicial = escala;
      arrastreDesde = null;
    } else if (escala > 1) {
      arrastreDesde = { x: e.clientX - offX, y: e.clientY - offY };
      visorStage.classList.add("is-panning");
    }
  });

  visorStage.addEventListener("pointermove", (e) => {
    if (!punteros.has(e.pointerId)) return;
    punteros.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (punteros.size === 2 && pinchInicial > 0) {
      const p = Array.from(punteros.values());
      const dist = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
      visorImg.style.transition = "none";
      setZoom(escalaInicial * (dist / pinchInicial));
      return;
    }

    if (arrastreDesde && escala > 1) {
      visorImg.style.transition = "none";
      offX = e.clientX - arrastreDesde.x;
      offY = e.clientY - arrastreDesde.y;
      aplicarTransform();
    }
  });

  function finPuntero(e) {
    punteros.delete(e.pointerId);
    if (punteros.size < 2) pinchInicial = 0;
    if (punteros.size === 0) {
      arrastreDesde = null;
      visorStage.classList.remove("is-panning");
      visorImg.style.transition = "";
    }
  }
  visorStage.addEventListener("pointerup", finPuntero);
  visorStage.addEventListener("pointercancel", finPuntero);

  let swipeDesde = null;
  visorStage.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1 && escala === 1) {
      swipeDesde = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    } else {
      swipeDesde = null;
    }
  }, { passive: true });

  visorStage.addEventListener("touchend", (e) => {
    if (!swipeDesde || galeriaActual.length < 2) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - swipeDesde.x;
    const dy = t.clientY - swipeDesde.y;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
      mostrarSlide(slideActual + (dx < 0 ? 1 : -1));
    }
    swipeDesde = null;
  }, { passive: true });

  document.addEventListener("keydown", (e) => {
    if (!visor.hidden) {
      if (e.key === "Escape") cerrarVisor();
      else if (e.key === "ArrowLeft" && galeriaActual.length > 1) mostrarSlide(slideActual - 1);
      else if (e.key === "ArrowRight" && galeriaActual.length > 1) mostrarSlide(slideActual + 1);
      else if (e.key === "+" || e.key === "=") setZoom(escala + 0.5);
      else if (e.key === "-") setZoom(escala - 0.5);
      else if (e.key === "0") resetZoom();
      return;
    }
    if (!modal.hidden && e.key === "Escape") cerrarModal();
    if (e.key === "Escape" && menuAbierto) cerrarMenu();
  });

  /* Copiar */

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  document.body.appendChild(toast);
  let toastTimer = null;

  function mostrarToast(texto) {
    toast.textContent = texto;
    toast.classList.add("is-open");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-open"), 2200);
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-copiar]");
    if (!btn) return;
    const valor = btn.dataset.copiar;
    const ok = () => mostrarToast("Copiado: " + valor);
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(valor).then(ok).catch(() => mostrarToast(valor));
    } else {
      const ta = document.createElement("textarea");
      ta.value = valor;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); ok(); } catch (err) { mostrarToast(valor); }
      document.body.removeChild(ta);
    }
  });

  /* Menú y header */

  const header = $("#siteHeader");
  const burger = $("#burger");
  const navMobile = $("#navMobile");
  const navBackdrop = $("#navBackdrop");
  let menuAbierto = false;

  function abrirMenu() {
    menuAbierto = true;
    navMobile.hidden = false;
    navBackdrop.hidden = false;
    requestAnimationFrame(() => {
      navMobile.classList.add("is-open");
      navBackdrop.classList.add("is-open");
    });
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", "Cerrar menú");
    document.body.classList.add("no-scroll");
  }

  function cerrarMenu() {
    menuAbierto = false;
    navMobile.classList.remove("is-open");
    navBackdrop.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Abrir menú");
    document.body.classList.remove("no-scroll");
    setTimeout(() => {
      if (!menuAbierto) {
        navMobile.hidden = true;
        navBackdrop.hidden = true;
      }
    }, 240);
  }

  burger.addEventListener("click", () => (menuAbierto ? cerrarMenu() : abrirMenu()));
  navBackdrop.addEventListener("click", cerrarMenu);
  navMobile.addEventListener("click", (e) => {
    if (e.target.closest("a")) cerrarMenu();
  });

  const secciones = ["inicio", "academia", "cursos", "horarios", "reservas", "pagos", "contacto"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const enlacesNav = $$(".nav-desktop a");

  function actualizarHeader() {
    header.classList.toggle("is-solid", window.scrollY > 40);

    const y = window.scrollY + window.innerHeight * 0.3;
    let activa = secciones[0];
    secciones.forEach((s) => {
      if (s.offsetTop <= y) activa = s;
    });
    enlacesNav.forEach((a) =>
      a.classList.toggle("is-active", a.getAttribute("href") === "#" + activa.id)
    );
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      actualizarHeader();
      ticking = false;
    });
  }, { passive: true });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900 && menuAbierto) cerrarMenu();
  });

  actualizarHeader();
})();
