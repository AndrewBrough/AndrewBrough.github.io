declare module "daisyui" {
  /**
   * @description
   * A list of custom themes to append to DaisyTheme type.
   * readonly to allow for type inference.
   */
  type CustomThemes = readonly string[] | string[];
  type DaisyTheme<C extends CustomThemes = []> =
    | "light"
    | "dark"
    | "cupcake"
    | "bumblebee"
    | "emerald"
    | "corporate"
    | "synthwave"
    | "retro"
    | "cyberpunk"
    | "valentine"
    | "halloween"
    | "garden"
    | "forest"
    | "aqua"
    | "lofi"
    | "pastel"
    | "fantasy"
    | "wireframe"
    | "black"
    | "luxury"
    | "dracula"
    | "cmyk"
    | "autumn"
    | "business"
    | "acid"
    | "lemonade"
    | "night"
    | "coffee"
    | "winter"
    | "dim"
    | "nord"
    | "sunset"
    | "caramellatte"
    | "abyss"
    | "silk"
    | C[number];

  const daisyui: PluginWithConfig;
  export default daisyui;
  export type { DaisyConfig, DaisyTheme };
  /**
   * @description
   * Custom themes are not supported by the daisyui plugin.
   * This is a workaround to allow for custom themes to be used.
   *
   * eg.
   * export const enabledThemes = ["light", "dark", "brand", "custom"] as const;
   * export type EnabledThemes = typeof enabledThemes;
   *
   * export const config: TailwindConfig & DaisyConfig<EnabledThemes> = {
   *   // ...
   *   plugins: [daisyui],
   *   daisyui: {
   *     themes: enabledThemes,
   *   }
   * };
   */
  export type Config<C extends CustomThemes = []> = {
    daisyui: DaisyConfig<C>;
  };
}
