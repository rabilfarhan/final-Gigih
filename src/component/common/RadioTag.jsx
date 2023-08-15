import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import * as React from 'react';

export default function RadioTag() {
    const [selected, setSelected] = React.useState('');

    const tags = [
        'Live',
        'Explore',
        'Terbaru',
        'Promo ULTAH',
        'Official Store',
        'Upcoming'
    ]

    return (
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Box>
                <RadioGroup
                    name="best-movie"
                    aria-labelledby="best-movie"
                    orientation="horizontal"
                    sx={{ flexWrap: 'wrap', gap: 1 }}
                >
                    {tags.map((name) => {
                        const checked = selected === name;
                        return (
                            <Chip
                                key={name}
                                variant="plain"
                                color={checked ? 'success' : 'neutral'}
                                startDecorator={
                                    checked && <CheckIcon sx={{ zIndex: 1, pointerEvents: 'none' }} />
                                }
                            >
                                <Radio
                                    variant="outlined"
                                    color={checked ? 'success' : 'neutral'}
                                    disableIcon
                                    overlay
                                    label={name}
                                    value={name}
                                    checked={checked}
                                    onChange={(event) => {
                                        if (event.target.checked) {
                                            setSelected(name);
                                        }
                                    }}
                                />
                            </Chip>
                        );
                    })}
                </RadioGroup>
            </Box>
        </Box>
    );
}
