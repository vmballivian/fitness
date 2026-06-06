// ===== Fuente única de los entrenos =====
// Edita SOLO este archivo para cambiar entrenos.
// Lo leen: calendario.html (lo que ves al tocar un día) y semana-*.html.
// Índice de día: 0=domingo, 1=lunes ... 5=viernes, 6=sábado.

const WEEK_VIC = {
  1: {title:'Fútbol ⚽', soccer:true, ex:[
      {n:'Fútbol (partido en la noche)', s:'la cancha es tu pierna y cardio del día'}
    ], alt:[
      {n:'KB swing 1 brazo', s:'KB 8kg', r:'al fallo/lado', v:'Single-Arm+KB+Swings'},
      {n:'Zancadas con salto', s:'jump lunges', r:'al fallo', v:'Jump+Lunges'},
      {n:'Burpees', s:'cardio', r:'al fallo', v:'Burpees'}
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
      {n:'Jalón al pecho con banda', s:'banda 30 kg, anclada arriba', r:'al fallo', v:'Band+Lat+Pulldown'},
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

// Fio: 2º trimestre. Moderado, NUNCA al fallo. Nada de saltos ni boca arriba.
const WEEK_FIO = {
  1: {title:'Piernas y glúteos (suave)', ex:[
      {n:'Sentadilla peso corporal', s:'controlada, baja hasta donde estés cómoda', r:'10–12', v:'prenatal+bodyweight+squat'},
      {n:'Zancada estática con apoyo', s:'mano en silla o pared para equilibrio', r:'8/pierna', v:'prenatal+supported+lunge'},
      {n:'Patada de glúteo con banda (de pie)', s:'de pie, banda 20 kg', r:'12/pierna', v:'standing+glute+kickback+band'},
      {n:'Gato-camello', s:'movilidad de espalda en 4 apoyos', r:'8 lentas', v:'cat+cow+stretch+pregnancy'}
    ]},
  2: {title:'Caminata + movilidad', walk:true, ex:[
      {n:'Caminata', s:'paso cómodo, deberías poder conversar', r:'20 min', v:'prenatal+walking'},
      {n:'Círculos de cadera + estiramiento suave', s:'al terminar', r:'5 min', v:'prenatal+hip+mobility+stretch'}
    ]},
  3: {title:'Tren superior (de pie / inclinado)', ex:[
      {n:'Flexión inclinada (pared o mesa)', s:'nunca boca abajo en el suelo', r:'10–12', v:'incline+wall+push-up'},
      {n:'Remo con banda', s:'de pie, banda 20 kg, aprieta omóplatos', r:'12–15', v:'standing+resistance+band+row'},
      {n:'Press de hombro con banda', s:'banda 10 kg, no aguantes la respiración', r:'10–12', v:'standing+band+shoulder+press'},
      {n:'Bird dog', s:'4 apoyos, activa el core profundo', r:'8/lado', v:'bird+dog+exercise'}
    ]},
  4: {title:'Core seguro + suelo pélvico', ex:[
      {n:'Bird dog', s:'brazo y pierna opuestos, sin arquear', r:'8/lado', v:'bird+dog+exercise'},
      {n:'Plancha lateral con rodilla apoyada', s:'corta, sin forzar', r:'20 seg/lado', v:'modified+side+plank+knee'},
      {n:'Inclinación pélvica de pie', s:'pelvic tilt contra la pared', r:'12 lentas', v:'standing+pelvic+tilt'},
      {n:'Kegels (suelo pélvico)', s:'aprieta y suelta, respira normal', r:'10', v:'kegel+pelvic+floor+pregnancy'}
    ]},
  5: {title:'Full body suave', ex:[
      {n:'Sentadilla peso corporal', s:'controlada', r:'10–12', v:'prenatal+bodyweight+squat'},
      {n:'Remo con banda', s:'de pie, banda 20 kg', r:'12–15', v:'standing+resistance+band+row'},
      {n:'Flexión inclinada', s:'pared o mesa', r:'10–12', v:'incline+wall+push-up'},
      {n:'Marcha de pie (rodilla arriba)', s:'core y equilibrio, de pie', r:'30–40 seg', v:'standing+marches+exercise'}
    ]},
  6: {title:'Caminata + yoga prenatal', walk:true, ex:[
      {n:'Caminata', s:'paso cómodo', r:'20 min', v:'prenatal+walking'},
      {n:'Estiramiento / yoga prenatal', s:'suave, evita posturas boca arriba prolongadas', r:'5–10 min', v:'prenatal+yoga+stretch'}
    ]},
  0: {title:'Descanso', rest:true, ex:[], note:'Descanso total. Camina suave si te apetece, hidrátate y duerme bien.'}
};
