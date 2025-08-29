    //Ejercicio 1: Crear un objeto literal para un dispositivo de red
    //Crea un objeto literal que represente un router con las siguientes propiedades:
//modelo, marca, puertos, velocidad (en Mbps), y soportaWifi.
const disposito_red = {
    modelo: AX6000,
    marca: "tp-link",
    puertos: 6,
    velocidad: 4000,
    soportaWifi: true
};

//Ejercicio 2: Array de dispositivos de red
//Crea un array con 5 dispositivos de red (routers, switches, firewalls, etc.) donde
//cada uno sea un objeto literal con propiedades como tipo, marca, modelo y precio.

const dispositivos_red = [
  {tipo: "Router",marca: "TP-Link", modelo: "AX1800", precio: 14000},
  {tipo: "Switch", marca: "Keychron", modelo: "SG350-10",precio: 43000},
  {tipo: "Firewall", marca: "Barracuda",    modelo: "FortiGate 40F", precio: 81000  },
  {tipo: "Router",marca: "Mercusys", modelo: "hEX S", precio: 22500  },
  {tipo: "Switch" ,marca: "Logitech" ,modelo: "DGS-108",precio: 15999}
]

//Ejercicio 3: Filtrar dispositivos por marca
//Dado un array de dispositivos de red, utiliza el método filter() para obtener solo los dispositivos de una marca específica.

const dispositivosLogitech = dispositivos_red.filter(dispositivo => dispositivo.marca === "Logitech");
console.log(dispositivosLogitech);

//Ejercicio 4: Mapear direcciones IP
//Dado un array de servidores con direcciones IP, utiliza el método map() para crear
//un nuevo array que contenga solo las direcciones IP.

const servidores = [
{ nombre: "Servidor Web", ip: "192.168.1.10", sistema: "Linux" },
{ nombre: "Servidor de Base de Datos", ip: "192.168.1.11", sistema: "Windows" },
{ nombre: "Servidor de Correo", ip: "192.168.1.12", sistema: "Linux" },
{ nombre: "Servidor DNS", ip: "192.168.1.13", sistema: "Linux" },
{ nombre: "Servidor de Archivos", ip: "192.168.1.14", sistema: "Windows" }
];

let direccionesIP = servidores.map(servidor => servidor.ip);
console.log(direccionesIP);

//Ejercicio 5: Filtrar y ordenar paquetes de datos
//Dado un array de paquetes de datos, filtra aquellos que tengan un tamaño mayor
//a 1000 bytes y ordénalos de mayor a menor según su prioridad

const paquetesDatos = [
{ id: 1, origen: "192.168.1.5", destino: "192.168.1.10", tamaño: 1200, prioridad: 3 },
{ id: 2, origen: "192.168.1.7", destino: "192.168.1.12", tamaño: 800, prioridad: 1 },
{ id: 3, origen: "192.168.1.3", destino: "192.168.1.11", tamaño: 1500, prioridad: 5 },
{ id: 4, origen: "192.168.1.8", destino: "192.168.1.14", tamaño: 950, prioridad: 2 },
{ id: 5, origen: "192.168.1.2", destino: "192.168.1.13", tamaño: 2000, prioridad: 4 }
];

const paquetesFiltradosYOrdenados = paquetesDatos.filter(paquete => paquete.tamaño > 1000)
.sort((a, b) => b.prioridad - a.prioridad);
console.log(paquetesFiltradosYOrdenados);

//Ejercicio 6: Calcular estadísticas de red
//Dado un objeto con estadísticas de tráfico de red por hora, calcula el total de
//datos transferidos y la hora con mayor tráfico.

const traficoRed = {
"08:00": 1250, // MB transferidos
"09:00": 1870,
"10:00": 2100,
"11:00": 1950,
"12:00": 1600,
"13:00": 1300,
"14:00": 1700,

"15:00": 2200,
"16:00": 1800,
"17:00": 1500
};
// Calcula el total de datos transferidos

let total = Object.values(traficoRed).reduce((acc, val) => acc + val, 0);

// Encuentra la hora con mayor tráfico

let horaMayor = Object.keys(traficoRed).reduce((horaMax, horaActual) => {
    //obtiene un array con las claves y reduce a la hora con mayor valor
  return traficoRed[horaActual] > traficoRed[horaMax] ? horaActual : horaMax;
});

console.log(`Total de datos transferidos: ${total} MB`);
console.log(`Hora con mayor tráfico: ${horaMayor} con ${traficoRed[horaMayor]} MB`);

//Ejercicio 7: Analizar conexiones de red
//Dado un array de conexiones de red, agrupa las conexiones por protocolo y cuenta cuántas hay de cada tipo

const conexiones = [
{ id: 1, origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP" },
{ id: 2, origen: "192.168.1.7", destino: "192.168.1.12", protocolo: "FTP" },
{ id: 3, origen: "192.168.1.3", destino: "192.168.1.11", protocolo: "SSH" },
{ id: 4, origen: "192.168.1.8", destino: "192.168.1.14", protocolo: "HTTP" },
{ id: 5, origen: "192.168.1.2", destino: "192.168.1.13", protocolo: "HTTPS" },
{ id: 6, origen: "192.168.1.6", destino: "192.168.1.10", protocolo: "FTP" },
{ id: 7, origen: "192.168.1.9", destino: "192.168.1.15", protocolo: "SSH" },
{ id: 8, origen: "192.168.1.4", destino: "192.168.1.11", protocolo: "HTTP" }
];

// Crea un objeto para contar las conexiones por protocolo
// Tu código aquí (recorre el array y cuenta las conexiones)

for (let conexion of conexiones) {
  let protocolo = conexion.protocolo;

  if (conexionesPorProtocolo[protocolo]) {
    conexionesPorProtocolo[protocolo]++;
  } else {
    conexionesPorProtocolo[protocolo] = 1;
  }
}

console.log("Conexiones por protocolo:", conexionesPorProtocolo)

//Ejercicio 8: Filtrar y transformar alertas de seguridad
//Dado un array de alertas de seguridad de red, filtra las que sean de nivel "alto" y 
//transfórmalas en mensajes para el administrador.

const dispositivos = [

{ id: 1, nombre: "PC-Desarrollo", ip: "192.168.1.5", tipo: "Estación de trabajo" },
{ id: 2, nombre: "PC-Marketing", ip: "192.168.1.7", tipo: "Estación de trabajo" },
{ id: 3, nombre: "Servidor-Web", ip: "192.168.1.10", tipo: "Servidor" },
{ id: 4, nombre: "Servidor-BD", ip: "192.168.1.11", tipo: "Servidor" }
];

const conexionesActivas = [
{ origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP", bytes: 8500 },
{ origen: "192.168.1.7", destino: "192.168.1.11", protocolo: "MySQL", bytes: 12000 },
{ origen: "192.168.1.5", destino: "192.168.1.11", protocolo: "MySQL", bytes: 9200 }
];

// Crea un informe que combine la información de dispositivos y conexiones
const informeActividad = conexionesActivas.map(conexion => {

  // Encuentra los dispositivos de origen y destino
// Tu código aquí
 const dispositivoOrigen = dispositivos.find(d => d.ip === conexion.origen);
 const dispositivoDestino = dispositivos.find(d => d.ip === conexion.destino);
// Retorna un objeto con la información combinada
return {
// Tu código aquí
    origen: dispositivoOrigen ? dispositivoOrigen.nombre : conexion.origen,
    tipoOrigen: dispositivoOrigen ? dispositivoOrigen.tipo : "Desconocido",
    destino: dispositivoDestino ? dispositivoDestino.nombre : conexion.destino,
    tipoDestino: dispositivoDestino ? dispositivoDestino.tipo : "Desconocido",
    protocolo: conexion.protocolo,
    bytes: conexion.bytes
};
});

console.log("Informe de actividad de red:", informeActividad);

//Ejercicio 9: Combinar datos de dispositivos y conexiones
//Combina información de dispositivos y conexiones para crear un informe
//detallado de la actividad de red.

const topologiaRed = {
nodos: [
{ id: "A", tipo: "Router", ubicacion: "Planta 1" },
{ id: "B", tipo: "Switch", ubicacion: "Planta 1" },
{ id: "C", tipo: "Switch", ubicacion: "Planta 2" },
{ id: "D", tipo: "Switch", ubicacion: "Planta 3" },

{ id: "E", tipo: "Router", ubicacion: "Planta 3" }
],
conexiones: [
{ origen: "A", destino: "B", ancho_banda: 1000 },
{ origen: "A", destino: "C", ancho_banda: 1000 },
{ origen: "B", destino: "C", ancho_banda: 100 },
{ origen: "B", destino: "D", ancho_banda: 100 },
{ origen: "C", destino: "D", ancho_banda: 100 },
{ origen: "C", destino: "E", ancho_banda: 1000 },
{ origen: "D", destino: "E", ancho_banda: 1000 }
]
};

// Cuenta el número de conexiones por nodo
const conexionesPorNodo = {};
topologiaRed.nodos.forEach(nodo => {
conexionesPorNodo[nodo.id] = 0;
});

// Tu código aquí para contar las conexiones
topologiaRed.conexiones.forEach(conexion => {
  conexionesPorNodo[conexion.origen]++;
  conexionesPorNodo[conexion.destino]++;
});

// Encuentra los nodos con más conexiones
const nodosOrdenados = Object.entries(conexionesPorNodo)
.sort((a, b) => b[1] - a[1]);

// Sugiere optimizaciones (por ejemplo, los nodos con más de 2 conexiones podrían necesitar más
//ancho de banda)
const sugerencias = [];
// Tu código aquí
for (let [nodo, cantidad] of Object.entries(conexionesPorNodo)) {
  if (cantidad > 2) {
    sugerencias.push(`Nodo ${nodo} tiene ${cantidad} conexiones; considerar aumentar ancho de banda o mejorar el equipo.`);
  }
}

console.log("Conexiones por nodo:", conexionesPorNodo);
console.log("Nodos ordenados por número de conexiones:", nodosOrdenados);
console.log("Sugerencias de optimización:", sugerencias);

//Ejercicio 10: Analizar y optimizar topología de red
//Dado un objeto que representa una topología de red, encuentra los nodos con
//más conexiones y sugiere optimizaciones.

const topologiaRedEJ10 = { 
  nodos: [ 
    { id: "A", tipo: "Router", ubicacion: "Planta 1" }, 
    { id: "B", tipo: "Switch", ubicacion: "Planta 1" }, 
    { id: "C", tipo: "Switch", ubicacion: "Planta 2" }, 
    { id: "D", tipo: "Switch", ubicacion: "Planta 3" }, 
    { id: "E", tipo: "Router", ubicacion: "Planta 3" } ], 
  
conexiones: [ 
  { origen: "A", destino: "B", ancho_banda: 1000 }, 
  { origen: "A", destino: "C", ancho_banda: 1000 }, 
  { origen: "B", destino: "C", ancho_banda: 100 }, 
  { origen: "B", destino: "D", ancho_banda: 100 }, 
  { origen: "C", destino: "D", ancho_banda: 100 }, 
  { origen: "C", destino: "E", ancho_banda: 1000 }, 
  { origen: "D", destino: "E", ancho_banda: 1000 } 
 ] 
}; 

// Cuenta el número de conexiones por nodo
const conexionesPorNodoEJ10 = {};
topologiaRedEJ10.nodos.forEach(nodo => {
conexionesPorNodoEJ10[nodo.id] = 0;
});
// Tu código aquí para contar las conexiones
topologiaRedEJ10.conexiones.forEach(conexion => {
  conexionesPorNodoEJ10[conexion.origen]++;
  conexionesPorNodoEJ10[conexion.destino]++;
});
// Encuentra los nodos con más conexiones
const nodosOrdenadosEJ10 = Object.entries(conexionesPorNodoEJ10)
.sort((a, b) => b[1] - a[1]);;

console.log("Conexiones por nodo:", conexionesPorNodoEJ10);
console.log("Nodos ordenados por número de conexiones:", nodosOrdenadosEJ10);

//Poggio Joaquin Pablo :)
