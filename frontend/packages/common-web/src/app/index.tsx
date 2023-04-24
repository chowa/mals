import { useMemo, ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useSettingStore from '@mals/common-web/stores/setting';
import getTheme from '@mals/common-web/styles/theme';

interface AppProps {
    children?: ReactNode;
}

function App({ children }: AppProps) {
    const settingStore = useSettingStore();
    const theme = useMemo(() => {
        return createTheme(getTheme(settingStore.themeMode, settingStore.themeColorPresets));
    }, [settingStore.themeMode, settingStore.themeColorPresets, settingStore.themeContrast]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            { children }
        </ThemeProvider>
    );
}

export default App;
