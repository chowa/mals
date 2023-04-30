import useSettingStore from '@mals/common-web/stores/setting';
import useMediaQuery from '@mui/material/useMediaQuery';
import { StyledNav, TriggerBtn, ScrollWrapper, AccoutBox } from '@mals/common-web/layouts/dashboard/nav/style';
import SvgIcon from '@mui/material/SvgIcon';
import ScrollBar from '@mals/common-web/components/scrollbar';
import Logo from '@mals/common-web/components/logo';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';

function OnlyNav() {
    const theme = useTheme();
    const settingStore = useSettingStore();

    return (
        <ScrollBar sx={{ padding: 0 }}>
            <Link to={'/'}>
                <Logo sx={{ margin: theme.spacing(3, 2.5) }} />
            </Link>

            {settingStore.themeLayout === 'horizontal' && (
                <Link to={'/user/account'}>
                    <AccoutBox>
                        <Avatar src={'https://www.dropbox.com/s/iv3vsr5k6ib2pqx/avatar_default.jpg?dl=1'} />
                        <Box sx={{ marginLeft: theme.spacing(2) }}>
                            <Typography
                                variant={'h6'}
                                sx={{
                                    fontSize: 14,
                                    lineHeight: '22px',
                                    fontWeight: 600,
                                    color:
                                        theme.palette.mode === 'light'
                                            ? theme.palette.grey[800]
                                            : theme.palette.common.white
                                }}
                            >
                                Mals
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    lineHeight: '22px',
                                    color:
                                        theme.palette.mode === 'light'
                                            ? theme.palette.grey[600]
                                            : theme.palette.grey[500]
                                }}
                            >
                                超级管理员
                            </Typography>
                        </Box>
                    </AccoutBox>
                </Link>
            )}

            <MenuList subheader={<ListSubheader>应用</ListSubheader>}>
                <MenuItem>
                    <ListItemIcon>
                        <ContentCut fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Cut</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        ⌘X
                    </Typography>
                </MenuItem>
            </MenuList>
        </ScrollBar>
    );
}

function Nav() {
    const settingStore = useSettingStore();
    const match = useMediaQuery('(min-width:1200px)');

    if (!match || settingStore.themeLayout === 'vertical') {
        return null;
    }

    return (
        <StyledNav component={'nav'} layout={settingStore.themeLayout}>
            <TriggerBtn
                contrast={settingStore.themeContrast}
                layout={settingStore.themeLayout}
                onClick={() =>
                    settingStore.setThemeLayout(settingStore.themeLayout === 'horizontal' ? 'mini' : 'horizontal')
                }
            >
                <SvgIcon
                    sx={{
                        width: 16,
                        height: 16,
                        transform: `rotate(${settingStore.themeLayout === 'mini' ? '0' : '180'}deg)`
                    }}
                >
                    <path
                        fill="currentColor"
                        d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19Z"
                    />
                </SvgIcon>
            </TriggerBtn>
            <ScrollWrapper layout={settingStore.themeLayout}>
                <OnlyNav />
            </ScrollWrapper>
        </StyledNav>
    );
}

export default Nav;
