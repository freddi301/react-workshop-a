import React from "react";
import { ThemeName, themes } from "./mytheme";

type ThemeSwitcherProps = {
  onChange(themeName: ThemeName): void;
};

/**
 * Un componente che ci fa selezionare il nome del tema
 */
export function ThemeSwitcher({ onChange }: ThemeSwitcherProps) {
  return (
    <>
      theme:&nbsp;
      <select onChange={event => onChange(event.target.value as ThemeName)}>
        {Object.keys(themes).map(themeName => (
          <option key={themeName} value={themeName}>
            {themeName}
          </option>
        ))}
      </select>
    </>
  );
}
