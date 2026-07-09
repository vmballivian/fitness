// ===== Fuente única de los entrenos =====
// Edita SOLO este archivo para cambiar entrenos.
// Lo leen: calendario.html (lo que ves al tocar un día) y semana-*.html.
// Índice de día: 0=domingo, 1=lunes ... 5=viernes, 6=sábado.

// ===== SEMANA DE VIAJE Costa Rica (14-20 jul 2026) — TEMPORAL =====
// Solo bandas 10/20/30/40 en hotel, sin fútbol/KB/TRX.
// RESTAURAR la semana normal al volver: git checkout semana-normal-pre-viaje -- week-data.js
const WEEK_VIC = {
  1: {title:'Vuelo de ida ✈️', rest:true, ex:[], note:'Semana de viaje CR. Sale 05:35, día entero de avión Lisboa → São José. Descanso. Camina en la escala, movilidad de cadera y hombros, hidrátate.'},
  2: {title:'Empuje (banda) — viaje', ex:[
      {n:'Press de pecho con banda de pie', s:'banda anclada atrás a la altura del pecho, empuja al frente, banda 30-40 kg', r:'al fallo', v:'standing+band+chest+press'},
      {n:'Press de hombro con banda', s:'pisas la banda, empujas arriba, banda 20-30 kg', r:'al fallo', v:'standing+band+shoulder+press'},
      {n:'Elevaciones laterales con banda', s:'pisas la banda, subes al lado hasta el hombro, deltoides medio, banda 10-20 kg', r:'al fallo', v:'Band+Lateral+Raise'},
      {n:'Flexiones', s:'peso corporal, cierra pecho y tríceps', r:'al fallo', v:'Push-Up'}
    ]},
  3: {title:'Piernas (banda) — viaje', ex:[
      {n:'Sentadilla goblet con banda', s:'pisas la banda, lazo al pecho, baja controlado, banda 30-40 kg', r:'al fallo', v:'goblet+squat+resistance+band'},
      {n:'Zancada búlgara con banda', s:'pie de atrás en la cama, pisas la banda con el de adelante, banda 20-30 kg', r:'al fallo/pierna', v:'bulgarian+split+squat+band'},
      {n:'Peso muerto rumano con banda', s:'pisas la banda, cadera atrás, isquio y glúteo, banda 30-40 kg', r:'al fallo', v:'band+romanian+deadlift'},
      {n:'Abducción de cadera de pie con banda', s:'banda en los tobillos, abres la pierna al lado, glúteo medio, banda 20 kg', r:'al fallo/lado', v:'standing+hip+abduction+band'}
    ]},
  4: {title:'Tracción / espalda (banda) — viaje', ex:[
      {n:'Remo con banda de pie', s:'banda anclada al frente, jalas al abdomen, aprieta omóplatos, banda 30-40 kg', r:'al fallo', v:'standing+resistance+band+row'},
      {n:'Pulldown con banda', s:'banda anclada alta en la puerta, jalas abajo, simula la dominada, banda 30 kg', r:'al fallo', v:'band+lat+pulldown'},
      {n:'Face pull con banda', s:'banda anclada al frente, tira a la cara abriendo codos, banda 20 kg', r:'al fallo', v:'band+face+pull'},
      {n:'Pull-apart con banda', s:'banda al frente con brazos estirados, la abres, espalda alta, banda 10-20 kg', r:'al fallo', v:'band+pull+apart'}
    ]},
  5: {title:'Cadena posterior + core (banda) — viaje', ex:[
      {n:'Peso muerto rumano con banda', s:'pisas la banda, bisagra de cadera, día pesado de isquio/glúteo, banda 40 kg', r:'al fallo', v:'band+romanian+deadlift'},
      {n:'Good morning con banda', s:'banda bajo los pies y sobre los hombros, bisagra con espalda recta, banda 30 kg', r:'al fallo', v:'banded+good+morning'},
      {n:'Pallof press con banda', s:'anclada al lado, empujas al frente sin girar el torso, anti-rotación, banda 20 kg', r:'al fallo/lado', v:'pallof+press+band'},
      {n:'Plancha', s:'peso corporal, abdomen y glúteo apretados', r:'al fallo', v:'Plank+hold'}
    ]},
  6: {title:'Full body metcon (banda) — viaje', ex:[
      {n:'Thruster con banda', s:'pisas la banda, sentadilla + press arriba en un movimiento, banda 20-30 kg', r:'al fallo', v:'band+thruster+squat+to+press'},
      {n:'Remo con banda', s:'tracción, aprieta la espalda, banda 30 kg', r:'al fallo', v:'standing+resistance+band+row'},
      {n:'Flexiones', s:'peso corporal, empuje. Rota los 3 sin parar, RPE 8-9, tipo AMRAP 20 min', r:'al fallo', v:'Push-Up'}
    ]},
  0: {title:'Vuelo de regreso ✈️ / Descanso', rest:true, ex:[], note:'Vuelo sale 19:05 desde CR. Descanso. Si te sientes bien en la mañana, movilidad suave o caminata firme antes del aeropuerto, nada al fallo.'}
};

// Fio: 24 semanas (2º trimestre), 32 años, muy buena condición física.
// Moderado, NUNCA al fallo. Nada de saltos ni impacto, nada boca arriba en el suelo,
// no aguantar la respiración. Apoyo para el equilibrio cuando haga falta.
const WEEK_FIO = {
  1: {title:'Piernas y glúteos (suave)', ex:[
      {n:'Sentadilla peso corporal', s:'controlada, baja hasta donde estés cómoda', r:'10–12', v:'prenatal+bodyweight+squat'},
      {n:'Zancada estática con apoyo', s:'mano en silla o pared para equilibrio', r:'8/pierna', v:'prenatal+supported+lunge'},
      {n:'Patada de glúteo con banda (de pie)', s:'de pie, banda 20 kg', r:'12/pierna', v:'standing+glute+kickback+band'},
      {n:'Gato-camello', s:'movilidad de espalda en 4 apoyos', r:'8 lentas', v:'cat+cow+stretch+pregnancy'}
    ]},
  2: {title:'Fuerza full body (banda pesada)', ex:[
      {n:'Sentadilla goblet con banda', s:'pisas la banda y sostienes el lazo al pecho, baja en 3 seg, banda 30 kg', r:'12–15', v:'goblet+squat+resistance+band'},
      {n:'Press de pecho con banda (de pie)', s:'banda anclada detrás a la altura del pecho, controla la vuelta, banda 30 kg', r:'12–15', v:'standing+band+chest+press'},
      {n:'Remo a una mano con banda', s:'de pie, banda 30 kg, aprieta el omóplato sin girar el torso', r:'12/lado', v:'single+arm+band+row'},
      {n:'Step-up a escalón con apoyo', s:'sube sin impulso ni salto, baja lento, mano en la pared', r:'10/pierna', v:'step+up+exercise+pregnancy'},
      {n:'Sentadilla isométrica en pared', s:'wall sit, espalda a la pared, muslos firmes, respira normal (no aguantes)', r:'30–45 seg', v:'wall+sit+pregnancy'},
      {n:'Gato-camello', s:'para soltar la espalda al terminar', r:'8 lentas', v:'cat+cow+stretch+pregnancy'}
    ]},
  3: {title:'Tren superior (de pie)', ex:[
      {n:'Press de pecho con banda (de pie)', s:'banda anclada detrás a la altura del pecho, empuja al frente, banda 20 kg', r:'12–15', v:'standing+band+chest+press'},
      {n:'Remo con banda', s:'de pie, banda 20 kg, aprieta omóplatos', r:'12–15', v:'standing+resistance+band+row'},
      {n:'Press de hombro con banda', s:'banda 10 kg, no aguantes la respiración', r:'10–12', v:'standing+band+shoulder+press'},
      {n:'Pallof press con banda (anti-rotación)', s:'de pie de lado a la banda, empuja al frente sin dejar que el torso gire', r:'10/lado', v:'pallof+press+band+exercise'}
    ]},
  4: {title:'Core fuerte + anti-rotación', ex:[
      {n:'Plancha inclinada (manos en sofá o banco)', s:'manos elevadas para no cargar la línea alba; baja si ves que la panza hace "cono"', r:'15–25 seg', v:'incline+plank+pregnancy'},
      {n:'Pallof press con banda', s:'de lado a la banda, banda 30 kg, empuja al frente sin dejar que el torso gire', r:'12/lado', v:'pallof+press+band'},
      {n:'Suitcase carry', s:'caminas cargando peso moderado de un solo lado, costillas sobre la cadera, exhala al cargar', r:'30–40 m/lado', v:'suitcase+carry+exercise'},
      {n:'Plancha lateral con rodilla apoyada', s:'aguanta más tiempo que antes, sin forzar', r:'30 seg/lado', v:'modified+side+plank+knee'},
      {n:'Bird dog con pausa', s:'brazo y pierna opuestos, 2 seg arriba, sin arquear', r:'10/lado', v:'bird+dog+exercise'},
      {n:'Kegels (suelo pélvico)', s:'aprieta y suelta lento, respira normal', r:'12', v:'kegel+pelvic+floor+pregnancy'}
    ]},
  5: {title:'Cadena posterior + full body', ex:[
      {n:'Bisagra de cadera con banda', s:'banda bajo los pies, lleva la cadera atrás con la espalda recta y sube apretando glúteos, banda 20 kg', r:'12', v:'standing+band+hip+hinge+good+morning'},
      {n:'Sentadilla sumo con apoyo', s:'pies anchos, punta afuera, baja entre las piernas, mano en silla si la necesitas', r:'12', v:'sumo+squat+pregnancy'},
      {n:'Face pull con banda (postura)', s:'banda anclada al frente, tira hacia la cara abriendo los codos, abre el pecho', r:'15', v:'band+face+pull'},
      {n:'Elevación de talones de pie', s:'sube a las puntas y baja lento, ayuda circulación y calambres', r:'15', v:'standing+calf+raises'},
      {n:'Marcha de pie (rodilla arriba)', s:'core y equilibrio, de pie, sube una rodilla a la vez', r:'30–40 seg', v:'standing+marches+exercise'}
    ]},
  6: {title:'Caminata firme + piernas y glúteos + yoga corto', walk:true, ex:[
      {n:'Caminata a ritmo vivo o en cuesta', s:'con algo de esfuerzo, pero deberías poder hablar', r:'25–30 min', v:'brisk+prenatal+walking'},
      {n:'Zancada inversa con apoyo', s:'pasos atrás controlados, sin salto, mano en silla o pared', r:'10/pierna', v:'reverse+lunge+pregnancy'},
      {n:'Patada de glúteo con banda (de pie)', s:'de pie, banda 30 kg, aprieta el glúteo arriba', r:'15/pierna', v:'standing+glute+kickback+band'},
      {n:'Abducción de cadera de pie con banda', s:'banda 20 kg en los tobillos, abre la pierna al lado sin girar la cadera', r:'15/lado', v:'standing+hip+abduction+band'},
      {n:'Elevación de talones lenta', s:'sube y baja en 3 seg, ayuda circulación y calambres', r:'20', v:'standing+calf+raises'},
      {n:'Postura de la diosa (vuelta a la calma)', s:'pies anchos, baja en sentadilla amplia y abre las rodillas', r:'40 seg', v:'goddess+pose+pregnancy'},
      {n:'Mariposa sentada', s:'plantas de los pies juntas, deja caer las rodillas, espalda larga', r:'45–60 seg', v:'butterfly+bound+angle+pose+pregnancy'},
      {n:'Relajación de lado izquierdo', s:'recostada sobre el lado izquierdo con un cojín entre las rodillas, respira lento', r:'2–3 min', v:'left+side+relaxation+pregnancy'}
    ]},
  0: {title:'Descanso', rest:true, ex:[], note:'Descanso total. Camina suave si te apetece, hidrátate y duerme bien.'}
};
