![cover page](./coffee-queen/src/assets/portada2.png)
# Coffee Queen (API Client)

## Índice

* [1. Introducción](#1-introducción)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones Generales](#3-consideraciones-generales)
* [4. Criterios de aceptación del proyecto](#4-criterios-de-aceptación-del-proyecto)
* [5. Autoras](#5-autoras)
* [6. Objetivos de aprendizaje](#6-objetivos-de-aprendizaje)

***

## 1. Introducción 📌

Tomar un café en ‘Coffee Queen’ en compañía de amigos y familiares tiene un significado más profundo y emocional. Esta cafetería tiene como propósito no sólo brindar el mejor café del mundo, sino que desea ofrecer un espacio tranquilo, moderno y tecnológico tanto para clientes como trabajadores. Pues cuentan con una web app para tablets que permite a los meseros llevar su sistema con ellos por todo el lugar, ingresando pedidos que son enviados al jefe de cocina haciendo más eficiente el proceso. Además de llevar un inventario robusto y la gestión de productos para el administrador. Por lo que esta aplicación ofrece informes fácilmente comprensibles que les permita a meseros, jefe de cocina y administrador tomar las decisiones en tiempo real y a largo plazo necesarias para mantener e incluso aumentar la rentabilidad.

## 2. Resumen del proyecto 📋

Coffee Queen es una pequeña cafetería con un sistema en el cual puedan tomar pedidos usando una _tablet_, y enviarlos a la cocina para que se preparen ordenada y eficientemente. Este proyecto consta de dos áreas: interfaz (cliente) y API (servidor). Se nos ha solicitado desarrollar la interfaz que se integre con la API que otro equipo de desarrolladoras está trabajando simultáneamente. 

El objetivo principal es aprender a construir una _interfaz web_ usando
el _framework_ Angular. Donde la aplicación debe ser un Single Page App y no debe ser una app nativa, sino una web app que sea mobile-first.

## 3. Definición del producto 📎

### 3.1. Historias de Usuario y Criterios de Aceptación 📢 📝

![cover page](./coffee-queen/src/assets/HU.png)

#### [Historia de usuario 1] Mesero/a debe poder ingresar al sistema, si el admin ya le ha asignado credenciales
```
HU:  🗣️ Yo como meserx quiero poder ingresar al sistema de pedidos.

📍 Criterios de Aceptación:
  Acceder a una pantalla de login.
  Ingresar email y contraseña.
  Recibir mensajes de error comprensibles, dependiendo de cuál es el error con la información ingresada.
  Ingresar al sistema de pedidos si las crendenciales son correctas. 
```

#### [Historia de usuario 2] Mesero/a debe poder tomar pedido de cliente/a
```
HU:  🗣️ Yo como meserx quiero tomar el pedido de unx clientx para no depender de mi mala memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y que se puedan ir preparando en orden.

📍 Criterios de aceptación
  Anotar nombre de clientx.
  Agregar productos al pedido.
  Eliminar productos.
  Ver resumen y el total de la compra.
  Enviar pedido a cocina (guardar en alguna base de datos).
  Se ve y funciona bien en una _tablet_
```

#### [Historia de usuario 3] Jefe de cocina debe ver los pedidos
```
HU:  🗣️ Yo como jefx de cocina quiero ver los pedidos de lxs clientxs en orden y marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs que un pedido está listo para servirlo a un clientx.

📍 Criterios de aceptación
  Ver los pedidos ordenados según se van haciendo.
  Marcar los pedidos que se han preparado y están listos para servirse.
  Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se marcó como completado.
```

#### [Historia de usuario 4] Meserx debe ver pedidos listos para servir
```
HU:  🗣️ Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a lxs clientxs que las hicieron.

📍 Criterios de aceptación
  Ver listado de pedido listos para servir.
  Marcar pedidos que han sido entregados.
```

#### [Historia de usuario 5] Administrador(a) de tienda debe administrar a sus trabajadorxs
```
HU:  🗣️ Yo como administrador(a) de tienda quiero gestionar a los usuarios de la plataforma para mantener actualizado la informacion de mis trabajadorxs.

📍 Criterios de aceptación
  Ver listado de trabajadorxs.
  Agregar trabajadorxs.
  Eliminar trabajadoxs.
  Actualizar datos de trabajadorxs.
```

#### [Historia de usuario 6] Administrador(a) de tienda debe administrar a sus productos
```
HU:  🗣️ Yo como administrador(a) de tienda quiero gestionar los productos
para mantener actualizado el menú.

📍 Criterios de aceptación
  Ver listado de productos.
  Agregar productos.
  Eliminar productos.
  Actualizar datos de productos.
```
### 3.2. Interfaz 🚀
agregar gif demo

## 4. Consideraciones Generales 🚨

- Uso de [json-server](https://www.npmjs.com/package/json-server) para mockear la API.

- La lógica del proyecto esta implementada en TypeScript, HTML y SASS y empaquetada de manera automatizada.

- Uso del framework [Angular](https://angular.io/)).

- Es un aplicación _Single Page App_.

- La aplicación desplegada tiene 80% o más el las puntuaciones de
Performance, Progressive Web App, Accessibility y Best Practices de Lighthouse.

- Los tests unitarios cubren un mínimo del 90% de _statements_, _functions_,
_lines_ y _branches_.

## 5. Autoras ✒️
Elaborado con 💛❤️ por:

😊 Mariana Guanda - [marianagdeveloper](https://github.com/marianagdeveloper)

😊 Milagros León - [Milagros-Lc](https://github.com/Milagros-Lc)

😊 Fiorela Azahuanche - [fio-azahuanche](https://github.com/fio-azahuanche)

## 6. Objetivos de aprendizaje 📄

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [x] **Uso de HTML semántico**

### CSS

- [x] **Uso de selectores de CSS**

- [ ] **Modelo de caja (box model): borde, margen, padding**

- [ ] **Uso de flexbox en CSS**

- [ ] **Uso de CSS Grid Layout**

- [ ] **Uso de media queries**

### JavaScript

- [ ] **Pruebas unitarias (unit tests)**

- [ ] **Pruebas asíncronas**

- [ ] **Uso de mocks y espías**

- [ ] **Módulos de ECMAScript (ES Modules)**

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [x] **Git: Instalación y configuración**

- [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [x] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [x] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [x] **GitHub: Despliegue con GitHub Pages**

- [x] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

- [x] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### HTTP

- [ ] **Consulta o petición (request) y respuesta (response).**

- [ ] **Cabeceras (headers)**

- [ ] **Cuerpo (body)**

- [ ] **Verbos HTTP**

- [ ] **Codigos de status de HTTP**

- [ ] **Encodings y JSON**

- [ ] **CORS (Cross-Origin Resource Sharing)**

### Angular

- [x] **Components & templates**

- [x] **Directivas estructurales (ngIf / ngFor)**

- [x] **@Input | @Ouput**

- [x] **Creación y uso de servicios**

- [x] **Manejo de rutas**

- [x] **Creación y uso Observables.**

- [x] **Uso de HttpClient**

- [ ] **Estilos de componentes (ngStyle / ngClass)**

### user-centricity

- [x] **Diseñar un producto o servicio poniendo a la usuaria en el centro**

### product-design

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [x] **Seguir los principios básicos de diseño visual**

### research

- [ ] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**
