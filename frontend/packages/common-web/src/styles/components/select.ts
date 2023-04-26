import { Components, Theme } from '@mui/material';
import SelectArrowIcon from '@mals/common-web/components/icon/select-arrow';

export default <Components<Theme>>{
    MuiSelect: {
        defaultProps: {
            IconComponent: SelectArrowIcon
        }
    }
};
