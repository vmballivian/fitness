// ===== Fuente única de los entrenos =====
// Edita SOLO este archivo para cambiar entrenos.
// Lo leen: calendario.html (lo que ves al tocar un día) y semana-*.html.
// Índice de día: 0=domingo, 1=lunes ... 5=viernes, 6=sábado.

const WEEK_VIC = {
  1: {title:'Fútbol ⚽ + tren superior AM', soccer:true, ex:[
      {n:'Fútbol (partido en la noche)', s:'la cancha es tu pierna y cardio del día'},
      {n:'Flexiones', s:'en la mañana, lejos del partido — pecho y tríceps', r:'al fallo', v:'Push-Up'},
      {n:'Remo en TRX', s:'mañana, tracción de espalda', r:'al fallo', v:'TRX+Rows'},
      {n:'Plancha', s:'core, sin cargar piernas para la cancha', r:'al fallo', v:'Plank+hold'}
    ], alt:[
      {n:'KB swing 1 brazo', s:'KB 8kg', r:'al fallo/lado', v:'Single-Arm+KB+Swings'},
      {n:'Zancadas con salto', s:'jump lunges', r:'al fallo', v:'Jump+Lunges'},
      {n:'Remo en TRX', s:'TRX row, tracción de espalda', r:'al fallo', v:'TRX+Rows'},
      {n:'Plancha con arrastre de KB', s:'plank KB pass-through, arrastras la pesa de lado a lado por debajo, anti-rotación, KB 8kg', r:'al fallo', v:'Plank+Kettlebell+Pass+Through+drag'}
    ]},
  2: {title:'Empuje + tracción + core', ex:[
      {n:'Sentadilla profunda + press de hombro 1 brazo', s:'squat to press, KB 8kg', r:'al fallo/brazo', v:'Single+Arm+Dumbbell+Squat+to+Press'},
      {n:'Elevaciones laterales con banda', s:'pisas la banda, subes los brazos al lado hasta la altura del hombro, deltoides medio, banda 10 kg', r:'al fallo', v:'Band+Lateral+Raise'},
      {n:'Gorilla rows', s:'KB 8kg', r:'al fallo', v:'Gorilla+Rows+kettlebell'},
      {n:'Flexiones con toque de hombro', s:'push-up shoulder taps', r:'al fallo', v:'Push-Up+Shoulder+Taps'}
    ]},
  3: {title:'Swing + remo + core ⚽', soccer:true, ex:[
      {n:'KB swing 1 brazo', s:'KB 8kg', r:'al fallo/lado', v:'Single-Arm+KB+Swings'},
      {n:'Remo en TRX', s:'TRX rows', r:'al fallo', v:'TRX+Rows'},
      {n:'Giro ruso con KB', s:'russian twists, KB 8kg', r:'al fallo', v:'Russian+Twists+kettlebell'}
    ], alt:[
      {n:'Devil press 1 brazo', s:'burpee + snatch, KB 8kg', r:'al fallo/brazo', v:'Single+KB+Devil+Press'},
      {n:'Mountain climbers', s:'cardio', r:'al fallo', v:'Mountain+Climbers+fast'},
      {n:'Sentadilla con salto', s:'jump squats', r:'al fallo', v:'Jump+Squats'}
    ]},
  4: {title:'Tren superior empuje + tracción', ex:[
      {n:'Flexiones', s:'pecho y tríceps, sin remo', r:'al fallo', v:'Push-Up'},
      {n:'Pike push-up con pies en TRX', s:'empuje de hombro, sustituye handstand', r:'al fallo', v:'TRX+Pike+Push-Up'},
      {n:'Dominadas en viga', s:'2ª dosis semanal, la frecuencia sube tu máximo', r:'al fallo (~5)', v:'Pull-Up'},
      {n:'Plancha con remo alternado', s:'single-KB plank row, anti-rotación, KB 8kg', r:'al fallo/lado', v:'Single+Kettlebell+Plank+Row'}
    ]},
  5: {title:'Piernas + grip + core', ex:[
      {n:'Bulgarian split squat', s:'una pierna, lejos del fútbol', r:'al fallo/pierna', v:'Bulgarian+Split+Squat'},
      {n:'Sentadilla con salto sosteniendo KB', s:'goblet jump squat, KB 8kg', r:'al fallo', v:'Goblet+Jump+Squat+kettlebell'},
      {n:'Suitcase carry alternado', s:'cargado un lado a la vez, cambias de mano', r:'30–40m/lado', v:'Suitcase+Carry+kettlebell'},
      {n:'Curl alternado 1 brazo, foco agarre', s:'KB 8kg o banda, aprietas el mango', r:'al fallo/brazo', v:'Single+Arm+Bicep+Curl+grip'},
      {n:'Halo con giro, de rodillas', s:'KB 8kg, círculo a la cabeza + torso gira, tall kneeling', r:'al fallo/lado', v:'Kneeling+Kettlebell+Halo'}
    ]},
  6: {title:'Espalda + cadena posterior + core', ex:[
      {n:'Dominadas en viga', s:'viga del quincho, baja controlado', r:'al fallo (~5)', v:'Pull-Up'},
      {n:'Face pull con banda o TRX', s:'banda 20 kg, salud de hombro', r:'al fallo', v:'Band+TRX+Face+Pull'},
      {n:'Peso muerto rumano 1 pierna', s:'single-leg RDL, KB 8kg, cadera atrás, isquio + glúteo', r:'al fallo/pierna', v:'Single+Leg+Romanian+Deadlift+kettlebell'},
      {n:'Hollow hold', s:'abdomen apretado, lumbar al suelo', r:'al fallo', v:'Hollow+Hold'}
    ]},
  0: {title:'Descanso', rest:true, ex:[], note:'Caminata, movilidad, foam roll. Recuperas las piernas del viernes.'}
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
