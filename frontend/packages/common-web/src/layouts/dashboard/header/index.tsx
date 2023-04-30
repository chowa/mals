import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Logo from '@mals/common-web/components/logo';
import useSettingStore from '@mals/common-web/stores/setting';
import { ActionWrapper, StyledAppBar, StyledToolbar } from '@mals/common-web/layouts/dashboard/header/style';
import Search from '@mals/common-web/layouts/dashboard/search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';

function Header() {
    const [scrollTop, setScrollTop] = useState(0);
    const settingStore = useSettingStore();
    const themeStore = useTheme();
    const match = useMediaQuery('(max-width:1201px)');

    useEffect(() => {
        const onWindowScroll = () => {
            setScrollTop(document.documentElement.scrollTop);
        };

        window.addEventListener('scroll', onWindowScroll, false);
        onWindowScroll();

        return () => {
            window.removeEventListener('scroll', onWindowScroll);
        };
    }, []);

    return (
        <StyledAppBar
            position={'fixed'}
            scrollTop={scrollTop}
            layout={settingStore.themeLayout}
            sx={match ? { width: '100%' } : undefined}
        >
            <StyledToolbar>
                {settingStore.themeLayout === 'vertical' && (
                    <Link to={'/'}>
                        <Logo sx={{ marginRight: themeStore.spacing(2.5) }} />
                    </Link>
                )}
                <Search />

                <ActionWrapper>
                    {/*todo actions*/}
                    <IconButton>
                        <NotificationsOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsOutlinedIcon />
                    </IconButton>
                </ActionWrapper>
            </StyledToolbar>
        </StyledAppBar>
    );
}

export default Header;
