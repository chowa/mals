import { Fragment } from 'react';
import Box from '@mui/material/Box';
import useSettingStore from '@mals/common-web/stores/setting';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ThemeSettingIcon from '@mals/common-web/components/icon/theme-setting';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ScrollBar from '@mals/common-web/components/scrollbar';
import RefreshIcon from '@mals/common-web/components/icon/refresh';
import CloseIcon from '@mals/common-web/components/icon/close';
import InFullScreenIcon from '@mals/common-web/components/icon/in-full-screen';
import ExitFullScreenIcon from '@mals/common-web/components/icon/exit-full-screen';
import ThemeLihgtIcon from '@mals/common-web/components/icon/theme-light';
import ThemeDarkIcon from '@mals/common-web/components/icon/theme-dark';
import ThemeContrastIcon from '@mals/common-web/components/icon/theme-contrast';
import ThemeContrastBlodIcon from '@mals/common-web/components/icon/theme-contrast-blod';
import ThemeDirectionLeftIcon from '@mals/common-web/components/icon/theme-direction-left';
import ThemeDirectionRightIcon from '@mals/common-web/components/icon/theme-direction-right';
import ThemeLayoutHorizontalIcon from '@mals/common-web/components/icon/theme-layout-horizontal';
import ThemeLayoutVerticalIcon from '@mals/common-web/components/icon/theme-layout-vertical';
import ThemeLayoutMiniIcon from '@mals/common-web/components/icon/theme-layout-mini';
import InfoIcon from '@mals/common-web/components/icon/info';
import LeftArrowIcon from '@mals/common-web/components/icon/left-arrow';
import RightArrowIcon from '@mals/common-web/components/icon/right-arrow';
import { TriggerWrapper, Dot, SettingDrawer, SettingHeader, SettingButton, Section, SectionHeader, OptionsWrapper, SkretchAnim, PresetsBtn, Presets } from './styles';

function inFullScreen() {
    const ele = window.document.documentElement;
    // @ts-expect-error
    const refs = ele.requestFullscreen || ele.webkitRequestFullScreen;

    refs.call(ele);
}

function exitFullScreen() {
    const ele = window.document;
    // @ts-expect-error
    const rfs = ele.exitFullscreen || ele.webkitCancelFullScreen;

    rfs.call(ele);
}

function Setting() {
    const settingStore = useSettingStore();

    return (
        <Fragment>
            <SettingDrawer open={settingStore.visible} ModalProps={{ onBackdropClick: settingStore.hide }} anchor={'right'}>
                <SettingHeader>
                    <Typography variant={'h6'}>主题设置</Typography>
                    <Tooltip title={'重置'}>
                        <Box sx={{position: 'relative'}} onClick={settingStore.isDefault ? undefined : settingStore.reset}>
                            { !settingStore.isDefault && <Dot sx={{top:5, right: 4}}/> }
                            <IconButton>
                                <RefreshIcon />
                            </IconButton>
                        </Box>
                    </Tooltip>
                    <IconButton onClick={settingStore.hide}>
                        <CloseIcon />
                    </IconButton>
                </SettingHeader>
                <Divider sx={{borderStyle: 'dashed'}}/>
                <Box sx={{flexGrow: 1, overflow: 'hidden', height: '100%'}}>
                    <ScrollBar>
                        <Section>
                            <SectionHeader>
                                <Typography variant={'caption'}>模式</Typography>
                            </SectionHeader>
                            <OptionsWrapper grid={2}>
                                <SettingButton sx={{height: 72}} active={settingStore.themeMode === 'light'} onClick={() => settingStore.setThemeMode('light')}>
                                    <ThemeLihgtIcon/>
                                </SettingButton>
                                <SettingButton sx={{height: 72}} active={settingStore.themeMode === 'dark'} onClick={() => settingStore.setThemeMode('dark')}>
                                    <ThemeDarkIcon/>
                                </SettingButton>
                            </OptionsWrapper>
                        </Section>

                        <Section>
                            <SectionHeader>
                                <Typography variant={'caption'}>对比</Typography>
                            </SectionHeader>
                            <OptionsWrapper grid={2}>
                                <SettingButton sx={{height: 72}} active={settingStore.themeContrast === 'default'} onClick={() => settingStore.setThemeContrast('default')}>
                                    <ThemeContrastIcon/>
                                </SettingButton>
                                <SettingButton sx={{height: 72}} active={settingStore.themeContrast === 'bold'} onClick={() => settingStore.setThemeContrast('bold')}>
                                    <ThemeContrastBlodIcon/>
                                </SettingButton>
                            </OptionsWrapper>
                        </Section>

                        <Section>
                            <SectionHeader>
                                <Typography variant={'caption'}>方向</Typography>
                            </SectionHeader>
                            <OptionsWrapper grid={2}>
                                <SettingButton sx={{height: 72}} active={settingStore.themeDirection === 'ltr'} onClick={() => settingStore.setThemeDirection('ltr')}>
                                    <ThemeDirectionLeftIcon/>
                                </SettingButton>
                                <SettingButton sx={{height: 72}} active={settingStore.themeDirection === 'rtl'} onClick={() => settingStore.setThemeDirection('rtl')}>
                                    <ThemeDirectionRightIcon/>
                                </SettingButton>
                            </OptionsWrapper>
                        </Section>

                        <Section>
                            <SectionHeader>
                                <Typography variant={'caption'}>布局</Typography>
                            </SectionHeader>
                            <OptionsWrapper grid={3}>
                                <SettingButton sx={{height: 56}} active={settingStore.themeLayout === 'horizontal'} onClick={() => settingStore.setThemeLayout('horizontal')}>
                                    <ThemeLayoutHorizontalIcon/>
                                </SettingButton>
                                <SettingButton sx={{height: 56}} active={settingStore.themeLayout === 'vertical'} onClick={() => settingStore.setThemeLayout('vertical')}>
                                    <ThemeLayoutVerticalIcon/>
                                </SettingButton>
                                <SettingButton sx={{height: 56}} active={settingStore.themeLayout === 'mini'} onClick={() => settingStore.setThemeLayout('mini')}>
                                    <ThemeLayoutMiniIcon/>
                                </SettingButton>
                            </OptionsWrapper>
                        </Section>

                        <Section>
                            <SectionHeader>
                                <Typography variant={'caption'}>拉伸</Typography>
                                <Tooltip title={'只在浏览器宽度大于1600像素时生效'}>
                                    <Box sx={{marginLeft: '4px', width: 16, height: 16, display: 'flex', alignItems: 'center'}}>
                                        <InfoIcon/>
                                    </Box>
                                </Tooltip>
                            </SectionHeader>
                            <OptionsWrapper grid={1}>
                                <SettingButton sx={{height: 48}} active={settingStore.themeStretch} onClick={() => settingStore.setThemeStretch(!settingStore.themeStretch)}>
                                    <SkretchAnim active={settingStore.themeStretch}>
                                        <RightArrowIcon/>
                                        <div className={'size-line'}/>
                                        <LeftArrowIcon/>
                                    </SkretchAnim>
                                </SettingButton>
                            </OptionsWrapper>
                        </Section>

                        <Section>
                            <SectionHeader>
                                <Typography variant={'caption'}>颜色</Typography>
                            </SectionHeader>
                            <OptionsWrapper grid={3}>
                                <PresetsBtn active={settingStore.themeColorPresets === 'default'} onClick={() => settingStore.setThemeCorePresets('default')}>
                                    <Presets active={settingStore.themeColorPresets === 'default'} color={'#00AB55'}/>
                                </PresetsBtn>
                                <PresetsBtn active={settingStore.themeColorPresets === 'cyan'} onClick={() => settingStore.setThemeCorePresets('cyan')}>
                                    <Presets active={settingStore.themeColorPresets === 'cyan'} color={'#078DEE'}/>
                                </PresetsBtn>
                                <PresetsBtn active={settingStore.themeColorPresets === 'purple'} onClick={() => settingStore.setThemeCorePresets('purple')}>
                                    <Presets active={settingStore.themeColorPresets === 'purple'} color={'#7635dc'}/>
                                </PresetsBtn>
                                <PresetsBtn active={settingStore.themeColorPresets === 'blue'} onClick={() => settingStore.setThemeCorePresets('blue')}>
                                    <Presets active={settingStore.themeColorPresets === 'blue'} color={'#2065D1'}/>
                                </PresetsBtn>
                                <PresetsBtn active={settingStore.themeColorPresets === 'orange'} onClick={() => settingStore.setThemeCorePresets('orange')}>
                                    <Presets active={settingStore.themeColorPresets === 'orange'} color={'#fda92d'}/>
                                </PresetsBtn>
                                <PresetsBtn active={settingStore.themeColorPresets === 'red'} onClick={() => settingStore.setThemeCorePresets('red')}>
                                    <Presets active={settingStore.themeColorPresets === 'red'} color={'#FF3030'}/>
                                </PresetsBtn>
                            </OptionsWrapper>
                        </Section>
                    </ScrollBar>
                </Box>
                <Box sx={theme => ({padding: theme.spacing(0, 2.5, 2.5)})}>
                    <SettingButton sx={{height: 48}} active={settingStore.isFullScreen} simple onClick={settingStore.isFullScreen ? exitFullScreen : inFullScreen}>
                        { settingStore.isFullScreen ? '退出全屏' : '进入全屏' }
                        { settingStore.isFullScreen ? <ExitFullScreenIcon sx={{marginLeft: '8px'}}/> : <InFullScreenIcon sx={{marginLeft: '8px'}}/> }
                    </SettingButton>
                </Box>
            </SettingDrawer>

            <Tooltip title={'主题设置'}>
                <TriggerWrapper onClick={settingStore.show}>
                    { !settingStore.isDefault && <Dot sx={{top:8, right: 10}}/> }
                    <IconButton size={'medium'} color={'primary'} sx={{padding: '10px'}}>
                        <ThemeSettingIcon/>
                    </IconButton>
                </TriggerWrapper>
            </Tooltip>
        </Fragment>
    );
}

export default Setting;
