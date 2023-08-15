import { Menu, MenuButton, MenuItem } from '@mui/base';
import { DeleteForever, Edit, MoreVert } from '@mui/icons-material';
import { Dropdown, IconButton, ListDivider, ListItemDecorator } from '@mui/joy';
import * as React from 'react';

export default function MenuAction() {
    return (
        <Dropdown>
            <MenuButton
                slots={{ root: IconButton }}
                slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
            >
                <MoreVert />
            </MenuButton>
            <Menu placement="bottom-end">
                <MenuItem>
                    <ListItemDecorator>
                        <Edit />
                    </ListItemDecorator>{' '}
                    Edit post
                </MenuItem>

                <ListDivider />

                <MenuItem variant="soft" color="danger">
                    <ListItemDecorator sx={{ color: 'inherit' }}>
                        <DeleteForever />
                    </ListItemDecorator>{' '}
                    Delete
                </MenuItem>
            </Menu>
        </Dropdown>
    );
}
