/* ============================================================
   SERVAR FÚTBOL CLUB — ARCHIVO DE DATOS
   ============================================================

   ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR.
   No toques ningún otro archivo (.html, .css, otros .js)
   para actualizar jugadores, calendario o equipación.

   ÍNDICE RÁPIDO (busca estos títulos con Cmd/Ctrl + F):
   1. PLANTILLA DE JUGADORES
   2. CALENDARIO DE PARTIDOS
   3. NUESTRO CAMPO
   4. EQUIPACIÓN

   -------------------------------------------------------------
   GUÍA RÁPIDA — LAS 3 COSAS QUE MÁS VAS A HACER
   -------------------------------------------------------------

   A) ACTUALIZAR EL RESULTADO DE UN PARTIDO YA JUGADO
      Ve a "2. CALENDARIO DE PARTIDOS", busca el partido por su
      fecha o rival, y cambia:
          resultado: null
      por (ejemplo, si ganamos 2 a 1):
          resultado: "2 - 1"
      Eso es todo. La página automáticamente:
        - Muestra ese resultado en la sección "Último resultado"
          (si es el partido jugado más reciente).
        - Marca ese partido como jugado dentro del calendario.
        - Avanza el calendario al siguiente partido pendiente.

   B) AÑADIR O EDITAR UN JUGADOR
      Ve a "1. PLANTILLA DE JUGADORES" y copia un bloque
      { ... } completo (incluyendo las llaves { }), pégalo
      antes del corchete final "]", y cambia los datos.
      No olvides poner una coma "," después de cada bloque
      excepto (opcionalmente) el último.

   C) AÑADIR LA FOTO DE UN JUGADOR
      1. Guarda la foto dentro de la carpeta: img/jugadores/
      2. Nómbrala así:  dorsal-nombre-apellido.jpg
         Ejemplos: 10-juan-perez.jpg   |   7-carlos-gomez.jpg
      3. En el dato "foto" del jugador, escribe esa misma ruta:
         foto: "img/jugadores/10-juan-perez.jpg"

   -------------------------------------------------------------
*/


/* ============================================================
   1. PLANTILLA DE JUGADORES
   ============================================================
   Cada jugador es un bloque { ... }. El orden en que los
   escribas aquí es el orden en que aparecen en el carrusel.

   Campos:
     nombre        → Nombre completo del jugador
     dorsal        → Número de camiseta (solo el número, sin comillas)
     posicion      → Ej: "Portero", "Defensa", "Centrocampista", "Delantero"
     piernaHabil   → "Derecha", "Izquierda" o "Ambidiestro"
     altura        → Ej: "1.78m"
     fechaNacimiento → Fecha de nacimiento, formato "AAAA-MM-DD"
                       (ej: "2002-05-15"). La edad se calcula sola.
     nacionalidad  → Ej: "España"
     foto          → Ruta del archivo (ver guía rápida, punto C)
     estado        → "Nuevo fichaje", "Renovación", o "" (vacío = no mostrar etiqueta)
   ============================================================ */

const jugadores = [
  {
    // TÉCNICO — no es jugador, no tiene dorsal. Reemplaza el nombre cuando lo tengas.
    nombre: "Julián Sanclemente",
    dorsal: "DT",
    posicion: "Entrenador",
    piernaHabil: "Izquierda",
    altura: "1.78m",
    fechaNacimiento: "1990-01-01",
    nacionalidad: "Colombiano",
    foto: "img/jugadores/JULIAN-SANCLEMENTE.JPG",
    estado: "D. Técnico"
  },
  {
    nombre: "Juan Bocanegra",
    dorsal: 9,
    posicion: "Delantero",
    piernaHabil: "Izquierda",
    altura: "1.75m",
    fechaNacimiento: "1987-01-27",
    nacionalidad: "Colombiano",
    foto: "img/jugadores/9-Juan-Bocanegra.jpg",
    estado: "Renovación"
  },
  {
    nombre: "Miguel Escobar",
    dorsal: 10,
    posicion: "Medio",
    piernaHabil: "Izquierda",
    altura: "1.67m",
    fechaNacimiento: "1993-07-03",
    nacionalidad: "Colombiano",
    foto: "img/jugadores/10-Miguel-Escobar.jpg",
    estado: "Renovación"
  },
  {
    nombre: "Kevin Escobar",
    dorsal: 19,
    posicion: "Lateral",
    piernaHabil: "Izquierda",
    altura: "1.75m",
    fechaNacimiento: "2001-05-19",
    nacionalidad: "Colombiano",
    foto: "img/jugadores/19-Kevin-Escobar.jpg",
    estado: "Renovación"
  },
  {
    nombre: "José Giménez",
    dorsal: 4,
    posicion: "Central",
    piernaHabil: "Derecha",
    altura: "1.80m",
    fechaNacimiento: "2005-04-18",
    nacionalidad: "Venezolano",
    foto: "img/jugadores/4-Jose-Gimenez.jpg",
    estado: "Renovación"
  },
  {
    nombre: "Julián Idrobo",
    dorsal: 77,
    posicion: "Extremo",
    piernaHabil: "Derecha",
    altura: "1.75m",
    fechaNacimiento: "1993-01-09",
    nacionalidad: "Colombiano",
    foto: "img/jugadores/77-Julian-Idrobo.jpg",
    estado: "Renovación"
  },
  {
    nombre: "Kevin Montoya",
    dorsal: 6,
    posicion: "Lateral",
    piernaHabil: "Izquierda",
    altura: "1.70m",
    fechaNacimiento: "2001-09-05",
    nacionalidad: "Colombiano",
    foto: "img/jugadores/6-Kevin-Montoya.jpg",
    estado: "Renovación"
  },
  {
    nombre: "Yerson Montoya",
    dorsal: 73,
    posicion: "Extremo",
    piernaHabil: "Derecha",
    altura: "1.80m",
    fechaNacimiento: "2004-03-09",
    nacionalidad: "Colombiano",
    foto: "img/jugadores/73-Yerson-Montoya.jpg",
    estado: "Nuevo fichaje"
  },
  {
    nombre: "Fernando Restrepo",
    dorsal: 5,
    posicion: "Central",
    piernaHabil: "PENDIENTE",
    altura: "PENDIENTE",
    fechaNacimiento: "1993-10-31",
    nacionalidad: "PENDIENTE",
    foto: "img/jugadores/5-Fernando-Restrepo.jpg",
    estado: "Renovación"
  },
  {
    // Ojo: hay 2 jugadores con el mismo nombre exacto (Jhon Anderson Valencia Díaz).
    // Este es el de dorsal 12, emparejado con la fecha 2006 por su edad (20) en el Excel.
    nombre: "Jhon Valencia",
    dorsal: 12,
    posicion: "Volante",
    piernaHabil: "Derecha",
    altura: "1.77m",
    fechaNacimiento: "2006-05-15",
    nacionalidad: "Colombiano",
    foto: "img/jugadores/12-Jhon-Valencia.jpg",
    estado: "Renovación"
  },
  {
    // El segundo "Jhon Anderson Valencia Díaz" (dorsal 16), fecha 1993 por descarte.
    nombre: "Anderson Valencia",
    dorsal: 16,
    posicion: "Medio defensivo",
    piernaHabil: "PENDIENTE",
    altura: "PENDIENTE",
    fechaNacimiento: "1993-07-12",
    nacionalidad: "PENDIENTE",
    foto: "img/jugadores/16-Anderson-Valencia.jpg",
    estado: "Renovación"
  },
  {
    nombre: "Brayan Valencia",
    dorsal: 1,
    posicion: "Portero",
    piernaHabil: "Izquierda",
    altura: "1.79m",
    fechaNacimiento: "1990-11-05",
    nacionalidad: "Colombiano",
    foto: "img/jugadores/1-Brayan-Valencia.jpg",
    estado: "Renovación"
  },
  {
    nombre: "Alejandro Reinoso",
    dorsal: 8,
    posicion: "Volante",
    piernaHabil: "Derecha",
    altura: "1.80m",
    fechaNacimiento: "2003-04-28",
    nacionalidad: "Colombiano",
    foto: "img/jugadores/8-Alejandro-Reinoso.jpg",
    estado: "Nuevo Fichaje"
  },
  {
    nombre: "Bryan Loachamin",
    dorsal: 3,
    posicion: "Central",
    piernaHabil: "Derecha",
    altura: "1.82m",
    fechaNacimiento: "1997-07-29",
    nacionalidad: "Ecuatoriano",
    foto: "img/jugadores/3-Bryan-Loachamin.jpg",
    estado: "Nuevo fichaje"
  },
  {
    nombre: "Diego García",
    dorsal: 99,
    posicion: "Portero",
    piernaHabil: "Izquierda",
    altura: "1.72m",
    fechaNacimiento: "1988-02-02",
    nacionalidad: "Colombiano",
    foto: "img/jugadores/99-Diego-Garcia.jpg",
    estado: "Nuevo fichaje"
  },
  {
    nombre: "Federico Meñe",
    dorsal: 7,
    posicion: "Delantero",
    piernaHabil: "PENDIENTE",
    altura: "PENDIENTE",
    fechaNacimiento: "1990-08-15",
    nacionalidad: "PENDIENTE",
    foto: "img/jugadores/7-Federico-Mene.jpg",
    estado: "Renovación"
  },
  {
    nombre: "Manuel Marenco",
    dorsal: 20,
    posicion: "Extremo",
    piernaHabil: "Derecha",
    altura: "1.82m",
    fechaNacimiento: "1999-01-29",
    nacionalidad: "Colombiano",
    foto: "img/jugadores/20-Manuel-Marenco.jpg",
    estado: "Nuevo fichaje"
  },
  {
    nombre: "Moisés Peláez",
    dorsal: 15,
    posicion: "Extremo",
    piernaHabil: "Derecha",
    altura: "1.72m",
    fechaNacimiento: "2001-07-06",
    nacionalidad: "Español",
    foto: "img/jugadores/15-Moises-Pelaez.jpg",
    estado: "Nuevo fichaje"
  },
  {
    nombre: "Santiago Londoño",
    dorsal: 29,
    posicion: "Volante central",
    piernaHabil: "Izquierda",
    altura: "1.80m",
    fechaNacimiento: "1992-02-19",
    nacionalidad: "Colombiano",
    foto: "img/jugadores/29-Santiago-Londono.jpg",
    estado: "Renovación"
  },
  {
    nombre: "Brian Lozada",
    dorsal: 14,
    posicion: "Central / Lateral",
    piernaHabil: "Derecha",
    altura: "1.77m",
    fechaNacimiento: "2006-08-21",
    nacionalidad: "Colombiano",
    foto: "img/jugadores/14-Brian-Lozada.jpg",
    estado: "Nuevo fichaje"
  },
  {
    nombre: "Keller Zambrano",
    dorsal: 11,
    posicion: "Volante",
    piernaHabil: "PENDIENTE",
    altura: "PENDIENTE",
    fechaNacimiento: "2007-02-02",
    nacionalidad: "PENDIENTE",
    foto: "img/jugadores/11-Keller-Zambrano.jpg",
    estado: "Nuevo fichaje"
  },
  {
    nombre: "Leonardo Cundumi",
    dorsal: 17,
    posicion: "Delantero",
    piernaHabil: "Derecha",
    altura: "1.73m",
    fechaNacimiento: "2000-01-10",
    nacionalidad: "Colombiano",
    foto: "img/jugadores/17-Leonardo-Cundumi.jpg",
    estado: "Nuevo fichaje"
  },
  {
    // Nombre sin confirmar del todo (ver nota aparte). Sin fecha de nacimiento real
    // (no aparece en el PDF de la Federación) — fecha placeholder, hay que corregirla.
    nombre: "Cheikh Ladijane",
    dorsal: 13,
    posicion: "Volante",
    piernaHabil: "Derecha",
    altura: "1.75m",
    fechaNacimiento: "2004-01-01",
    nacionalidad: "Senegalés",
    foto: "img/jugadores/13-Cheikh-Ladijane.jpg",
    estado: "Nuevo fichaje"
  }
];


/* ============================================================
   2. CALENDARIO DE PARTIDOS
   ============================================================
   Escribe TODOS los partidos de la temporada, en cualquier
   orden (la página los ordena sola por fecha).

   Campos:
     fecha      → Formato exacto: "AAAA-MM-DD"  (ej: "2026-09-27")
     hora       → Formato: "HH:MM" en 24 horas (ej: "18:00").
                  Déjalo en "" (vacío) hasta que se confirme.
     rival      → Nombre del equipo contrario
     lugar      → "Local" o "Visitante"
     resultado  → null (si no se ha jugado) o "2 - 1" (si ya se jugó,
                  el primer número es siempre SERVAR)

   IMPORTANTE: no elimines partidos ya jugados. Se quedan
   guardados en el historial del carrusel (el usuario puede
   verlos retrocediendo con la flecha izquierda).

   -------------------------------------------------------------
   ORIGEN DE ESTOS DATOS: Calendario oficial de la Real Federación
   Aragonesa de Fútbol — 3ª Regional, Grupo 2, Temporada 2026/2027.
   26 jornadas (13 rivales, ida y vuelta).

   ⏰ SOBRE LA HORA: la Federación NO fija un horario común: cada
   equipo LOCAL marca su propio horario semana a semana a través
   de la intranet federativa (sábados entre 15:00-19:30h o domingos
   entre 8:30-19:30h), y debe quedar confirmado antes del martes
   previo al partido. Por eso el campo "hora" está vacío en todos
   los partidos — ve completándolo cada semana en cuanto el equipo
   local (que puede ser el tuyo o el rival) confirme el horario.
   Si "hora" queda vacío, la página simplemente no lo muestra
   (no da ningún error).
   ============================================================ */

const calendario = [
  { fecha: "2026-09-20", hora: "", rival: "Aktimel R.C.F.",              lugar: "Local",     resultado: null }, // Jornada 1
  { fecha: "2026-09-27", hora: "", rival: "Valdecanal C.D.",             lugar: "Visitante", resultado: null }, // Jornada 2
  { fecha: "2026-10-04", hora: "", rival: "Atlético Aragón 2025",        lugar: "Local",     resultado: null }, // Jornada 3
  { fecha: "2026-10-18", hora: "", rival: "Once Amigos F.C.A.",          lugar: "Visitante", resultado: null }, // Jornada 4
  { fecha: "2026-10-25", hora: "", rival: "Submarino C.F.",              lugar: "Local",     resultado: null }, // Jornada 5
  { fecha: "2026-11-01", hora: "", rival: "Fleta C.D. \"C\"",            lugar: "Visitante", resultado: null }, // Jornada 6
  { fecha: "2026-11-08", hora: "", rival: "Peña Atlética La Muela Club", lugar: "Local",     resultado: null }, // Jornada 7
  { fecha: "2026-11-15", hora: "", rival: "Paulinos Futbol Club \"C\"",  lugar: "Visitante", resultado: null }, // Jornada 8
  { fecha: "2026-11-22", hora: "", rival: "Real Peñón C.D.",             lugar: "Local",     resultado: null }, // Jornada 9
  { fecha: "2026-11-29", hora: "", rival: "Inter-Z F.C. \"I\"",          lugar: "Visitante", resultado: null }, // Jornada 10
  { fecha: "2026-12-13", hora: "", rival: "Atlético Quarte",             lugar: "Local",     resultado: null }, // Jornada 11
  { fecha: "2026-12-20", hora: "", rival: "Pina C.D.",                   lugar: "Visitante", resultado: null }, // Jornada 12
  { fecha: "2027-01-10", hora: "", rival: "Los Molinos U.D. \"A\"",      lugar: "Local",     resultado: null }, // Jornada 13
  { fecha: "2027-01-17", hora: "", rival: "Aktimel R.C.F.",              lugar: "Visitante", resultado: null }, // Jornada 14
  { fecha: "2027-01-24", hora: "", rival: "Valdecanal C.D.",             lugar: "Local",     resultado: null }, // Jornada 15
  { fecha: "2027-02-07", hora: "", rival: "Atlético Aragón 2025",        lugar: "Visitante", resultado: null }, // Jornada 16
  { fecha: "2027-02-14", hora: "", rival: "Once Amigos F.C.A.",          lugar: "Local",     resultado: null }, // Jornada 17
  { fecha: "2027-02-21", hora: "", rival: "Submarino C.F.",              lugar: "Visitante", resultado: null }, // Jornada 18
  { fecha: "2027-02-28", hora: "", rival: "Fleta C.D. \"C\"",            lugar: "Local",     resultado: null }, // Jornada 19
  { fecha: "2027-03-14", hora: "", rival: "Peña Atlética La Muela Club", lugar: "Visitante", resultado: null }, // Jornada 20
  { fecha: "2027-03-21", hora: "", rival: "Paulinos Futbol Club \"C\"",  lugar: "Local",     resultado: null }, // Jornada 21
  { fecha: "2027-04-04", hora: "", rival: "Real Peñón C.D.",             lugar: "Visitante", resultado: null }, // Jornada 22
  { fecha: "2027-04-11", hora: "", rival: "Inter-Z F.C. \"I\"",          lugar: "Local",     resultado: null }, // Jornada 23
  { fecha: "2027-04-18", hora: "", rival: "Atlético Quarte",             lugar: "Visitante", resultado: null }, // Jornada 24
  { fecha: "2027-05-02", hora: "", rival: "Pina C.D.",                   lugar: "Local",     resultado: null }, // Jornada 25
  { fecha: "2027-05-09", hora: "", rival: "Los Molinos U.D. \"A\"",      lugar: "Visitante", resultado: null }  // Jornada 26
];


/* ============================================================
   3. NUESTRO CAMPO (donde jugamos de Local)
   ============================================================
   Se muestra: (a) en una tarjeta debajo del calendario, y
   (b) como enlace "📍 Cómo llegar" en cada partido de Local.

   Campos:
     nombre    → Nombre del campo/instalación
     direccion → Texto corto de ubicación (ciudad/zona)
     mapsUrl   → Enlace de Google Maps. Para conseguirlo: abre
                 Google Maps → busca el sitio → botón "Compartir"
                 → "Copiar enlace", y pégalo aquí.

   No incluimos el campo de cada rival porque la Federación no lo
   fija en el calendario (cada club lo gestiona por su cuenta y
   puede cambiar), así que tocaría preguntar y actualizar cada
   semana. Si en algún momento quieres añadirlo partido a partido,
   dímelo y lo agregamos como un campo opcional más en cada partido
   del calendario de arriba.
   ============================================================ */

const campoLocal = {
  nombre: "Campos de la Federación Aragonesa de Fútbol",
  direccion: "Zaragoza — Campus del Actur",
  mapsUrl: "https://maps.app.goo.gl/mL5D5DiM55LQYg5g9?g_st=ic"
};


/* ============================================================
   4. EQUIPACIÓN
   ============================================================
   Solo dos imágenes: principal y alternativa.
   Guarda las fotos en: img/equipacion/
   ============================================================ */

const equipacion = {
  principal: {
    imagen: "img/equipacion/principal.jpg",
    titulo: "Principal"
  },
  alternativa: {
    imagen: "img/equipacion/alternativa.jpg",
    titulo: "Alternativa"
  }
};


/* ============================================================
   FIN DEL ARCHIVO DE DATOS
   No es necesario tocar nada debajo de esta línea.
   ============================================================ */
