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
  4: {title:'Espalda + cadena posterior + core', ex:[
      {n:'Dominadas en viga', s:'colgado de la viga del quincho, agarre firme, baja controlado', r:'al fallo (~5)', v:'Pull-Up'},
      {n:'Face pull con banda o TRX', s:'banda 20 kg, salud de hombro', r:'al fallo', v:'Band+TRX+Face+Pull'},
      {n:'Peso muerto rumano 1 pierna', s:'single-leg RDL, KB 8kg, cadera atrás, isquio + glúteo', r:'al fallo/pierna', v:'Single+Leg+Romanian+Deadlift+kettlebell'},
      {n:'Hollow hold', s:'abdomen apretado, lumbar al suelo', r:'al fallo', v:'Hollow+Hold'}
    ]},
  5: {title:'Piernas + grip + core', ex:[
      {n:'Bulgarian split squat', s:'una pierna, lejos del fútbol', r:'al fallo/pierna', v:'Bulgarian+Split+Squat'},
      {n:'Sentadilla con salto sosteniendo KB', s:'goblet jump squat, KB 8kg', r:'al fallo', v:'Goblet+Jump+Squat+kettlebell'},
      {n:'Suitcase carry alternado', s:'cargado un lado a la vez, cambias de mano', r:'30–40m/lado', v:'Suitcase+Carry+kettlebell'},
      {n:'Curl alternado 1 brazo, foco agarre', s:'KB 8kg o banda, aprietas el mango', r:'al fallo/brazo', v:'Single+Arm+Bicep+Curl+grip'},
      {n:'Halo con giro, de rodillas', s:'KB 8kg, círculo a la cabeza + torso gira, tall kneeling', r:'al fallo/lado', v:'Kneeling+Kettlebell+Halo'}
    ]},
  6: {title:'Tren superior empuje + tracción', ex:[
      {n:'Flexiones', s:'pecho y tríceps, sin remo', r:'al fallo', v:'Push-Up'},
      {n:'Pike push-up con pies en TRX', s:'empuje de hombro, sustituye handstand', r:'al fallo', v:'TRX+Pike+Push-Up'},
      {n:'Remo en TRX, pies adelante', s:'cuanto más horizontal, más duro', r:'al fallo', v:'TRX+Inverted+Row+feet+elevated'},
      {n:'Plancha con remo alternado', s:'single-KB plank row, anti-rotación, KB 8kg', r:'al fallo/lado', v:'Single+Kettlebell+Plank+Row'}
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
  2: {title:'Estiramiento guiado + movilidad', ex:[
      {n:'Gato-camello', s:'en 4 apoyos, mueve la columna lento, sin arquear de más', r:'8–10 lentas', v:'cat+cow+stretch+pregnancy'},
      {n:'Círculos de cadera en 4 apoyos', s:'dibuja círculos grandes con la cadera, suelta la espalda baja', r:'5/lado', v:'quadruped+hip+circles+prenatal'},
      {n:'Estiramiento de flexor de cadera (zancada arrodillada)', s:'rodilla en el suelo, empuja la cadera al frente, mano en silla', r:'30 seg/lado', v:'kneeling+hip+flexor+stretch+pregnancy'},
      {n:'Figura 4 sentada en silla', s:'tobillo sobre la rodilla contraria, inclínate suave, estira el glúteo', r:'30 seg/lado', v:'seated+figure+four+glute+stretch'},
      {n:'Postura del niño (rodillas abiertas)', s:'rodillas anchas para dar espacio a la panza, respira hondo', r:'45–60 seg', v:'childs+pose+wide+knees+pregnancy'},
      {n:'Estiramiento de costado sentada', s:'sube un brazo y alárgate hacia el lado, abre las costillas', r:'20 seg/lado', v:'seated+side+stretch'},
      {n:'Respiración diafragmática + suelo pélvico', s:'inhala soltando la panza, exhala activando suave el suelo pélvico', r:'5 respiraciones', v:'diaphragmatic+breathing+pelvic+floor+pregnancy'}
    ]},
  3: {title:'Tren superior (de pie)', ex:[
      {n:'Press de pecho con banda (de pie)', s:'banda anclada detrás a la altura del pecho, empuja al frente, banda 20 kg', r:'12–15', v:'standing+band+chest+press'},
      {n:'Remo con banda', s:'de pie, banda 20 kg, aprieta omóplatos', r:'12–15', v:'standing+resistance+band+row'},
      {n:'Press de hombro con banda', s:'banda 10 kg, no aguantes la respiración', r:'10–12', v:'standing+band+shoulder+press'},
      {n:'Pallof press con banda (anti-rotación)', s:'de pie de lado a la banda, empuja al frente sin dejar que el torso gire', r:'10/lado', v:'pallof+press+band+exercise'}
    ]},
  4: {title:'Core seguro + suelo pélvico', ex:[
      {n:'Bird dog', s:'brazo y pierna opuestos, sin arquear', r:'8/lado', v:'bird+dog+exercise'},
      {n:'Plancha lateral con rodilla apoyada', s:'corta, sin forzar', r:'20 seg/lado', v:'modified+side+plank+knee'},
      {n:'Inclinación pélvica de pie', s:'pelvic tilt contra la pared', r:'12 lentas', v:'standing+pelvic+tilt'},
      {n:'Kegels (suelo pélvico)', s:'aprieta y suelta, respira normal', r:'10', v:'kegel+pelvic+floor+pregnancy'}
    ]},
  5: {title:'Cadena posterior + full body', ex:[
      {n:'Bisagra de cadera con banda', s:'banda bajo los pies, lleva la cadera atrás con la espalda recta y sube apretando glúteos, banda 20 kg', r:'12', v:'standing+band+hip+hinge+good+morning'},
      {n:'Sentadilla sumo con apoyo', s:'pies anchos, punta afuera, baja entre las piernas, mano en silla si la necesitas', r:'12', v:'sumo+squat+pregnancy'},
      {n:'Face pull con banda (postura)', s:'banda anclada al frente, tira hacia la cara abriendo los codos, abre el pecho', r:'15', v:'band+face+pull'},
      {n:'Elevación de talones de pie', s:'sube a las puntas y baja lento, ayuda circulación y calambres', r:'15', v:'standing+calf+raises'},
      {n:'Marcha de pie (rodilla arriba)', s:'core y equilibrio, de pie, sube una rodilla a la vez', r:'30–40 seg', v:'standing+marches+exercise'}
    ]},
  6: {title:'Caminata + yoga prenatal', walk:true, ex:[
      {n:'Caminata', s:'paso cómodo, deberías poder conversar', r:'20 min', v:'prenatal+walking'},
      {n:'Gato-camello', s:'para arrancar el yoga, suelta la espalda', r:'8 lentas', v:'cat+cow+stretch+pregnancy'},
      {n:'Perro mirando abajo (suave)', s:'desde 4 apoyos lleva la cadera atrás y arriba, talones relajados, sin forzar', r:'3 respiraciones', v:'gentle+downward+dog+prenatal'},
      {n:'Zancada baja (low lunge) con apoyo', s:'abre la cadera, mano en silla, pecho arriba', r:'30 seg/lado', v:'low+lunge+prenatal+yoga'},
      {n:'Postura de la diosa', s:'pies anchos, baja en sentadilla amplia y abre las rodillas, prepara para el parto', r:'30–40 seg', v:'goddess+pose+pregnancy'},
      {n:'Mariposa sentada', s:'plantas de los pies juntas, deja caer las rodillas, espalda larga', r:'45–60 seg', v:'butterfly+bound+angle+pose+pregnancy'},
      {n:'Torsión sentada suave', s:'gira abriendo (mira por encima del hombro), sin comprimir la panza', r:'20 seg/lado', v:'gentle+seated+twist+pregnancy'},
      {n:'Paloma modificada / figura 4', s:'estira glúteo y cadera, en el suelo o sentada en silla', r:'30 seg/lado', v:'modified+pigeon+pose+pregnancy'},
      {n:'Relajación de lado izquierdo', s:'recostada sobre el lado izquierdo con un cojín entre las rodillas, respira lento', r:'2–3 min', v:'left+side+relaxation+pregnancy'}
    ]},
  0: {title:'Descanso', rest:true, ex:[], note:'Descanso total. Camina suave si te apetece, hidrátate y duerme bien.'}
};
