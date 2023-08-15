import { DarkMode, LightMode } from '@mui/icons-material';
import { Button } from '@mui/joy';
import { useColorScheme } from '@mui/joy/styles';
import React from 'react';

function ModeToggle() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);

    // necessary for server-side rendering
    // because mode is undefined on the server
    React.useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }

    return (
        <Button
            variant="outlined"
            color='success'
            size='sm'
            onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light');
            }}
        >
            {mode === 'light' ? <DarkMode /> : <LightMode />}
        </Button>
    );
}

export default ModeToggle;