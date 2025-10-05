import { themeConfig } from './theme';

export const getCSSVariable = (variableName: string): string => {
  if (typeof window !== 'undefined') {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(variableName)
      .trim();
  }
  return '';
};

export const setCSSVariable = (variableName: string, value: string): void => {
  if (typeof window !== 'undefined') {
    document.documentElement.style.setProperty(variableName, value);
  }
};

export const applyTheme = (customTheme?: Partial<typeof themeConfig>) => {
  const theme = { ...themeConfig, ...customTheme };
  
  if (typeof window !== 'undefined') {
    const root = document.documentElement;
    
    Object.entries(theme.colors).forEach(([key, value]) => {
      const cssVar = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVar, value);
    });
    
    root.style.setProperty('--font-family', theme.typography.fontFamily);
    
    Object.entries(theme.typography.fontSizes).forEach(([key, value]) => {
      const cssVar = `--font-size-${key}`;
      root.style.setProperty(cssVar, value);
    });
    
    Object.entries(theme.typography.fontWeights).forEach(([key, value]) => {
      const cssVar = `--font-weight-${key}`;
      root.style.setProperty(cssVar, value.toString());
    });
    
    Object.entries(theme.spacing).forEach(([key, value]) => {
      const cssVar = `--spacing-${key}`;
      root.style.setProperty(cssVar, value);
    });
    
    Object.entries(theme.borderRadius).forEach(([key, value]) => {
      const cssVar = `--border-radius-${key}`;
      root.style.setProperty(cssVar, value);
    });
    
    Object.entries(theme.shadows).forEach(([key, value]) => {
      const cssVar = `--shadow-${key}`;
      root.style.setProperty(cssVar, value);
    });
  }
};

export { themeConfig };