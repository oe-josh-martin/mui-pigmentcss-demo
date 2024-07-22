import {
    ThemeColors,
    ThemeSpacing,
} from './theme.types';

export const palette: Record<
    string,
    Record<string, { value: string; name: string }>
> = {
    base: {
        hemocyanin: {
            value: '#180048',
            name: 'Hemocyanin',
        },
        siphon: {
            value: '#100030',
            name: 'Siphon',
        },
    }
};

export const defaultColors: ThemeColors = {
    base: {
        main: palette.base.hemocyanin.value,
        dark: palette.base.siphon.value,
    }
};

export const rem = (px: number, remScale: number): string =>
    `${(px / 10) * remScale}rem`;

export const getSpacing = (remScale: number): ThemeSpacing => ({
    none: 0,
    xxs: rem(4, remScale),
    xs: rem(8, remScale),
    xsSm: rem(12, remScale),
    sm: rem(16, remScale),
    smMd: rem(20, remScale),
    md: rem(24, remScale),
    mdLg: rem(28, remScale),
    lg: rem(32, remScale),
    lgXl: rem(36, remScale),
    xl: rem(40, remScale),
    xxl: rem(48, remScale),
    xxxl: rem(64, remScale),
});

export const getBorderRadius = (remScale: number) => rem(12, remScale);
export const getBorderWidth = (remScale: number) => rem(2, remScale);
