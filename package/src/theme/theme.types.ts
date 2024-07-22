export interface BaseColorSet {
    main: string;
    dark: string;
}

export interface ThemeColors {
    base: BaseColorSet;
}

export interface ThemeSpacing {
    none: number;
    xxs: string;
    xs: string;
    xsSm: string;
    sm: string;
    smMd: string;
    md: string;
    mdLg: string;
    lg: string;
    lgXl: string;
    xl: string;
    xxl: string;
    xxxl: string;
}

export type ThemePadding = keyof ThemeSpacing;

export type ThemeMargin = keyof ThemeSpacing | 'auto';
