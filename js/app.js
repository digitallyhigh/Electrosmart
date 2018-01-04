// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('electrosmart', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('ChatsCtrl', function($scope, ChatService) {
 $scope.chats = ChatService.getChats();
})

.controller('ChatDetailsCtrl', function($scope, $stateParams, ChatService) {
  $scope.chatId = $stateParams.chatId;
 $scope.chat = ChatService.getChat($scope.chatId);
})
.service('ChatService', function() {
 return {
   chats: [
     {
       id: "1",
       name: "Resistors",
       message: "Resistor is a 2 terminal passive device which is used to control the flow of current in a circuit. It follows I=V/R",
       types: "Through hole (Fixed/Cariable) & SMD",
       apps: "LED current Limiting, Voltage Divider, Pull up Resistor"
     },
     {
       id: "2",
       name: "Capacitors",
       message: "Capacitor is a 2 terminal (Polar/Non-Polar) device which is used to store energy in the form of Electric Field, following Q=CV. It allows free flow to AC but resists DC.",
       types: "Ceramic, Aluminium & Tantalum Electrolytic, SMD",
       apps: "Bypass Capacitors, Filter Capacitor, Energy Storage, Signal Filtering"
     },
     {
       id: "3",
       name: "Inductors",
       message: "Inductor is a 2 terminal device which is used For storing energy in the form of magnetic field, following L=Φ/I. It allows free flow to DC but resists AC",
       types: "Air core, Ferrite core, Torroidal",
       apps: "Signal Filtering, Magnetic Sensor, Transformer"
     },
       {
       id: "4",
       name: "Diodes",
       message: "Diode is a 2 terminal(polar) device which conducts in one direction and resists in other upto a certain voltage",
       types: "Normal, Schottky, Zener, LED, Photodiode, SMD",
       apps: "Rectifier, Reverse Current Protection, Logic Gates"
     },
       {
       id: "5",
       name: "LEDs",
       message: "LED is a diode which emits light when forward biased.",
       types: "Normal(single color), Flashing, SMD, RGB(tri-color), Special(IR,UV), High Power",
       apps: "Lighting, Displays, Communication"
     },
     {
       id: "6",
       name: "Transistors",
       message: "Transistor is a 3 terminal (Base(B), Emitter(E) & Collector(C)) device which acts as high frequency switch(Current flow from Collector(C) to Emitter(E)), which can be switched ON/OFF by supplying (in case of NPN) or not supplying (in case of PNP) current to the Base(B)",
       types: "NPN & PNP",
       apps: "Switches, Digital Logic, Signal Amplifier"
     },
       {
       id: "7",
       name: "MOSFETs",
       message: "MOSFET is a 3 terminal (Gate(G), Source(S) & Drain(C)) device which acts as High Current(>2A) and High Frequency switch(Current flow from Drain(D) to Source(S)), which can be switched ON/OFF by Applying (in case of N-Channel) or not Applying (in case of P-Channel) Voltage to the Gate(G)",
       types: "N-Channel & P-Channel",
       apps: "High Power Switches, Digital Logic, Signal Amplifier"
     },
       {
       id: "8",
       name: "Switches",
       message: "Switch is a 2 (or more) terminal device which is used to open or close a circuit",
       types: "Push, Rocker, Slide, Magnetic",
       apps: "Switching"
     },
       {
       id: "9",
       name: "Crystals",
       message: "Crystal is a 2 (or more) terminal device which acts as electronic oscillator and is used to provide clock input to Microprocessors",
       types: "Through-hole, SMD",
       apps: "Oscillator, Clock Inputs"
     },
       {
       id: "10",
       name: "Speakers",
       message: "Speaker is a magnetic device which converts analog signals into sound",
       types: "Normal, Piezo, PCB mount, Surface Transducer, Flexible",
       apps: "Sound Applicaions, SONAR"
     },
       {
       id: "11",
       name: "Microphone",
       message: "Microphone is a piezoelectric device which converts sound into analog signals",
       types: "Electret, MEMS, Geophone",
       apps: "Sound Recording, Sound Detection"
     },
       {
       id: "12",
       name: "Relays",
       message: "Relay is a electromagnetic switch, which closes the circuit if current is supplied to the solenoid terminals",
       types: "SPDT, Reed",
       apps: "High Voltage Switching"
     },
       {
       id: "13",
       name: "Reed Switches",
       message: "Reed switch is a 2 terminal switch which conducts only when exposed to magnetic field",
       types: "Normal",
       apps: "Magnetic Field Sensor, Non-contact Switch"
     },
       {
       id: "14",
       name: "Fuse",
       message: "Fuse is a 2 terminal protection device which protects the circuit from heavy currents by breaking the circuit in such cases",
       types: "Glass type",
       apps: "High Current Protection"
     },
       {
       id: "15",
       name: "Solder",
       message: "Solder is a Lead-Tin alloy wire used to join (By Melting it) electronic components on PCB",
       types: "Leaded, Lead Free, Paste",
       apps: "Joining Components on PCB"
     },
       {
       id: "16",
       name: "Soldering Irons",
       message: "Soldering Iron is a electronic heating device used to melt Solder wire for soldering components",
       types: "Fixed Power, Variable Power, Hot Air",
       apps: "Joining Components on PCB"
     },
       {
       id: "17",
       name: "PCBs",
       message: "PCB is a board which supports components and provide electrical connections using conductive tracks, pads & vias",
       types: "Single layer, Multiple Layer, Flexible",
       apps: "Used in Electronic Devices"
     },
       {
       id: "18",
       name: "Multimeters",
       message: "Multimeter is a electronic device used to measure Resistances, Capacitances, Voltages, Currents, Temperature. Analysing Transistors, Diodes and testing the circuit for continuity",
       types: "Mannual Range, Automatic",
       apps: "Measurement & Troubleshooting"
     },
       {
       id: "19",
       name: "Batteries",
       message: "Battery is a 2 terminal (+ & -) electrochemical device used to power electronic circuits",
       types: "Non-Rechargeable (ZnC, Alkaline), Rechargeable (Lead acid, NiCd, NiZn, NiMH, Li-ion)",
       apps: "Powering Circuits"
     },
       {
       id: "20",
       name: "Motors",
       message: "Motor is a electromagnetic device which converts electric energy into rotational energy. They are used wherever rotational motion is required",
       types: "Brushed DC, Brushless DC, Stepper, Linear",
       apps: "Quadcopters, 3d-printers, Fans, Toys etc."
     },
       {
       id: "21",
       name: "Servos",
       message: "Servo is a electromagnetic device which provides precise control of Angular position. It has a suitable motor coupled with gears and position feedback sensors",
       types: "Low Torque, High Torque",
       apps: "Robots, CNC"
     },
       {
       id: "22",
       name: "LCDs",
       message: "LCD is a electronic device which uses Liquid Crystal technology to display graphics and text. They often have backlight to make the display visible in dark",
       types: "Monochrome, Colored, QVGA, HD",
       apps: "Display Modules, TV, Smartphones"
     },
       {
       id: "23",
       name: "OLEDs",
       message: "OLED is a electronic device which uses hundreds of LEDs to display graphics and text. They are much vibrant than LCDs",
       types: "Monochrome, Colored, HD, FHD, U-HD, 4K",
       apps: "Display Modules, TV, Smartphones"
     },
       {
       id: "24",
       name: "ICs",
       message: "IC is a collection of electronic components - Resistors, capacitors, diodes etc. All stuffed into a tiny chip and connected together to achieve a common goal",
       types: "(DIP)Dual-inline packages, Surface-Mount (SMD/SMT) packages",
       apps: "Amplifiers, Drivers, Controllers etc."
     },
       {
       id: "25",
       name: "Logic Gates",
       message: "Logic Gate is a digital electronic device which takes input (HIGH/1 or LOW/0) at one or more pins, performs a logical operation and gives output (HIGH/1 or LOW/0) at output pins",
       types: "AND, OR, NOT, NAND, NOR, XOR, XNOR",
       apps: "Event Detection, Parity Checker, Inverters etc"
     },
       {
       id: "26",
       name: "555 Timers",
       message: "555 Timer is an Digital IC, which generates digital pulses as per its mode of operation - Astable, Bistable, Monostable",
       types: "DIP, SMD, Derivatives (556 dual timer, 558 quad timer)",
       apps: "Pulse Generator, Oscillator, Timer"
     },
       {
       id: "27",
       name: "op-Amps",
       message: "op-amp a.k.a Operational Amplifier is a DC powered IC. A High Gain Voltage amplifier, which amplifies the difference between two input signals ",
       types: "DIP, SMD, Commercial type, Precession type",
       apps: "Differential Amp, Inverting Amp, Non-Inverting Amp, Voltage follower, Summing Amp etc."
     },
       {
       id: "28",
       name: "Driver ICs",
       message: "Driver IC is purposely designed IC used to control/power special electronic components like LEDs, Motors, Displays, Speakers etc",
       types: "DIP, SMD",
       apps: "Motor Drivers (eg. L293D), Speaker Drivers (eg. LM386), Display Drivers (eg. MAX7219) etc."
     },
       {
       id: "29",
       name: "Voltage Regulators",
       message: "Voltage regulator is a power supply IC, which is used to step down input DC voltages by converting the excess voltage into heat",
       types: "DIP, SMD, Fixed Voltage, Adjustable Voltage",
       apps: "Power Supply, Chargers"
     },
       {
       id: "30",
       name: "ADC Converters",
       message: "ADC (Analog to Digital Converter) is an IC which converts the input Analog signals into Digital Signals. If the amplitude of analog signal is above predefined threshold, It outputs HIGH (1) & If below the threshold, It outputs LOW (0)",
       types: "DIP,SMD",
       apps: "Music recording, Digital Signal Processing, Rotary encoder etc."
     },
       {
       id: "31",
       name: "Light Sensors",
       message: "A Light Sensor is a light sensitive transistor, which outputs Analog voltage according to change in Ambient Light. More the Light, More the voltage",
       types: "DIP,SMD",
       apps: "Smart Lights, Light Sensing"
     },
       {
       id: "32",
       name: "Temperature Sensors",
       message: "Temperature Sensor is a temperature sensitive transistor, which outputs Analog voltage according to change in Ambient temperature",
       types: "DIP,SMD",
       apps: "Temperature Sensing, Thermometers"
     },
       {
       id: "33",
       name: "Pressure Sensor",
       message: "A Pressure Sensor provides atmospheric pressure data through the I2C Communication. This Data can be further used to calculate Altitude",
       types: "DIP,SMD",
       apps: "Altitude Sensing, Pressure sensing"
     },
       {
       id: "34",
       name: "Flex/Force Sensors",
       message: "Flex/Force Sensor is a variable resistor whose resistance varies according to the force applied on it. Larger the force, lesser the resistance",
       types: "Strip Type",
       apps: "Force Measurement"
     },
       {
       id: "35",
       name: "Accelerometers",
       message: "Accelerometer is a Analog sensor which outputs analog voltage as per the motion of the sensor in 3 dimensions. When moved in x-axis, outputs analog signal on x-pin (0-255), similarly analog outputs on y-pin for y-axis motion and on z-pin for z-axis motion",
       types: "Break-outs, SMD",
       apps: "Pedometers, Flight Control in Quadcopters"
     },
       {
       id: "36",
       name: "IMUs",
       message: "An IMU (Inertial measurement unit) consists of 3-axis Accelerometer, 3-axis Gyroscope & 3-axis Magnetometer, offering a 9 degrees of Freedom.",
       types: "Break-outs, SMD",
       apps: "Aircrafts Auto-pilot, Flight control System, Robots"
     },
       {
       id: "37",
       name: "Hall Effect Sensors",
       message: "Hall effect sensor is a magnetic field sensitive transistor. It outputs analog voltage when exposed to magnetic fields",
       types: "Through hole, break-out",
       apps: "Non-Contact Switch, Magnetic Field detection, Mine Detection"
     },
       {
       id: "38",
       name: "Sound Sensors",
       message: "A Sound sensor consists of a Microphone and an op-amp. It outputs Analog signals when it picks any Sound from the environment",
       types: "Break-outs",
       apps: "Noise detection, Intruder detection"
     },
       {
       id: "39",
       name: "PIR Motion Sensors",
       message: "PIR Motion Sensors detects motion by detecting the change in Infrared Heat Signatures which are often caused by Humans or animals",
       types: "Breakout, module",
       apps: "Intruder Detection"
     },
       {
       id: "40",
       name: "Moisture Sensors",
       message: "A Moisture sensor consists of 2 bare metal contact strips, an op-amp detects the flow of current between these strips. This current is proportional to the moisture content between the strips. Thus providing a analog data for moisture content",
       types: "Modules",
       apps: "Automated Plant Watering, Moisture/Rain detection"
     },
       {
       id: "41",
       name: "Ultrasonic Sensors",
       message: "Ultrasonic sensor uses a ultrasonic speaker and a detector to measure distances upto 5 meters. It sends a ultrasonic sound wave and then waits for an echo. The time taken for an echo determines the distance of the object",
       types: "Modules",
       apps: "Robotics, Distance Measurement"
     },
       {
       id: "42",
       name: "Pulse Sensors",
       message: "A pulse sensor consists of a light source and a detector. It detects your pulse rate by measuring the light reflected by the blood pumped under the skin. As the heart pumps the blood, more light is reflected back. Thus a microcontroller detects the number of pulses by counting reflections per minute",
       types: "Modules",
       apps: "Health Monitor, DIY-Pulse sensor"
     },
       {
       id: "43",
       name: "Gesture Sensors",
       message: "A Gesture sensor consists of 4 proximity sensors which detects hand gestures like waving handfrom left to right, up and down etc.",
       types: "Modules",
       apps: "Touch less controls, Home Automation"
     },
       {
       id: "44",
       name: "Muscle Sensor",
       message: "Muscle sensor detects the contraction and relaxing of muscles using the electromyography technique. Detecing the electric impulses from the muscles and sending to the microcontroller.",
       types: "Modules",
       apps: "Bionics"
     },
       {
       id: "45",
       name: "Fingerprint Sensors",
       message: "A fingerprint sensor consists of a optical sensor and a 32-bit CPU which processes the fingerprint of the user and store the raw images in the database. These images are used to authenticate the user in future",
       types: "Modules",
       apps: "Home Security System"
     },
       {
       id: "46",
       name: "Microcontrollers",
       message: "A Microcontroller consists of a System on Chip (SoC) containing a processor core, memory and programmable I/O peripherals. A Microcontroller can be programmed to get data from sensors, process and provide output through LCDs, LED's, Motors, Servos or actuators. They communicate with other devices through UART, SPI, I2C protocol",
       types: "(DIP/SMD) ATMEL, AVR, NXP, PICAXE, Freescale, ST etc.",
       apps: "Automation, Robotics"
     },
       {
       id: "47",
       name: "Microprocessors",
       message: "A Microprocessor consist of a High Speed computer processor on a single IC. Unlike Microcontrollers, They require additional memory chip to work. They are capable to perform multiple tasks at higher processing speeds",
       types: "8-bit, 16-bit, 32-bit, 64-bit, RISC, Multi-core",
       apps: "Computers, Robotics, Smartphones"
     },
       {
       id: "48",
       name: "SoC",
       message: "A SoC (System on Chip) is chip which integrates all the components of a computer on it. They are low-powered and are ideal for embedded projects",
       types: "SMT Chips",
       apps: "Single-board computers, Smartphones"
     },
       {
       id: "49",
       name: "IoT",
       message: "IoT a.k.a Internet of Things. The term refers to creating a network of things used in our daily life, The network in which the things communicate with each other, take smart decisions by themselves. Provide precise measurements on a smart dashboard for the user to monitor",
       types: "One of a Kind",
       apps: "Home/Office/School/City Automation"
     },
       {
       id: "50",
       name: "Arduino",
       message: "Arduino is a (open source) Microcontroller development board often used by Newbies, Makers and even Experts due to its easy to use/program IDE, Easier I/O Pins access, lesser software/driver installation, vast varieties of shields to choose from, Huge user support forum & Inexpensiveness. Just write the code and hit upload. You're good to go!",
       types: "Uno (ATMEGA328p-pu), Nano, Yun, Duemilanove, Mega",
       apps: "Robotics, Home automation and more"
     },
       {
       id: "51",
       name: "ATMEL Xplained",
       message: "ATMEL Xplained is a fast prototyping and evaluation platform for Atmel AVR & Atmel SMART ARM based Microcontrollers",
       types: "WINC1500 Xplained Pro Starter Kit, BTLC1000 Xplained Pro, SAM4S Xplained Pro etc.",
       apps: "Evaluation of Atmel MCUs"
     },
       {
       id: "52",
       name: "TI Launchpad",
       message: "TI Launchpad is the second most popular devlopment board after Arduino. TI Launchpads are used to get started with TI (Texas Instruments) Microcontrollers. They have a large variety of Launchpads for various MCUs with Booster Packs to enhance the capabilities. TI Launchpad is wasy to program using Energia IDE which is similar to rduino IDE",
       types: "CC2000 Launchpad, CC3200 Launchpad etc.",
       apps: "Robotics, Home automation and more"
     },
       {
       id: "53",
       name: "NXP Freedom Dev Board",
       message: "Freedom development boards are small, low-power, cost-effective evaluation and development platforms perfect for quick application prototyping and demonstration of Kinetis MCU families and NXP sensors",
       types: "Kinetis E, L, K, KEA, V, W Series",
       apps: "Evaluation of NXP Kinetis MCUs"
     },
       {
       id: "54",
       name: "Raspberry Pi",
       message: "Raspberry Pi is a Credit-Card sized, single-board computer which costs just $30. You can connect Keyboard, Mouse, Webcams to it using on board USB ports. It runs custom Linux OS called Raspbian. You can create spreadsheets, word processing, browse internet or even play games on a pi. Python scripts can be run to access 40 GPIOs available on Raspberry Pi",
       types: "Pi3 Model B, Pi2 Model B, Pi1 Model A+, Pi zero",
       apps: "Home Automation, IoT, Basic PC Applications"
     },
       {
       id: "55",
       name: "Intel Edison",
       message: "Intel Edison is ultra small computing platform. It is powered by intel Atom SoC Dual core CPU with WiFi, BLE and a 70 pin connector. It runs linux. Meeting all the needs of Makers, Beginners & inventors. It's low power & small footprint make it ideal for IoT applications",
       types: "One of a Type",
       apps: "IoT, Robotics, Home Automation"
     },
       {
       id: "56",
       name: "Beaglebone Black",
       message: "BeagleBone Black is a development kit based on an AM335x processor which integrates an ARM Cortex-A8 core operating at up to 1GHz.It provides lots of expansion interfaces such as Ethernet, USB host and OTG, TF card, serial, JTAG (no connector by default), HDMI D type, Emmc, ADC, I2C, SPI, PWM and LCD. It runs Linux and supports Cloud9 IDE running Javascript code",
       types: "Beaglebone Black & Beaglebone Green",
       apps: "IoT, Intelligent Systems, Home Automation"
     },
       {
       id: "57",
       name: "ESP8266",
       message: "ESP8266 is a self contained SoC with integrated TCP/IP Protocol. It's a high power Microcontroller with Internet Connectivity. It is low cost $6 only. Thus making it a perfect choice fot IoT applications. It supports 1MB Flash, SPI, UART and possess a 32-bit CPU",
       types: "ESP8266 ESP01-12 & 12E",
       apps: "IoT, Remote Applications, Automation"
     },
       {
       id: "58",
       name: "Particle Photon",
       message: "Particle Photon is a powerful IoT Platform which consist of 120Mhz ARM-Cortex M3 Microcontroller with a Broadcom WIFi Chip. The board costs $19 and comes with life time connectivity with the Particle Cloud. A dashboard is also provided to monitor the status of each board along with the data published.",
       types: "Particle Photon, Particle Electron (GSM)",
       apps: "IoT, Remote Application, Automation"
     },
       {
       id: "59",
       name: "Electric Imp",
       message: "Electric Imp is a SD-Card form factor IoT dev platform. It is powered by a Cortex-M3 Processor core and a 802.11b/g/n WiFi Transceiver. Development is done in browser and in a language called Squirrel",
       types: "One of a kind",
       apps: "IoT, Remote Application, Automation"
     },
       {
       id: "60",
       name: "RedBear Duo",
       message: "RedBear Duo is a revolutionary IoT Development board developed by RedBear Labs. It Contains the power of WiFi as well as BLuetooth LE. Powered by STM32F205 ARM Cortex-M3 and Broadcom BCM43438 Wi-Fi 802.11n (2.4GHz only) + Bluetooth 4.1 (Dual Mode) combo chip",
       types: "One of a kind",
       apps: "IoT, Remote Application, Automation, Offline Smartphone Controlable"
     } 
   ],
   getChats: function() {
     return this.chats;
   },
   getChat: function(chatId) {
     for(i=0;i<this.chats.length;i++){
       if(this.chats[i].id == chatId){
         return this.chats[i];
       }
     }
   }
 }
})
.config(function($stateProvider, $urlRouterProvider) {

 $stateProvider
   .state('chats', {
     url: "/chats",
     views: {
    'menuContent':{
     templateUrl: "templates/chats.html",
     controller: "ChatsCtrl"
         }
     }
   })
 .state('ohmslaw', {
     url: "/chats/ohms",
     views: {
    'menuContent':{
     templateUrl: "templates/ohmslaw.html",
         }
     }
   })
 .state('led', {
     url: "/chats/led",
     views: {
    'menuContent':{
     templateUrl: "templates/led.html",
         }
     }
   })
 .state('battery', {
     url: "/chats/battery",
     views: {
    'menuContent':{
     templateUrl: "templates/battery.html",
         }
     }
   })
 .state('iota', {
     url: "/chats/iota",
     views: {
    'menuContent':{
     templateUrl: "templates/iota.html",
         }
     }
   })
 .state('about', {
     url: "/chats/about",
     views: {
    'menuContent':{
     templateUrl: "templates/about.html",
         }
     }
   })
   .state('chatDetails', {
     url: "/chats/:chatId",
     views: {
    'menuContent':{
     templateUrl: "templates/chatDetails.html",
     controller: "ChatDetailsCtrl"
        }
     }
   });

 $urlRouterProvider.otherwise("/chats");
})
