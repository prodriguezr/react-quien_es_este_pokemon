# 🎮 Juego de Adivinanza de Pokémon

Una aplicación web interactiva donde puedes adivinar Pokémon basándote en sus características. ¡Pon a prueba tus conocimientos sobre Pokémon!

## 🚀 Demo

La aplicación está disponible en: [https://prodriguezr.github.io/react-quien_es_este_pokemon/](https://prodriguezr.github.io/react-quien_es_este_pokemon/)

## 🛠️ Tecnologías Utilizadas

- **React 19** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Bootstrap 5** - Framework CSS
- **Bootstrap Icons** - Iconografía
- **React Confetti** - Efectos visuales
- **PokeAPI** - API de datos de Pokémon

## 🎯 Características

- ✨ Interfaz moderna y responsive
- 🎲 Selección aleatoria de Pokémon
- 🎉 Efectos visuales al ganar
- 📱 Diseño mobile-first
- ⚡ Carga rápida con Vite
- 🎨 UI atractiva con Bootstrap

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18 o superior
- npm o yarn

### Pasos de instalación

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/prodriguezr/react-quien_es_este_pokemon.git
   cd react-quien_es_este_pokemon
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   ```

3. **Configura las variables de ambiente**

   Crea un archivo `.env` en la raíz del proyecto:

   ```env
   # URL de la API de Pokémon
   VITE_POKEAPI_URL=https://pokeapi.co/api/v2/pokemon

   # Número máximo de Pokémon disponibles
   VITE_MAX_POKEMONS=151
   ```

4. **Ejecuta el servidor de desarrollo**

   ```bash
   npm run dev
   ```

5. **Abre tu navegador**

   La aplicación estará disponible en `http://localhost:5173`

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter
- `npm run deploy` - Despliega a GitHub Pages (requiere gh-pages)

## 🌐 Despliegue

### GitHub Pages (Automático)

El proyecto está configurado con GitHub Actions para despliegue automático. Cada vez que hagas push a la rama `main`, la aplicación se desplegará automáticamente.

### Despliegue Manual

Si prefieres desplegar manualmente:

1. **Construye la aplicación**

   ```bash
   npm run build
   ```

2. **Despliega a GitHub Pages**
   ```bash
   npm run deploy
   ```

## 🎮 Cómo Jugar

1. La aplicación selecciona aleatoriamente un Pokémon
2. Observa las características mostradas (tipo, altura, peso, etc.)
3. Intenta adivinar el nombre del Pokémon
4. ¡Si aciertas, verás una celebración con confeti!

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── PokemonDisplay.tsx
│   ├── PokemonForm.tsx
│   ├── PokemonResult.tsx
│   └── Spinner.tsx
├── hooks/              # Custom hooks
│   └── useGameManager.ts
├── interfaces/          # Interfaces TypeScript
│   └── pokemon.interface.ts
├── lib/                # Utilidades
│   └── random-number.ts
├── services/           # Servicios API
│   └── pokemon.service.ts
└── App.tsx            # Componente principal
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [PokeAPI](https://pokeapi.co/) por proporcionar los datos de Pokémon
- [Bootstrap](https://getbootstrap.com/) por el framework CSS
- [React Confetti](https://github.com/alampros/react-confetti) por los efectos visuales
