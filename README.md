# 🎨 Administrador de Colores - React

## 🧠 Descripción

Aplicación web que permite ingresar, visualizar y eliminar colores. Los colores pueden ser ingresados en español o inglés, y se muestran visualmente en pantalla.

---

## 🚀 Funcionalidades

* ➕ Agregar colores
* 🌈 Visualizar colores en pantalla
* ❌ Eliminar colores
* 💾 Persistencia de datos con localStorage
* 🌍 Traducción de colores (español → inglés)

---

## 🛠️ Tecnologías utilizadas

* React
* JavaScript (ES6+)
* Bootstrap
* CSS
* localStorage

---

## 📂 Componentes

* `FormularioColor` → maneja estado y lógica
* `ListaColores` → recorre la lista
* `ItemColor` → muestra cada color

---

## 🧠 Conceptos aplicados

* `useState`
* `useEffect`
* `map`
* `filter`
* `localStorage`
* Manejo de objetos en estado

---

## 💾 Persistencia de datos

Se utiliza `localStorage` para guardar los colores:

```js
localStorage.setItem("colores", JSON.stringify(datos))
const datos = JSON.parse(localStorage.getItem("colores"))
```

---

## ▶️ Cómo ejecutar

```bash
npm install
npm run dev
```

---

## 👩‍💻 Autor

Fátima del Valle Alfaro
