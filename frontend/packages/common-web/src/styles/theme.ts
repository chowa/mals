import { PaletteMode } from '@mui/material';
import {
    SimplePaletteColorOptions,
    ThemeOptions,
    PaletteOptions,
    TypeText,
    TypeBackground,
    TypeAction,
    Shadows,
    alpha,
    Theme
} from '@mui/material/styles';
import cssBaselineDefine from '@mals/common-web/styles/components/css-baseline';
import linearProgressDefine from '@mals/common-web/styles/components/linear-progress';
import buttonDefine from '@mals/common-web/styles/components/button';
import fabDefine from '@mals/common-web/styles/components/fab';
import cardDefine from '@mals/common-web/styles/components/card';
import menuItemDefine from '@mals/common-web/styles/components/menu-item';
import formDefine from '@mals/common-web/styles/components/form';
import autoCompleteDefine from '@mals/common-web/styles/components/auto-complete';
import breadcrumbsDefine from '@mals/common-web/styles/components/breadcrumbs';
import typographDefine from '@mals/common-web/styles/components/typograph';
import accordionDefine from '@mals/common-web/styles/components/accordion';
import backdropDefine from '@mals/common-web/styles/components/backdrop';
import treeViewDefine from '@mals/common-web/styles/components/tree-view';
import timelineDefine from '@mals/common-web/styles/components/timeline';
import skeletonDefine from '@mals/common-web/styles/components/skeleton';
import dataGridDefine from '@mals/common-web/styles/components/data-grid';
import checkboxDefine from '@mals/common-web/styles/components/checkbox';
import svgIconDefine from '@mals/common-web/styles/components/svg-icon';
import popoverDefine from '@mals/common-web/styles/components/popover';
import tooltipDefine from '@mals/common-web/styles/components/tooltip';
import stepDefine from '@mals/common-web/styles/components/step';
import drawerDefine from '@mals/common-web/styles/components/drawer';
import sliderDefine from '@mals/common-web/styles/components/slider';
import avatarDefine from '@mals/common-web/styles/components/avatar';
import dialogDefine from '@mals/common-web/styles/components/dialog';
import ratingDefine from '@mals/common-web/styles/components/rating';
import selectDefine from '@mals/common-web/styles/components/select';
import paperDefine from '@mals/common-web/styles/components/paper';
import tableDefine from '@mals/common-web/styles/components/table';
import listItemDefine from '@mals/common-web/styles/components/list-item';
import badgeDefine from '@mals/common-web/styles/components/badge';
import radioDefine from '@mals/common-web/styles/components/radio';
import inputDefine from '@mals/common-web/styles/components/input';
import linkDefine from '@mals/common-web/styles/components/link';
import tabsDefine from '@mals/common-web/styles/components/tabs';
import paginationDefine from '@mals/common-web/styles/components/pagination';
import switchDefine from '@mals/common-web/styles/components/switch';
import alertDefine from '@mals/common-web/styles/components/alert';
import chipDefine from '@mals/common-web/styles/components/chip';

// #00AB55, #078DEE, #7635dc, #2065D1, #fda92d, #FF3030
export type PrimaryColor = 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red';

export interface CustomShadows {
    z1: string;
    z4: string;
    z8: string;
    z12: string;
    z16: string;
    z20: string;
    z24: string;
    primary: string;
    info: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    card: string;
    dialog: string;
    dropdown: string;
}

export type ThemeContrast = 'default' | 'bold';

declare module '@mui/material/styles' {
    interface ThemeOptions {
        customShadows?: CustomShadows;
        contrast?: ThemeContrast;
    }

    interface Theme {
        customShadows: CustomShadows;
        contrast: ThemeContrast;
    }

    interface SimplePaletteColorOptions {
        lighter?: string;
        darker?: string;
    }

    interface PaletteColor {
        lighter: string;
        darker: string;
    }

    interface TypeBackground {
        neutral?: string;
    }
}

declare module '@mui/system' {
    interface DefaultTheme extends Theme {}
}

const greyColors = {
    0: '#FFFFFF',
    100: '#F9FAFB',
    200: '#F4F6F8',
    300: '#DFE3E8',
    400: '#C4CDD5',
    500: '#919EAB',
    600: '#637381',
    700: '#454F5B',
    800: '#212B36',
    900: '#161C24'
};

type Colors = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

export const colors: Colors[] = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];

const commonColors = {
    black: '#000000',
    white: '#FFFFFF'
};

function getPrimaryColors(color: PrimaryColor): SimplePaletteColorOptions {
    switch (color) {
        case 'cyan':
            return {
                lighter: '#CCF4FE',
                light: '#68CDF9',
                main: '#078DEE',
                dark: '#0351AB',
                darker: '#012972',
                contrastText: '#FFFFFF'
            };

        case 'purple':
            return {
                lighter: '#EBD6FD',
                light: '#B985F4',
                main: '#7635dc',
                dark: '#431A9E',
                darker: '#200A69',
                contrastText: '#FFFFFF'
            };

        case 'blue':
            return {
                lighter: '#D1E9FC',
                light: '#76B0F1',
                main: '#2065D1',
                dark: '#103996',
                darker: '#061B64',
                contrastText: '#FFFFFF'
            };

        case 'orange':
            return {
                lighter: '#FEF4D4',
                light: '#FED680',
                main: '#fda92d',
                dark: '#B66816',
                darker: '#793908',
                contrastText: greyColors[800]
            };

        case 'red':
            return {
                lighter: '#FFE3D5',
                light: '#FFC1AC',
                main: '#FF3030',
                dark: '#B71833',
                darker: '#7A0930',
                contrastText: '#FFFFFF'
            };

        default:
            return {
                lighter: '#C8FACD',
                light: '#5BE584',
                main: '#00AB55',
                dark: '#007B55',
                darker: '#005249',
                contrastText: '#FFFFFF'
            };
    }
}

function getActionColors(mode: PaletteMode): TypeAction {
    return {
        active: mode === 'light' ? greyColors[600] : greyColors[500],
        activatedOpacity: 0.12,
        hover: alpha(greyColors[500], 0.08),
        hoverOpacity: 0.08,
        selected: alpha(greyColors[500], 0.16),
        selectedOpacity: 0.08,
        disabled: alpha(greyColors[500], 0.8),
        disabledBackground: alpha(greyColors[500], 0.24),
        focus: alpha(greyColors[500], 0.24),
        focusOpacity: 0.12,
        disabledOpacity: 0.48
    };
}

function getTextColors(mode: PaletteMode): TypeText {
    if (mode === 'light') {
        return {
            primary: greyColors[800],
            secondary: greyColors[600],
            disabled: greyColors[500]
        };
    } else {
        return {
            primary: '#FFFFFF',
            secondary: greyColors[500],
            disabled: greyColors[600]
        };
    }
}

function getBackgroundColors(mode: PaletteMode, contrast: ThemeContrast): TypeBackground {
    if (mode === 'light') {
        return {
            paper: '#FFFFFF',
            default: contrast == 'bold' ? greyColors[100] : '#FFFFFF',
            neutral: greyColors[200]
        };
    } else {
        return {
            paper: greyColors[800],
            default: contrast == 'bold' ? greyColors[900] : greyColors[900],
            neutral: alpha(greyColors[200], 0.16)
        };
    }
}

function getShadowns(mode: PaletteMode): Shadows {
    const color = mode === 'light' ? greyColors[500] : commonColors.black;
    const dark = alpha(color, 0.2);
    const light = alpha(color, 0.14);
    const main = alpha(color, 0.12);

    return [
        'none',
        `0px 2px 1px -1px ${dark}, 0px 1px 1px 0px ${light}, 0px 1px 3px 0px ${main}`,
        `0px 3px 1px -2px ${dark}, 0px 2px 2px 0px ${light}, 0px 1px 5px 0px ${main}`,
        `0px 3px 3px -2px ${dark}, 0px 3px 4px 0px ${light}, 0px 1px 8px 0px ${main}`,
        `0px 2px 4px -1px ${dark}, 0px 4px 5px 0px ${light}, 0px 1px 10px 0px ${main}`,
        `0px 3px 5px -1px ${dark}, 0px 5px 8px 0px ${light}, 0px 1px 14px 0px ${main}`,
        `0px 3px 5px -1px ${dark}, 0px 6px 10px 0px ${light}, 0px 1px 18px 0px ${main}`,
        `0px 4px 5px -2px ${dark}, 0px 7px 10px 1px ${light}, 0px 2px 16px 1px ${main}`,
        `0px 5px 5px -3px ${dark}, 0px 8px 10px 1px ${light}, 0px 3px 14px 2px ${main}`,
        `0px 5px 6px -3px ${dark}, 0px 9px 12px 1px ${light}, 0px 3px 16px 2px ${main}`,
        `0px 6px 6px -3px ${dark}, 0px 10px 14px 1px ${light}, 0px 4px 18px 3px ${main}`,
        `0px 6px 7px -4px ${dark}, 0px 11px 15px 1px ${light}, 0px 4px 20px 3px ${main}`,
        `0px 7px 8px -4px ${dark}, 0px 12px 17px 2px ${light}, 0px 5px 22px 4px ${main}`,
        `0px 7px 8px -4px ${dark}, 0px 13px 19px 2px ${light}, 0px 5px 24px 4px ${main}`,
        `0px 7px 9px -4px ${dark}, 0px 14px 21px 2px ${light}, 0px 5px 26px 4px ${main}`,
        `0px 8px 9px -5px ${dark}, 0px 15px 22px 2px ${light}, 0px 6px 28px 5px ${main}`,
        `0px 8px 10px -5px ${dark}, 0px 16px 24px 2px ${light}, 0px 6px 30px 5px ${main}`,
        `0px 8px 11px -5px ${dark}, 0px 17px 26px 2px ${light}, 0px 6px 32px 5px ${main}`,
        `0px 9px 11px -5px ${dark}, 0px 18px 28px 2px ${light}, 0px 7px 34px 6px ${main}`,
        `0px 9px 12px -6px ${dark}, 0px 19px 29px 2px ${light}, 0px 7px 36px 6px ${main}`,
        `0px 10px 13px -6px ${dark}, 0px 20px 31px 3px ${light}, 0px 8px 38px 7px ${main}`,
        `0px 10px 13px -6px ${dark}, 0px 21px 33px 3px ${light}, 0px 8px 40px 7px ${main}`,
        `0px 10px 14px -6px ${dark}, 0px 22px 35px 3px ${light}, 0px 8px 42px 7px ${main}`,
        `0px 11px 14px -7px ${dark}, 0px 23px 36px 3px ${light}, 0px 9px 44px 8px ${main}`,
        `0px 11px 15px -7px ${dark}, 0px 24px 38px 3px ${light}, 0px 9px 46px 8px ${main}`
    ];
}

function getCustomShadows(mode: PaletteMode, palette: PaletteOptions): CustomShadows {
    const color = mode === 'light' ? greyColors[500] : commonColors.black;
    const main = alpha(color, 0.16);

    return {
        z1: `0 1px 2px 0 ${main}`,
        z4: `0 4px 8px 0 ${main}`,
        z8: `0 8px 16px 0 ${main}`,
        z12: `0 12px 24px -4px ${main}`,
        z16: `0 16px 32px -4px ${main}`,
        z20: `0 20px 40px -4px ${main}`,
        z24: `0 24px 48px 0 ${main}`,
        primary: `0 8px 16px 0 ${alpha((palette.primary as SimplePaletteColorOptions).main, 0.24)}`,
        info: `0 8px 16px 0 ${alpha((palette.info as SimplePaletteColorOptions).main, 0.24)}`,
        secondary: `0 8px 16px 0 ${alpha((palette.secondary as SimplePaletteColorOptions).main, 0.24)}`,
        success: `0 8px 16px 0 ${alpha((palette.success as SimplePaletteColorOptions).main, 0.24)}`,
        warning: `0 8px 16px 0 ${alpha((palette.warning as SimplePaletteColorOptions).main, 0.24)}`,
        error: `0 8px 16px 0 ${alpha((palette.error as SimplePaletteColorOptions).main, 0.24)}`,
        card: `0 0 2px 0 ${alpha(color, 0.2)}, 0 12px 24px -4px ${alpha(color, 0.12)}`,
        dialog: `-40px 40px 80px -8px ${alpha(color, 0.24)}`,
        dropdown: `0 0 2px 0 ${alpha(color, 0.24)}, -20px 20px 40px -4px ${alpha(color, 0.24)}`
    };
}

function getTheme(mode: PaletteMode, colorPresets: PrimaryColor, contrast: ThemeContrast): ThemeOptions {
    const palette = {
        mode,
        common: commonColors,
        primary: getPrimaryColors(colorPresets),
        secondary: {
            lighter: '#D6E4FF',
            light: '#84A9FF',
            main: '#3366FF',
            dark: '#1939B7',
            darker: '#091A7A',
            contrastText: '#FFFFFF'
        },
        info: {
            lighter: '#CAFDF5',
            light: '#61F3F3',
            main: '#00B8D9',
            dark: '#006C9C',
            darker: '#003768',
            contrastText: '#FFFFFF'
        },
        success: {
            lighter: '#D8FBDE',
            light: '#86E8AB',
            main: '#36B37E',
            dark: '#1B806A',
            darker: '#0A5554',
            contrastText: '#FFFFFF'
        },
        warning: {
            lighter: '#FFF5CC',
            light: '#FFD666',
            main: '#FFAB00',
            dark: '#B76E00',
            darker: '#7A4100',
            contrastText: greyColors[800]
        },
        error: {
            lighter: '#FFE9D5',
            light: '#FFAC82',
            main: '#FF5630',
            dark: '#B71D18',
            darker: '#7A0916',
            contrastText: '#FFFFFF'
        },
        grey: greyColors,
        divider: alpha(greyColors[500], 0.24),
        action: getActionColors(mode),
        text: getTextColors(mode),
        background: getBackgroundColors(mode, contrast)
    };

    return {
        palette,
        components: {
            ...cssBaselineDefine,
            ...buttonDefine,
            ...linearProgressDefine,
            ...fabDefine,
            ...cardDefine,
            ...menuItemDefine,
            ...formDefine,
            ...autoCompleteDefine,
            ...breadcrumbsDefine,
            ...typographDefine,
            ...accordionDefine,
            ...backdropDefine,
            ...treeViewDefine,
            ...timelineDefine,
            ...skeletonDefine,
            ...dataGridDefine,
            ...checkboxDefine,
            ...svgIconDefine,
            ...popoverDefine,
            ...tooltipDefine,
            ...stepDefine,
            ...drawerDefine,
            ...sliderDefine,
            ...avatarDefine,
            ...dialogDefine,
            ...ratingDefine,
            ...selectDefine,
            ...paperDefine,
            ...tableDefine,
            ...listItemDefine,
            ...badgeDefine,
            ...radioDefine,
            ...inputDefine,
            ...linkDefine,
            ...tabsDefine,
            ...paginationDefine,
            ...switchDefine,
            ...alertDefine,
            ...chipDefine
        },
        shadows: getShadowns(mode),
        customShadows: getCustomShadows(mode, palette),
        contrast,
        shape: {
            borderRadius: 8
        },
        typography: {
            fontFamily:
                'Inter,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif',
            h1: {
                fontSize: 64,
                lineHeight: '80px',
                fontWeight: 800
            },
            h2: {
                fontSize: 48,
                lineHeight: '64px',
                fontWeight: 800
            },
            h3: {
                fontSize: 32,
                lineHeight: '48px',
                fontWeight: 700
            },
            h4: {
                fontSize: 24,
                lineHeight: '36px',
                fontWeight: 700
            },
            h5: {
                fontSize: 20,
                lineHeight: '30px',
                fontWeight: 700
            },
            h6: {
                fontSize: 18,
                lineHeight: '28px',
                fontWeight: 700
            },
            body1: {
                fontSize: 16,
                lineHeight: '24px',
                fontWeight: 400
            },
            body2: {
                fontSize: 12,
                lineHeight: '22px',
                fontWeight: 400
            },
            caption: {
                fontSize: 12,
                lineHeight: '18px',
                fontWeight: 400
            },
            overline: {
                fontSize: 12,
                lineHeight: '18px',
                fontWeight: 700
            },
            button: {
                fontSize: 14,
                lineHeight: '24px',
                fontWeight: 700
            }
        }
    };
}

export default getTheme;
