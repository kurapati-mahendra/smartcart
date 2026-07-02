import React, { createContext, useContext, useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './theme';

const ColorModeContext = createContext({ toggleColorMode: () => {}, mode: 'light' });

export const useColorMode = () => useContext(ColorModeContext);

export const AppThemeProvider = ({ children }) => {
    const [mode, setMode] = useState(() => localStorage.getItem('SmartCart-theme') || 'light');

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prev) => {
                const next = prev === 'light' ? 'dark' : 'light';
                localStorage.setItem('SmartCart-theme', next);
                return next;
            });
        },
        mode,
    }), [mode]);

    const theme = mode === 'dark' ? darkTheme : lightTheme;

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
