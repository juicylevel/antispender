import { Typography, TypographyProps } from '@mui/material';

export const CellValue: React.FC<TypographyProps> = (props) => {
    return <Typography fontSize="inherit" {...props} />;
};
