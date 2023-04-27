import { create } from 'zustand';
import { PaletteMode } from '@mui/material';
import { PrimaryColor, ThemeContrast } from '@mals/common-web/styles/theme';
import StorageUtils from '@mals/utils/storage';
import DiffUtils from '@mals/utils/diff';

type ThemeDirection = 'ltr' | 'rtl';

type ThemeLayout = 'vertical' | 'horizontal' | 'mini';

type ThemeColorPresets = PrimaryColor;

interface SettingState {
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

interface SettingStore extends SettingState {
    visible: boolean;
    isDefault: boolean;
    isFullScreen: boolean;
    initialize: () => void;
    saveHandler: (state: { [P in keyof SettingState]?: SettingState[P] }) => void;
    setThemeMode: (themeMode: PaletteMode) => void;
    setThemeContrast: (themeContrast: ThemeContrast) => void;
    setThemeDirection: (themeDirection: ThemeDirection) => void;
    setThemeLayout: (themeLayout: ThemeLayout) => void;
    setThemeStretch: (themeStretch: boolean) => void;
    setThemeCorePresets: (themeColorPresets: ThemeColorPresets) => void;
    reset: () => void;
    show: () => void;
    hide: () => void;
}

const localStorageName= 'setting';

const defaultState: SettingState = {
    themeMode: 'light',
    themeContrast: 'default',
    themeDirection: 'ltr',
    themeLayout: 'horizontal',
    themeStretch: false,
    themeColorPresets: 'default'
};

function getIsFullScreen(): boolean {
    // @ts-expect-error
    return (window.document.fullscreenElement || window.document.webkitFullscreenElement) !== null
}

const useSettingStore = create<SettingStore>((setState, getState) => ({
    ...defaultState,
    visible: false,
    isDefault: true,
    isFullScreen: getIsFullScreen(),
    initialize: () => {
        const event = ('onfullscreenchange' in window.document) ? 'fullscreenchange' : 'webkitfullscreenchange';

        window.document.addEventListener(event, () => {
            setState({ isFullScreen: getIsFullScreen() });
        }, false);

        const storageListener = () => {
            const storageValue = StorageUtils.getLocal(localStorageName);

            if (storageValue) {
                try {
                    const localState = JSON.parse(storageValue) as SettingState;
                    getState().saveHandler(localState);
                } catch (e) {
                    console.warn(e);
                }
            }
        }

        StorageUtils.onLocalChange(storageListener);
        storageListener();
    },
    saveHandler: (newState) => {
        const state = getState();
        const currentState = Object.assign({
            themeMode: state.themeMode,
            themeContrast: state.themeContrast,
            themeDirection: state.themeDirection,
            themeLayout: state.themeLayout,
            themeStretch: state.themeStretch,
            themeColorPresets: state.themeColorPresets
        }, newState);
        const isDefault = DiffUtils.isEqual(currentState, defaultState);

        setState({ ...currentState, isDefault });
        document.dir = currentState.themeDirection;
        StorageUtils.setLocal(localStorageName, JSON.stringify(currentState));
    },
    setThemeMode: (themeMode: PaletteMode) => {
        getState().saveHandler({ themeMode });
    },
    setThemeContrast: (themeContrast: ThemeContrast) => {
        getState().saveHandler({ themeContrast });
    },
    setThemeDirection: (themeDirection: ThemeDirection) => {
        getState().saveHandler({ themeDirection });
    },
    setThemeLayout: (themeLayout: ThemeLayout) => {
        getState().saveHandler({ themeLayout });
    },
    setThemeStretch: (themeStretch: boolean) => {
        getState().saveHandler({ themeStretch });
    },
    setThemeCorePresets: (themeColorPresets: ThemeColorPresets) => {
        getState().saveHandler({ themeColorPresets });
    },
    reset: () => {
        getState().saveHandler(defaultState);
    },
    show: () => {
        setState({ visible: true });
    },
    hide: () => {
        setState({ visible: false });
    }
}));

export default useSettingStore;
