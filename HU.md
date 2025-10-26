
## 📌 Historias de usuario ✨ `HU M6-S1`

### Nombre de la HU:
Portafolio personal con Next.js `App Router` con navegación y formulario de contacto persistente.

### Objetivo de la HU:
Como **coder que construye su marca personal**, quiero crear un **portafolio en Next.js `App Router`** con **rutas/páginas organizadas** y un **formulario de "Contáctame"** que **guarde los mensajes en una base de datos** (y **opcionalmente** en **Google Sheets**) para **presentar mi trabajo y captar oportunidades** de forma profesional.

---

#### TASK 1

**Descripción de la Tarea:** Crear el proyecto Next.js (App Router), configurar app/layout.tsx y un **Header/Nav** común.

> **Criterios de Aceptación:**
> - [x] **CA_01.1:** Proyecto Next creado, corre en npm run dev sin errores.
> - [x] **CA_01.2:** app/layout.tsx define estructura base (html, body) y menú.
> - [x] **CA_01.3:** Estilos modulares o globales organizados.

**Story Points:** 1

---

#### TASK 2

**Descripción de la Tarea:** Páginas y rutas (incluye ruta dinámica). Implementar **Home**, **Projects** (lista) y **Contact** (form), y la ruta **dinámica** /projects/[id]

> **Criterios de Aceptación:**
> - [x] **CA_02.1**: crear /home /projects, /contact.
> - [x] **CA_02.2**: **Menú** navega entre las páginas correctamente.
> - [x] **CA_02.3**: /projects/[slug] muestra detalles de un proyecto (mock o data local).

**Story Points:** 2

---

#### TASK 3

**Descripción de la Tarea:** Formulario de "Contáctame" + validaciones.

Construir el formulario con validación cliente/servidor.

> **Criterios de Aceptación:**
> - [x] **CA_03.1:** Campos obligatorios: fullName, email, message.
> - [ ] **CA_03.2:** Validación + mensajes de error por campo. (puede usar yup)
> - [ ] **CA_03.3:** Estado de envío y feedback de éxito/fracaso.

**Story Points:** 2

---

#### TASK 4

**Descripción de la Tarea:** Persistencia en DB

Guardar cada envío en la **DB** mediante API Route.

> **Criterios de Aceptación:**
> - [ ] **CA_04.1**: Modelo ContactMessage con campos: id, fullName, email, message, createdAt.
> - [ ] **CA_04.2**: Inserción exitosa crea registro en DB.
> - [ ] **CA_04.3**: Manejo de errores y retorno 2xx/4xx/5xx coherente.

**Story Points:** 2

---

#### TASK 5

**Descripción de la Tarea:** Integración opcional con Google Sheets (opcional)

Escribir cada envío también en una **Google Sheet**

> **Criterios de Aceptación:**
> - **CA_05.1:** Configurar credenciales Service Account por .env.
> - **CA_05.2:** Insertar fila con fullName, email, message, createdAt.
> - **CA_05.3:** Retornar estado/errores claros al cliente.

**Story Points:** 2

---

### Cierre de la actividad.

- [ ] Portafolio Next.js con App Router, **3+ páginas** y **navegación**.

- [ ] Formulario **funcional** con **persistencia en DB** y **opcional Google Sheets**.

- [ ] Proyecto **documentado** y **entregable** según requerimientos del entrenamiento. (Basado en la estructura y cierre de tu HU de ejemplo, adaptado al contexto Next.