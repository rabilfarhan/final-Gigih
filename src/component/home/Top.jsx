import React, { useEffect, useState } from 'react';

import ModeToggle from "../common/ModeToggle"
import { Avatar, Dropdown, ListDivider, Menu, MenuButton, MenuItem, Sheet, Stack, Typography } from '@mui/joy';
import { PlayArrow } from '@mui/icons-material';
import RadioTag from '../common/RadioTag';
import { useFetch } from '../../hook/useFetch';

const Top = () => {
    const [profile, setProfile] = useState();

    const { data } = useFetch('', {
        url: 'https://randomuser.me/api/'
    })
    useEffect(() => {
        if (data.results) {
            const randomUser = data.results[0];
            const fullname = `${randomUser.name.first} ${randomUser.name.last}`;
            const profilePicture = randomUser.picture.medium
            setProfile({fullname, profilePicture, email : randomUser.email})
        }

    }, [data])
    const avatar = <Avatar alt={profile?.fullname} src={profile?.profilePicture} />

    return (
        <Sheet
            component={'header'}
            variant='soft'
            sx={{ paddingX: 4, paddingY: 2, position: 'sticky', top: 0, zIndex: 10 }}
        >

            <Stack spacing={3}>
                <Stack
                    direction={'row'}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Typography
                        component='h1'
                        startDecorator={<PlayArrow color='success' />}
                    >Tokopedia Play
                    </Typography>

                    <Stack direction='row' spacing={2}>
                        <ModeToggle />


                        <Dropdown>
                            <MenuButton>{avatar}</MenuButton>
                            <Menu placement="bottom-end" >
                                <MenuItem>{profile?.fullname}</MenuItem>
                                <MenuItem>{profile?.email}</MenuItem>
                                <ListDivider />
                                <MenuItem>Setting</MenuItem>
                                <MenuItem>My Account</MenuItem>
                                <MenuItem>Logout</MenuItem>
                            </Menu>
                        </Dropdown>
                    </Stack>
                </Stack>

                <RadioTag />
            </Stack>
        </Sheet>
    )
}

export default Top