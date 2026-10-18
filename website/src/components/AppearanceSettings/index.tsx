
import React, {useEffect, useState} from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './styles.module.css';

type Palette = 'raspberry' | 'teal' | 'terracotta' | 'midnight';

const PALETTES: {
  id: Palette;
  label: string;
  light: string;
  dark: string;
}[] = [
  {
    id: 'raspberry',
    label: 'Raspberry',
    light: '#B4235A',
    dark: '#F472A6',
  },
  {
    id: 'teal',
    label: 'Ocean Teal',
    light: '#087F78',
    dark: '#5EE0CC',
  },
  {
    id: 'terracotta',
    label: 'Terracotta',
    light: '#B54725',
    dark: '#FFAD83',
  },
  {
    id: 'midnight',
    label: 'Midnight Blue',
    light: '#274C8E',
    dark: '#8CB8FF',
  },
];

const STORAGE_KEY = 'de-toolbox-accent';
const CHANGE_EVENT = 'de-toolbox-accent-change';

export default function AppearanceSettings({
  mobile = false,
}: {
  mobile?: boolean;
}): React.JSX.Element {
  const [palette, setPalette] = useState<Palette>('teal');
  const [hydrated, setHydrated] = useState(false);
  const {colorMode, setColorMode} = useColorMode();

  useEffect(() => {
    let initial: Palette = 'teal';

    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (PALETTES.some((p) => p.id === saved)) {
        initial = saved as Palette;
      }
    } catch {
      // Browser storage might be unavailable.
    }

    setPalette(initial);
    document.documentElement.dataset.accent = initial;
    setHydrated(true);

    const syncPalette = (event: Event) => {
      setPalette((event as CustomEvent<Palette>).detail);
    };

    window.addEventListener(CHANGE_EVENT, syncPalette);

    return () => {
      window.removeEventListener(CHANGE_EVENT, syncPalette);
    };
  }, []);

  function selectPalette(next: Palette) {
    setPalette(next);
    document.documentElement.dataset.accent = next;

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Continue without persistence.
    }

    window.dispatchEvent(
      new CustomEvent(CHANGE_EVENT, {detail: next}),
    );
  }

  const menu = (
    <details className={styles.details}>

        <summary
        className={styles.trigger}
        aria-label="Appearance settings"
        title="Customize appearance"
        >
        <span aria-hidden="true">🎨</span>
        <span className={styles.triggerLabel}></span>
        </summary>


    <div className={styles.panel}>
        <strong>Color palette</strong>

        <div className={styles.paletteGrid}>
            {PALETTES.map((option) => (
            <button
                key={option.id}
                type="button"
                className={styles.paletteButton}
                aria-pressed={palette === option.id}
            onClick={() => selectPalette(option.id)}
            >
            <span className={styles.swatches}>
                <span style={{background: option.light}} />
                <span style={{background: option.dark}} />
            </span>

                {option.label}
            </button>
            ))}
        </div>

        <strong>Display mode</strong>

        <div className={styles.modeButtons}>
            <button
            type="button"
            aria-pressed={
                hydrated ? colorMode === 'light' : undefined
            }
            onClick={() => setColorMode('light')}
            >
            ☀️
            </button>

            <button
            type="button"
            aria-pressed={
                hydrated ? colorMode === 'dark' : undefined
            }
            onClick={() => setColorMode('dark')}
            >
            🌙
            </button>
        </div>
        </div>
    </details>
    );

    return mobile ? (
    <li className={`menu__list-item ${styles.mobileItem}`}>
        {menu}
    </li>
    ) : (
    <div className={`navbar__item ${styles.desktopItem}`}>
        {menu}
    </div>
    );
}
