import { ReactNode } from 'react';
import useSettingStore from '@mals/common-web/stores/setting';
import { StyledBox, StyledContainer } from '@mals/common-web/layouts/dashboard/content/style';

interface ContentProps {
    children?: ReactNode;
    analytic?: boolean;
}

function Content({ children, analytic }: ContentProps) {
    const settingStore = useSettingStore();

    return (
        <StyledBox component={'main'} layout={settingStore.themeLayout}>
            <StyledContainer stretch={settingStore.themeStretch} analytic={analytic}>
                {children}
            </StyledContainer>
        </StyledBox>
    );
}

export default Content;
