# 🌍 AprenIdiomas — Proyecto Integrador

**AprenIdiomas** es una plataforma educativa moderna desarrollada como Proyecto Integrador dentro del bootcamp de **Generation México**. El objetivo es optimizar la compra / venta de cursos de lenguas extranjeras mediante una interfaz ágil, estática y altamente optimizada para el usuario final.

---

[![Generation Mexico](https://img.shields.io/badge/Bootcamp-Generation_M%C3%A9xico-red?style=for-the-badge)](https://mexico.generation.org/)
[![Vercel](https://img.shields.io/badge/bundler-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel Status](https://vercelbadge.vercel.app/api/JonathanCaixba/Aprenidiomas---Proyecto-Integrador)](https://aprenidiomas-proyecto-integrador.vercel.app/)
[![JS](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()

---

## 📑 Tabla de contenidos
- [Resumen rápido](#-resumen-rápido)
- [Funcionalidades Clave](#-funcionalidades-clave)
- [Tecnologías principales](#-tecnologías-principales)
- [Guía técnica](#-guía-técnica)
  - [Estructura del repositorio](#estructura-del-repositorio)
  - [Configuración local](#configuración-local)
- [Roadmap: Próximos pasos (Java 8)](#-roadmap-próximos-pasos)
- [Despliegue (CI/CD)](#-despliegue-cicd)
- [Equipo de desarrollo](#-equipo-de-desarrollo)

---

## 🚀 Resumen rápido
Este proyecto utiliza **Vite** para garantizar una experiencia de desarrollo instantánea y una carga en producción ultra rápida. Implementamos una arquitectura limpia donde la lógica de negocio está separada de las vistas para facilitar el mantenimiento y la escalabilidad.

1. **Clonar**: `git clone https://github.com/JonathanCaixba/Aprenidiomas---Proyecto-Integrador.git`
2. **Instalar**: `npm install`
3. **Ejecutar**: `npm run dev`

---

## ✨ Funcionalidades Clave
* **Interfaz Adaptativa:** Diseño 100% responsivo para dispositivos móviles y escritorio.
* **Módulos Dinámicos:** Carga de contenidos de aprendizaje sin recargas innecesarias.
* **Optimización de Recursos:** Manejo eficiente de assets y multimedia para baja latencia.
* **Persistencia Local:** Uso de Web Storage para guardar el progreso del usuario (Sprint actual).

---

## 🛠️ Tecnologías principales
| Tecnología | Uso |
| :--- | :--- |
| **Vite** | Herramienta de construcción y entorno de desarrollo rápido. |
| **Vanilla JS** | Programación lógica y manipulación del DOM. |
| **CSS3 Moderno** | Flexbox y Grid para maquetación avanzada. |
| **Java 8** | *Próximamente:* Implementación de API RESTful con Spring Boot. |
| **Vercel** | Automatización de despliegues y hosting. |

---

## ⚙️ Guía técnica

### Estructura del repositorio
```text
/
├─ public/                # Archivos estáticos
├─ src/                   # Código fuente principal
│  ├─ assets/             # Imágenes, iconos y recursos multimedia
│  ├─ js/                 # Lógica de programación y módulos
│  └─ views/              # Estructuras HTML de las secciones
├─ index.html             # Punto de entrada de la aplicación
├─ package.json           # Dependencias y scripts de Vite
├─ vite.config.js         # Configuración avanzada del servidor
├─ vercel.json            # Configuración para las redirecciones
├─ .gitignore             # Archivos excluidos de Git
└─ README.md              # Documentación técnica
```
### Configuración local

Para poner en marcha este proyecto en tu entorno local, sigue estos pasos técnicos:

**Requisitos previos:** Asegúrate de tener instalado Node.js

**Instalación de dependencias:**
```text
npm install
```
**Servidor de desarrollo: Ejecuta el siguiente comando para iniciar Vite con recarga en tiempo real:**
```text
npm run dev
```
**Compilación para producción: Para generar los archivos optimizados en la carpeta dist/:**
```text
npm run build
```

---

## 🗺️ Roadmap: Próximos pasos
El proyecto se encuentra en una fase de evolución constante. Nuestras próximas metas de desarrollo incluyen la transición a una arquitectura Full Stack:

* ☕ **Próxima integración de Java 8**

* 🏗️ **Backend:** Proximamente

* 🗄️ **Base de Datos Relacional:** Implementación de MySQL para el almacenamiento de usuarios, lecciones y progreso.

* 🔐 **Seguridad:** Autenticación de usuarios.

---

## ☁️ Despliegue (CI/CD):

Este proyecto utiliza un flujo de Integración y Despliegue Continuo para asegurar que la versión en producción siempre sea la más reciente:

- **Hosting:** Vercel.
- **Automatización:** Cada git push a la rama main dispara automáticamente un nuevo proceso de construcción.
- **Configuración de Build:**
  - Build Command: npm run build
  - Publish Directory: dist

---

## 👤 Equipo de desarrollo
| Integrantes: | Roles: | Linkedin:
| :--- | :--- | :---
| **Jonathan Caixba** | Por definir | www.linkedin.com/in/jonathan-caixba
| **Luz Mora** | Por definir |
| **Gabriela Garay** | Por definir |
| **Mari Paz** | Por definir |
| **Enrique Berman** | Por definir |
| **Johan Peña** | Por definir |
| **Ángel Bracamontes** | Por definir | www.linkedin.com/in/arturo-bracamontes

---

***"Esloganxd" — Desarrollado con ❤️ para Generation México @2026***
