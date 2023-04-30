import { useMemo, useEffect, ReactNode, Suspense, lazy, FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useSettingStore from '@mals/common-web/stores/setting';
import getTheme from '@mals/common-web/styles/theme';
import Setting from '@mals/common-web/components/setting';
import BrandSuspense from '@mals/common-web/components/suspense/brand';
import PageSuspense from '@mals/common-web/components/suspense/page';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { LayoutsProps } from '@mals/common-web/layouts';
import * as process from 'process';

interface AppProps {
    children?: ReactNode;
}

const Layouts = lazy<FC<LayoutsProps>>(() => {
    return new Promise(resolve => {
        setTimeout(
            () => {
                resolve(import('@mals/common-web/layouts'));
            },
            process.env.NODE_ENV === 'producation' ? 1200 : 0
        );
    });
});

function App({ children }: AppProps) {
    const settingStore = useSettingStore();

    useEffect(() => {
        settingStore.initialize();
    }, []);

    const theme = useMemo(() => {
        return createTheme(
            getTheme(settingStore.themeMode, settingStore.themeColorPresets, settingStore.themeContrast)
        );
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
    }, [settingStore.themeDirection]);

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <CssBaseline />
                    <Suspense fallback={<BrandSuspense />}>
                        <Layouts>
                            <Suspense fallback={<PageSuspense />}>{children}</Suspense>
                        </Layouts>
                    </Suspense>
                    <Setting />
                </BrowserRouter>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App;
