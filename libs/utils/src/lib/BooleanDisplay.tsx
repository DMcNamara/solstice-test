import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

interface Props {
    value: boolean | 0 | 1;
}
export const BooleanDisplay = ({ value }: Props) => {
    return value ? <CheckIcon color="primary" /> : <ClearIcon color="error" />;
};
