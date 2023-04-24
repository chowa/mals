import { create } from 'zustand';
import { PaletteMode } from '@mui/material';
import { PrimaryColor } from '@mals/common-web/styles/theme';
import StorageUtils from '@mals/utils/storage';

type ThemeContrast = 'default' | 'bold';

type ThemeDirection = 'ltr' | 'rtl';

type ThemeLayout = 'vertical' | 'horizontal' | 'mini';

type ThemeColorPresets = PrimaryColor;

interface SettingLocalStorage {
    // 主题模式
    themeMode: PaletteMode;
    // 对比
    themeContrast: ThemeContrast;
    // 布局方向
    themeDirection: ThemeDirection
    // 布局
    themeLayout: ThemeLayout;
    // 内容区域拉长
    themeStretch: boolean;
    // 主题颜色
    themeColorPresets: ThemeColorPresets;
}

interface SettingStore extends SettingLocalStorage {
    readonly initialize: () => void;
    readonly saveLocal: () => void;
    readonly setThemeMode: (themeMode: PaletteMode) => void;
    readonly setThemeContrast: (themeContrast: ThemeContrast) => void;
    readonly setThemeDirection: (themeDirection: ThemeDirection) => void;
    readonly setThemeLayout: (themeLayout: ThemeLayout) => void;
    readonly setThemeStretch: (themeStretch: boolean) => void;
    readonly setThemeCorePresets: (themeColorPresets: ThemeColorPresets) => void;
}

const localStorageName= 'setting';

const useSettingStore = create<SettingStore>((setState, getState) => ({
    themeMode: 'light',
    themeContrast: 'default',
    themeDirection: 'ltr',
    themeLayout: 'vertical',
    themeStretch: false,
    themeColorPresets: 'default',
    initialize: () => {
        const storageValue = StorageUtils.getLocal(localStorageName);

        if (storageValue) {
            try {
                const mapValue = JSON.parse(storageValue) as SettingLocalStorage;
                const state = getState();

                setState(Object.assign({
                    themeMode: state.themeMode,
                    themeContrast: state.themeContrast,
                    themeDirection: state.themeDirection,
                    themeLayout: state.themeLayout,
                    themeStretch: state.themeStretch,
                    themeColorPresets: state.themeColorPresets,
                }, mapValue));
            } catch (e) {
                console.warn(e);
            }
        }
    },
    saveLocal: () => {
        const state = getState();
        StorageUtils.setLocal(localStorageName, JSON.stringify({
            themeMode: state.themeMode,
            themeContrast: state.themeContrast,
            themeDirection: state.themeDirection,
            themeLayout: state.themeLayout,
            themeStretch: state.themeStretch,
            themeColorPresets: state.themeColorPresets
        }));
    },
    setThemeMode: (themeMode: PaletteMode) => {
        setState({ themeMode });
        getState().saveLocal();
    },
    setThemeContrast: (themeContrast: ThemeContrast) => {
        setState({ themeContrast });
        getState().saveLocal();
    },
    setThemeDirection: (themeDirection: ThemeDirection) => {
        setState({ themeDirection });
        getState().saveLocal();
    },
    setThemeLayout: (themeLayout: ThemeLayout) => {
        setState({ themeLayout });
        getState().saveLocal();
    },
    setThemeStretch: (themeStretch: boolean) => {
        setState({ themeStretch });
        getState().saveLocal();
    },
    setThemeCorePresets: (themeColorPresets: ThemeColorPresets) => {
        setState({ themeColorPresets });
        getState().saveLocal();
    }
}));

export default useSettingStore;
