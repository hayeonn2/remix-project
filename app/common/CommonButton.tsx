
import type { SxProps, Theme } from '@mui/material';
import { Button, useTheme  } from '@mui/material';

import type { ExtendedPaletteOptions  } from '~/themes/theme';

interface CommonButtonProps {
  variant?: 'text' | 'contained' | 'outlined';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'| 'other' | 'primaryLight' | 'primaryDark' | 'secondaryLight' | 'secondaryDark';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  sx?: SxProps<Theme>;
  gradient?: string | string[];
  children: React.ReactNode;
}

const CommonButton = ({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  disabled = false,
  startIcon,
  endIcon,
  onClick,
  sx,
  gradient,
  children,
  ...props
}: CommonButtonProps) => {
  const theme = useTheme() as Theme & { palette: ExtendedPaletteOptions };

  const getGradient = () => {
    if (Array.isArray(gradient)) {
      // gradient prop이 배열일 때, 직접 색상 값을 넣어 적용
      return `linear-gradient(to bottom, ${gradient.join(',')})`;
    }

    switch (gradient) {
      case 'primaryMain':
        return `linear-gradient(to bottom, ${theme.palette.primary.top}, ${theme.palette.primary.low})`;
      case 'primaryLight':
        return `linear-gradient(to bottom, ${theme.palette.primaryLight?.top}, ${theme.palette.primaryLight?.low})`;
      case 'primaryDark':
        return `linear-gradient(to bottom, ${theme.palette.primaryDark?.top}, ${theme.palette.primaryDark?.low})`;
      case 'secondaryMain':
        return `linear-gradient(to bottom, ${theme.palette.secondary?.top}, ${theme.palette.secondary?.low})`;
      case 'secondaryLight':
        return `linear-gradient(to bottom, ${theme.palette.secondaryLight?.top}, ${theme.palette.secondaryLight?.low})`;
      case 'secondaryDark':
        return `linear-gradient(to bottom, ${theme.palette.secondaryDark?.top}, ${theme.palette.secondaryDark?.low})`;
      case 'other':
        return `linear-gradient(to bottom, ${theme.palette.primaryDark?.low}, ${theme.palette.secondaryLight?.top})`;
      default:
        return '';
    }
  };

  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      sx={{
        ...sx,
        borderRadius: '9999px',
        background: getGradient(),
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
