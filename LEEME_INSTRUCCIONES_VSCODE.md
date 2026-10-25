# StreamVIP - Tienda de Streaming con Sistema de Saldo & Panel Admin

¡Bienvenido a tu plataforma de venta de cuentas y perfiles de streaming!

---

## 🚀 Requisitos Previos

1. Tener instalado **Node.js** (Versión 18, 20 o superior).
   - Descárgalo gratis desde: https://nodejs.org/
2. Tener instalado **Visual Studio Code**.
   - Descárgalo gratis desde: https://code.visualstudio.com/

---

## 💻 Pasos para Abrir y Ejecutar en Visual Studio Code

1. **Descomprimir** este archivo `.zip` en una carpeta de tu preferencia (ej: `C:\Proyectos\StreamVIP`).
2. Abre **Visual Studio Code**.
3. En el menú superior haz clic en **Archivo (File) > Abrir Carpeta (Open Folder)** y selecciona la carpeta descomprimida.
4. Abre la terminal integrada en VS Code presionando las teclas:
   - En Windows: `Ctrl + ñ` (o `Ctrl + Shift + ``)
   - O en el menú: **Terminal > Nueva Terminal**.
5. En la terminal escribe y presiona Enter:
   ```bash
   npm install
   ```
6. Una vez instaladas las dependencias, inicia el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
7. En la terminal te aparecerá un enlace como `http://localhost:5173`. Haz clic con `Ctrl + Clic` para abrir tu tienda en el navegador.

---

## 🌐 Cómo Subirlo para que Funcione 24/7 en Internet (Gratis)

Para que tu tienda esté en línea las 24 horas del día, los 7 días de la semana y puedas insertar su enlace en Google Sites:

### Opción 1: Desplegar en Vercel (Recomendado y 100% Gratis)
1. Crea una cuenta gratis en https://vercel.com/
2. Sube esta carpeta a tu cuenta de GitHub (o instala la herramienta Vercel CLI ejecutando `npm i -g vercel` y luego ejecuta el comando `vercel`).
3. Vercel detectará automáticamente que es un proyecto Vite/React y te entregará una URL pública y segura (ejemplo: `https://mitienda-streamvip.vercel.app`).
4. ¡Listo! Esa URL la puedes incrustar en tu Google Sites y funcionará las 24 horas del día sin necesidad de tener tu computadora encendida.

### Opción 2: Desplegar en Netlify o Render
- En https://www.netlify.com/ puedes simplemente arrastrar y soltar la carpeta `dist` generada tras ejecutar `npm run build`.

---

## ⚙️ Estructura del Proyecto

- `/src/components/Storefront.tsx`: Catálogo de plataformas con selector de meses y compra con saldo.
- `/src/components/AdminPanel.tsx`: Panel para recargar saldo a usuarios por ID, modificar precios en soles/dólares y stock.
- `/src/components/MyPurchases.tsx`: Entrega inmediata de credenciales al cliente con copiado en 1 clic.
- `/src/components/GoogleSitesEmbed.tsx`: Generador de código para insertar en Google Sites.
- `/src/context/StoreContext.tsx`: Motor central con saldo, cálculo de monedas y persistencia en LocalStorage.

¡Éxito en tus ventas!