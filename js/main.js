/* ============================================================
   SERVAR FÚTBOL CLUB — LÓGICA DE LA PÁGINA
   No es necesario editar este archivo para actualizar
   contenido. Consulta js/datos.js para eso.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  renderJugadores();
  renderCalendario();
  renderVenue();
  renderResultado();
  renderEquipacion();
});

/* ------------------------------------------------------------
   HEADER — fondo sólido al hacer scroll
   ------------------------------------------------------------ */
function initHeader() {
  const header = document.getElementById('header');
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 30);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ------------------------------------------------------------
   MENÚ MÓVIL
   ------------------------------------------------------------ */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  const backdrop = document.getElementById('navBackdrop');

  const closeMenu = () => {
    nav.classList.remove('is-open');
    toggle.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    nav.classList.add('is-open');
    toggle.classList.add('is-open');
    backdrop.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  };

  toggle.addEventListener('click', () => {
    nav.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  backdrop.addEventListener('click', closeMenu);

  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ------------------------------------------------------------
   CARRUSEL — helper genérico de flechas
   ------------------------------------------------------------ */
function wireCarouselArrows(track, prevBtn, nextBtn) {
  const scrollByCard = (direction) => {
    const card = track.firstElementChild;
    if (!card) return;
    const gap = 22;
    const distance = (card.getBoundingClientRect().width + gap) * direction;
    track.scrollBy({ left: distance, behavior: 'smooth' });
  };

  prevBtn.addEventListener('click', () => scrollByCard(-1));
  nextBtn.addEventListener('click', () => scrollByCard(1));

  const updateArrowState = () => {
    const maxScroll = track.scrollWidth - track.clientWidth - 4;
    prevBtn.disabled = track.scrollLeft <= 4;
    nextBtn.disabled = track.scrollLeft >= maxScroll;
  };

  track.addEventListener('scroll', updateArrowState, { passive: true });
  window.addEventListener('resize', updateArrowState);
  updateArrowState();

  return updateArrowState;
}

/* ------------------------------------------------------------
   1. PLANTILLA DE JUGADORES — carrusel con flip 3D
   ------------------------------------------------------------ */
function renderJugadores() {
  const track = document.getElementById('jugadoresTrack');
  if (!track || typeof jugadores === 'undefined') return;

  jugadores.forEach(jugador => {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Ver ficha de ${jugador.nombre}`);

    const badgeHTML = jugador.estado
      ? `<span class="player-card__badge">${jugador.estado}</span>`
      : '';

    card.innerHTML = `
      <div class="player-card__inner">
        <div class="player-card__face player-card__front">
          <div class="player-card__photo-wrap">
            <img class="player-card__photo" src="${jugador.foto}" alt="Foto de ${jugador.nombre}" loading="lazy"
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22260%22 height=%22280%22%3E%3Crect width=%22260%22 height=%22280%22 fill=%22%231D3A78%22/%3E%3C/svg%3E'">
            ${badgeHTML}
            <img class="player-card__crest" src="img/logo/escudo.png" alt="">
            <span class="player-card__number">${jugador.dorsal}</span>
            <span class="player-card__hint" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 12a8 8 0 0 1 13.66-5.66M20 12a8 8 0 0 1-13.66 5.66" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M17 3v4h-4M7 21v-4h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
          <div class="player-card__info">
            <div class="player-card__name">${jugador.nombre}</div>
            <div class="player-card__meta">
              <span>${jugador.posicion}</span>
              <span>#${jugador.dorsal}</span>
            </div>
          </div>
        </div>
        <div class="player-card__face player-card__back">
          <div class="player-card__back-name">${jugador.nombre}</div>
          <div class="player-card__stat"><span>Posición</span><span>${jugador.posicion}</span></div>
          <div class="player-card__stat"><span>Altura</span><span>${jugador.altura}</span></div>
          <div class="player-card__stat"><span>Pierna hábil</span><span>${jugador.piernaHabil}</span></div>
          <div class="player-card__stat"><span>Edad</span><span>${calcularEdad(jugador.fechaNacimiento)} años</span></div>
          <div class="player-card__stat"><span>Nacionalidad</span><span>${jugador.nacionalidad}</span></div>
          <div class="player-card__back-hint">Toca de nuevo para volver</div>
        </div>
      </div>
    `;

    const flip = () => card.classList.toggle('is-flipped');
    card.addEventListener('click', flip);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); }
    });

    track.appendChild(card);
  });

  wireCarouselArrows(
    track,
    document.getElementById('jugadoresPrev'),
    document.getElementById('jugadoresNext')
  );
}

function calcularEdad(fechaNacimientoISO) {
  const [anio, mes, dia] = fechaNacimientoISO.split('-');
  const nacimiento = new Date(anio, mes - 1, dia);
  const hoy = new Date();

  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const noCumpliaAun =
    hoy.getMonth() < nacimiento.getMonth() ||
    (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() < nacimiento.getDate());
  if (noCumpliaAun) edad--;

  return edad;
}

/* ------------------------------------------------------------
   2. CALENDARIO — carrusel auto-posicionado en el próximo partido
   ------------------------------------------------------------ */
function renderCalendario() {
  const track = document.getElementById('partidosTrack');
  if (!track || typeof calendario === 'undefined') return;

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const partidosOrdenados = [...calendario].sort(
    (a, b) => new Date(a.fecha) - new Date(b.fecha)
  );

  // Encuentra el índice del próximo partido (fecha >= hoy)
  let indiceProximo = partidosOrdenados.findIndex(p => new Date(p.fecha) >= hoy);
  if (indiceProximo === -1) indiceProximo = partidosOrdenados.length - 1; // temporada terminada: muestra el último

  partidosOrdenados.forEach((partido, i) => {
    const jugado = partido.resultado !== null && partido.resultado !== undefined;
    const esProximo = i === indiceProximo;

    const card = document.createElement('div');
    card.className = 'match-card' + (jugado ? ' is-played' : '') + (esProximo ? ' is-next' : '');
    if (esProximo) card.id = 'partidoProximo';

    const fechaLegible = formatearFecha(partido.fecha);
    const tag = jugado ? 'Jugado' : (esProximo ? 'Próximo partido' : 'Programado');

    const enlaceCampo = (partido.lugar === 'Local' && typeof campoLocal !== 'undefined')
      ? `<a class="match-card__venue" href="${campoLocal.mapsUrl}" target="_blank" rel="noopener">
           <svg viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="9.5" r="2.3" stroke="currentColor" stroke-width="1.8"/></svg>
           Cómo llegar
         </a>`
      : '';

    card.innerHTML = `
      <span class="match-card__tag">${tag}</span>
      <div class="match-card__date">${fechaLegible}${partido.hora ? ' · ' + partido.hora : ''}</div>
      <div class="match-card__rival">${partido.rival}</div>
      <div class="match-card__lugar">${partido.lugar === 'Local' ? '🏟️ Local' : '✈️ Visitante'}</div>
      ${jugado ? `<div class="match-card__result">${partido.resultado}</div>` : ''}
      ${enlaceCampo}
    `;

    track.appendChild(card);
  });

  const updateArrowState = wireCarouselArrows(
    track,
    document.getElementById('partidosPrev'),
    document.getElementById('partidosNext')
  );

  // Posiciona el scroll en el próximo partido al cargar
  requestAnimationFrame(() => {
    const proximo = document.getElementById('partidoProximo');
    if (proximo) {
      const offset = proximo.offsetLeft - 12;
      track.scrollLeft = offset;
    }
    updateArrowState();
  });
}

function formatearFecha(fechaISO) {
  const [anio, mes, dia] = fechaISO.split('-');
  const fecha = new Date(anio, mes - 1, dia);
  const opciones = { weekday: 'short', day: 'numeric', month: 'short' };
  const texto = fecha.toLocaleDateString('es-ES', opciones);
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

/* ------------------------------------------------------------
   NUESTRO CAMPO — tarjeta con enlace a Google Maps
   ------------------------------------------------------------ */
function renderVenue() {
  const contenedor = document.getElementById('venueCard');
  if (!contenedor || typeof campoLocal === 'undefined') return;

  contenedor.innerHTML = `
    <div class="venue__card">
      <div class="venue__info">
        <span class="venue__icon">
          <svg viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="9.5" r="2.3" stroke="currentColor" stroke-width="1.8"/></svg>
        </span>
        <div>
          <div class="venue__label">Jugamos de local en</div>
          <div class="venue__name">${campoLocal.nombre}</div>
          <div class="venue__address">${campoLocal.direccion}</div>
        </div>
      </div>
      <a class="venue__btn" href="${campoLocal.mapsUrl}" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Cómo llegar
      </a>
    </div>
  `;
}

/* ------------------------------------------------------------
   3. ÚLTIMO RESULTADO — calculado automáticamente del calendario
   ------------------------------------------------------------ */
function renderResultado() {
  const contenedor = document.getElementById('resultadoDestacado');
  if (!contenedor || typeof calendario === 'undefined') return;

  const jugados = calendario
    .filter(p => p.resultado !== null && p.resultado !== undefined && p.resultado !== '')
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

  if (jugados.length === 0) {
    contenedor.innerHTML = `<p class="resultado__empty">Aún no hay resultados disponibles. El primer partido se mostrará aquí en cuanto se juegue.</p>`;
    return;
  }

  const ultimo = jugados[0];
  const [golesLocal, golesVisitante] = ultimo.resultado.split('-').map(s => s.trim());
  const equipoLocal = ultimo.lugar === 'Local' ? 'Servar FC' : ultimo.rival;
  const equipoVisitante = ultimo.lugar === 'Local' ? ultimo.rival : 'Servar FC';

  contenedor.innerHTML = `
    <div class="resultado__card">
      <div class="resultado__date">${formatearFecha(ultimo.fecha)}</div>
      <div class="resultado__teams">
        <div class="resultado__team">${equipoLocal}</div>
        <div class="resultado__score">${golesLocal} - ${golesVisitante}</div>
        <div class="resultado__team">${equipoVisitante}</div>
      </div>
      <div class="resultado__lugar">${ultimo.lugar === 'Local' ? 'Partido jugado en casa' : 'Partido jugado como visitante'}</div>
    </div>
  `;
}

/* ------------------------------------------------------------
   4. EQUIPACIÓN
   ------------------------------------------------------------ */
function renderEquipacion() {
  const contenedor = document.getElementById('kitsContainer');
  if (!contenedor || typeof equipacion === 'undefined') return;

  const kits = [equipacion.principal, equipacion.alternativa];

  contenedor.innerHTML = kits.map(kit => `
    <div class="kit-card">
      <div class="kit-card__img-wrap">
        <img class="kit-card__img" src="${kit.imagen}" alt="${kit.titulo}" loading="lazy"
             onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22500%22%3E%3Crect width=%22400%22 height=%22500%22 fill=%22%2312285C%22/%3E%3C/svg%3E'">
      </div>
      <div class="kit-card__label">
        <div class="kit-card__title">${kit.titulo}</div>
        <div class="kit-card__season">${kit.temporada}</div>
      </div>
    </div>
  `).join('');
}
