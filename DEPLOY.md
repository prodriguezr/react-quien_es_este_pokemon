# 🚀 Guía de Despliegue - GitHub Pages

Esta guía te ayudará a desplegar tu aplicación de Pokémon en GitHub Pages.

## 📋 Prerrequisitos

1. **Cuenta de GitHub**: Necesitas una cuenta de GitHub
2. **Repositorio**: Tu código debe estar en un repositorio de GitHub
3. **Permisos**: Debes tener permisos de administrador en el repositorio

## 🔧 Configuración Inicial

### 1. Crear el Repositorio

Si aún no tienes el repositorio en GitHub:

```bash
# Inicializar git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit"

# Crear el repositorio en GitHub y luego:
git remote add origin https://github.com/tu-usuario/pokemon.git
git branch -M main
git push -u origin main
```

### 2. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. Guarda la configuración

### 3. Configurar Permisos

1. Ve a **Settings** → **Actions** → **General**
2. En **Workflow permissions**, selecciona **Read and write permissions**
3. Guarda los cambios

## 🚀 Despliegue Automático

Una vez configurado, cada vez que hagas push a la rama `main`, la aplicación se desplegará automáticamente.

### Verificar el Despliegue

1. Ve a la pestaña **Actions** en tu repositorio
2. Verifica que el workflow se ejecute correctamente
3. Una vez completado, tu aplicación estará disponible en:
   ```
   https://tu-usuario.github.io/pokemon/
   ```

## 🔧 Despliegue Manual

Si prefieres desplegar manualmente:

```bash
# Instalar dependencias
npm install

# Construir la aplicación
npm run build

# Desplegar (requiere gh-pages)
npm run deploy
```

## 🐛 Solución de Problemas

### Error: "Build failed"

1. Verifica que todas las dependencias estén instaladas
2. Revisa los logs en la pestaña Actions
3. Asegúrate de que el código compile localmente

### Error: "Page not found"

1. Verifica que la URL sea correcta
2. Espera unos minutos después del deploy
3. Verifica que GitHub Pages esté habilitado

### Error: "Assets not loading"

1. Verifica que el `base` en `vite.config.ts` sea correcto
2. Asegúrate de que las rutas sean relativas

## 📝 Personalización

### Cambiar el Nombre del Repositorio

Si cambias el nombre del repositorio, actualiza:

1. **vite.config.ts**: Cambia `/pokemon/` por `/nuevo-nombre/`
2. **README.md**: Actualiza todas las URLs
3. **index.html**: Actualiza las meta tags

### Dominio Personalizado

1. Compra un dominio
2. Configura los DNS records
3. Agrega el dominio en **Settings** → **Pages**
4. Actualiza el archivo `public/CNAME`

## 🔍 Verificación

Para verificar que todo funciona:

1. **Localmente**: `npm run dev`
2. **Build**: `npm run build`
3. **Preview**: `npm run preview`
4. **Producción**: Visita la URL de GitHub Pages

## 📞 Soporte

Si tienes problemas:

1. Revisa los logs en GitHub Actions
2. Verifica la configuración de GitHub Pages
3. Asegúrate de que todos los archivos estén committeados

---

¡Tu aplicación de Pokémon estará disponible en GitHub Pages! 🎉
