// This module declaration allows TypeScript to understand and properly type-check .vue files when imported in a TypeScript environment.

declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
  