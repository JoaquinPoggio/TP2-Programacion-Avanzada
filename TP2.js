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

let dispositos_red = [
  {tipo: "Router",marca: "TP-Link", modelo: "AX1800", precio: 14000},
  {tipo: "Switch", marca: "Keychron", modelo: "SG350-10",precio: 43000},
  {tipo: "Firewall", marca: "Barracuda",    modelo: "FortiGate 40F", precio: 81000  },
  {tipo: "Router",marca: "Mercusys", modelo: "hEX S", precio: 22500  },
  {tipo: "Switch" ,marca: "Logitech" ,modelo: "DGS-108",precio: 15999}
]

//Ejercicio 3: Filtrar dispositivos por marca
//Dado un array de dispositivos de red, utiliza el método filter() para obtener solo los dispositivos de una marca específica.

