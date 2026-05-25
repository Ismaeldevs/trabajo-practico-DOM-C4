# Entrega del Trabajo Práctico

Esta guía describe los pasos que deben seguir para subir correctamente su trabajo práctico al repositorio utilizando Forks y Pull Requests.

---

## Requisitos previos

- Tener instalado [Git](https://git-scm.com/)
- Tener una cuenta de GitHub

---

# Pasos para la entrega

## 1. Hacer un Fork del repositorio

Ingresar al repositorio original en GitHub y hacer clic en el botón **"Fork"** ubicado arriba a la derecha.

Esto creará una copia del repositorio en su propia cuenta de GitHub.

---

## 2. Clonar su Fork

Abrir una terminal y ejecutar el siguiente comando:

```bash
git clone <url-de-su-fork>
```

> **Ejemplo:**
>
> ```bash
> git clone https://github.com/usuario/trabajo-practico.git
> ```

Luego ingresar a la carpeta del repositorio:

```bash
cd <nombre-del-repositorio>
```

---

## 3. Crear su rama personal

Crear una rama nueva utilizando su número de legajo:

```bash
git checkout -b "legajo"
```

> **Ejemplo:**
>
> ```bash
> git checkout -b "12345"
> ```

---

## 4. Crear su carpeta personal

Dentro del repositorio, crear una carpeta con el siguiente formato:

```text
legajo-apellido-nombre
```

> **Ejemplo:**
>
> ```text
> 12345-garcia-juan
> ```

---

## 5. Agregar el trabajo práctico resuelto

Colocar todos los archivos de su trabajo práctico resuelto dentro de la carpeta creada en el paso anterior.

---

## 6. Subir los cambios a su Fork

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
>
> ```bash
> git add "12345-garcia-juan"
> git commit -m "trabajo practico resuelto"
> git push -u origin "12345"
> ```

---

## 7. Crear la Pull Request

1. Ingresar a su Fork en GitHub.
2. Hacer clic en el botón **"Compare & pull request"** que aparece luego del push.
3. Verificar que:
   - La rama base sea `main` del repositorio original.
   - La rama de comparación sea su rama personal.
4. Agregar como título su:
   - **legajo**
   - **apellido**
   - **nombre**
5. Hacer clic en **"Create pull request"**.

---

# Resumen de comandos

```bash
# Clonar su fork
git clone <url-de-su-fork>

# Entrar al repositorio
cd <nombre-del-repositorio>

# Crear rama personal
git checkout -b "legajo"

# Crear carpeta y agregar archivos del TP

# Agregar cambios
git add "legajo-apellido-nombre"

# Crear commit
git commit -m "trabajo practico resuelto"

# Subir rama a su fork
git push -u origin "legajo"

# Crear Pull Request desde GitHub
```

---

> Ante cualquier duda, consultar al docente antes de la fecha de entrega.
