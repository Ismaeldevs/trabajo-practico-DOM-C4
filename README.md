# Entrega del Trabajo Práctico

Esta guía describe los pasos que deben seguir para subir correctamente su trabajo práctico al repositorio.

---

## Requisitos previos

- Tener instalado [Git](https://git-scm.com/)
- Tener acceso al repositorio de la materia

---

## Pasos para la entrega

### 1. Clonar el repositorio

Abrir una terminal y ejecutar el siguiente comando:

```bash
git clone <url-del-repositorio>
```

Luego ingresar a la carpeta del repositorio:

```bash
cd <nombre-del-repositorio>
```

---

### 2. Crear su rama personal

Crear una rama nueva utilizando su número de legajo:

```bash
git checkout -b "legajo"
```

> **Ejemplo:** `git checkout -b "12345"`

---

### 3. Crear su carpeta personal

Dentro del repositorio, crear una carpeta con el siguiente formato:

```
legajo-apellido-nombre
```

> **Ejemplo:** `12345-garcia-juan`

---

### 4. Agregar el trabajo práctico resuelto

Colocar todos los archivos de su trabajo práctico resuelto dentro de la carpeta creada en el paso anterior.

---

### 5. Subir los cambios al repositorio

Ejecutar los siguientes comandos en orden:

```bash
git add "nombre-de-su-carpeta"
```

```bash
git commit -m "trabajo practico resuelto"
```

```bash
git push -u origin "nombre-de-su-rama"
```

> **Ejemplo:**
> ```bash
> git add "12345-garcia-juan"
> git commit -m "trabajo practico resuelto"
> git push -u origin "12345"
> ```

---

### 6. Crear la Pull Request

1. Ingresar al repositorio en GitHub.
2. Hacer clic en el botón **"Compare & pull request"** que aparece luego del push.
3. Verificar que la rama base sea `main` y que la rama de comparación sea la suya.
4. Agregar como título su **legajo, apellido y nombre**.
5. Hacer clic en **"Create pull request"**.

---

## Resumen de comandos

```bash
git clone <url-del-repositorio>
cd <nombre-del-repositorio>
git checkout -b "legajo"
# Crear carpeta y agregar archivos del TP
git add "legajo-apellido-nombre"
git commit -m "trabajo practico resuelto"
git push -u origin "legajo"
# Crear Pull Request desde GitHub
```

---

> Ante cualquier duda, consultar al docente antes de la fecha de entrega.
