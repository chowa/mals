import { useMemo, useEffect, ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useSettingStore from '@mals/common-web/stores/setting';
import getTheme from '@mals/common-web/styles/theme';
import Setting from '@mals/common-web/components/setting';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

interface AppProps {
    children?: ReactNode;
}

function App({ children }: AppProps) {
    const settingStore = useSettingStore();

    useEffect(() => {
        settingStore.initialize();
    }, []);

    const theme = useMemo(() => {
        return createTheme(getTheme(settingStore.themeMode, settingStore.themeColorPresets, settingStore.themeContrast));
    }, [settingStore.themeMode, settingStore.themeColorPresets, settingStore.themeContrast]);

    const cacheRtl = useMemo(() => {
        if (settingStore.themeDirection === 'ltr') {
            return createCache({
                key: 'ltr',
                stylisPlugins: []
            });
        } else {
            return createCache({
                key: 'rlt',
                stylisPlugins: [prefixer, rtlPlugin]
            });
        }
    }, [settingStore.themeDirection ]);

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Setting />
                { children }
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App;
