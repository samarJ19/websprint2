'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

/***************************  IMAGE - ARROW  ***************************/

export default function Arrow() {
  const theme = useTheme();

  return (
    <Box sx={{ '& svg': { width: { xs: 60, sm: 76 }, height: { xs: 76, sm: 81 } } }}>
      <svg viewBox="0 0 76 81" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M74.8957 2.49454C75.4449 2.55216 75.9369 2.15359 75.9945 1.60432C76.0522 1.05505 75.6536 0.563072 75.1043 0.505456L74.8957 2.49454ZM7.33081 80.7431C7.74121 81.1127 8.37351 81.0796 8.74309 80.6692L14.7658 73.9814C15.1354 73.571 15.1023 72.9387 14.6919 72.5691C14.2815 72.1995 13.6492 72.2326 13.2796 72.643L7.9261 78.5877L1.98138 73.2342C1.57098 72.8646 0.938684 72.8977 0.5691 73.3081C0.199516 73.7185 0.232601 74.3508 0.642999 74.7204L7.33081 80.7431ZM6.25803 65.8463L7.00137 80.0523L8.99863 79.9477L8.2553 65.7418L6.25803 65.8463ZM75.1043 0.505456C36.953 -3.49643 4.25353 27.5381 6.25803 65.8463L8.2553 65.7418C6.31503 28.6611 37.9668 -1.37911 74.8957 2.49454L75.1043 0.505456Z"
          fill={theme.palette.primary.main}
        />
      </svg>
    </Box>
  );
}
