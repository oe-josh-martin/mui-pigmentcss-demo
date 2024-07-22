import { StyledWrapper } from './Error.styled.ts';
import type { ErrorProps } from './Error.types.ts';
import { useTheme } from '@pigment-css/react';

export const Error = (props: ErrorProps) => {
    const { heading, subheading, message } = props;
    const theme = useTheme();
    return (
        <StyledWrapper>
            <strong>{heading}</strong><br />
            {subheading}<br />
            {message}
            <p>{theme.color.base.main}</p>
        </StyledWrapper>
    );
};
