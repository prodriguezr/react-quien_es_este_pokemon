/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_POKEAPI_URL: string;
  readonly VITE_MAX_POKEMONS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
