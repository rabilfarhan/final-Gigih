import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Grid } from '@mui/joy';
import { StoreMallDirectoryTwoTone } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Thumbnail({ data, isLoading }) {

    return (
        data.map((item) => (
            <Grid
                key={item._id}
                xs={6} sm={4} md={3} lg={2}
                sx={{ flexGrow: 1 }}
            >
                <Link to={`/channel/${item._id}`}>
                    <Card sx={{ height: '380px', maxWidth: "170px" }} >
                        <CardCover>
                            <img
                                src={item.thumbnail}
                                loading="lazy"
                                alt=""
                            />
                        </CardCover>
                        <CardCover
                            sx={{
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            }}
                        />
                        <CardContent sx={{ justifyContent: 'flex-end' }}>
                            <Typography level="title-lg" textColor="#fff" mb={1}>
                                {item.title}
                            </Typography>
                            <Typography
                                startDecorator={<StoreMallDirectoryTwoTone color="success" />}
                                textColor="neutral.300"
                            >
                                {item.seller}
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
            </Grid>
        ))
    );
}
