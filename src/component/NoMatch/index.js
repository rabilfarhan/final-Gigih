import { Button, Sheet, Typography } from '@mui/joy'
import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
    return (
        <Sheet variant="plain" color="warning" sx={{ p: 5 }}>
            <Typography variant="h2" >
                Oops! Page not found.
            </Typography>
            <Typography variant="h4" >
                The page you're looking for doesn't exist.
            </Typography>
            <Link to='/'>
                <Button
                    variant="plain"
                    color="success"
                >
                    Go back to home
                </Button>
            </Link>
        </Sheet>
    )
}

export default NoMatch