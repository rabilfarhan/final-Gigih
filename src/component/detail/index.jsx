import { Badge, Grid, Sheet, Stack, Typography } from '@mui/joy'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../hook/useFetch';
import VideoCard from './VideoCard';
import CommentForm from './CommentForm';
import ModeToggle from '../common/ModeToggle';
import ProductCard from './ProductsCard';
import { ArrowBack, StoreMallDirectory } from '@mui/icons-material';

const DetailVideo = () => {
    document.title = "Tokped Play | Channel"
    const { id } = useParams();

    const { data, error, isLoading } = useFetch(`/products`);
    const {data : videoDetail} = useFetch(`videos/${id}`);
    const defaultThumbnail = 'https://images.unsplash.com/photo-1529676468696-f3a47aba7d5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'

    return (
        <Sheet>
            {/* Transparent BG */}
            <Sheet
                variant="plain"
                color="warning"
                sx={{
                    position: 'relative',
                    width: '100vw',
                    height: '100vh',
                    background: `url(${defaultThumbnail}) center/cover no-repeat`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    filter: 'blur(20px)',
                    zIndex: 0
                }}
            />

            {/* Overlay black transparent */}
            <Sheet
                sx={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            >

                {/* Grid Wrapper */}
                <Sheet variant='soft' sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: "auto",
                    width: '100vw',
                    maxHeight: {
                        lg: '470px',
                    },
                    maxWidth: '1200px',
                    padding: 3,
                    borderRadius: 15
                }}>

                    {/* Navigation */}
                    <Sheet sx={{
                        backgroundColor: "rgba(0,0,0,0)",
                        position: 'absolute',
                        top: -40,
                    }}>
                        <Stack direction='row' spacing={5}>
                            <Link to={'/'}>
                                <ArrowBack cursor='pointer' />
                            </Link>

                            <Badge color='success' >
                                <Typography
                                    variant="soft"
                                    startDecorator={<StoreMallDirectory />}
                                    fontSize="sm"
                                    sx={{ '--Typography-gap': '0.5rem', p: 1 }}
                                >
                                    {videoDetail.seller}
                                </Typography>
                            </Badge>

                            <ModeToggle />
                        </Stack>
                    </Sheet>

                    {/* Start Grid */}
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ flexGrow: 1, height: '100%'}}>
                        {/* Product List */}
                        <Grid xs={12} md={2} >

                            <Sheet variant='outlined' sx={{ 
                                width: 'calc(100% - 2)',
                                height: 'calc(100% -1)',
                                borderRadius: 7,
                                maxHeight: {
                                    md: '450px',
                                },
                                overflowX: 'hidden',
                                overflowY: 'auto'
                            }}>
                                {
                                    data.map((item) => {
                                        return (
                                            <ProductCard key={item._id} item={item} />
                                        )
                                    })
                                }
                            </Sheet>

                        </Grid>
                        
                        {/* Embeded Video */}
                        <Grid xs={12} md={7}>
                            <VideoCard />
                        </Grid>
                        
                        {/* Comment List */}
                        <Grid xs={12} md={3}>
                            <Sheet
                                sx={{
                                    width: 'calc(100% - 2)',
                                    height: 'calc(100% -1)',
                                    borderRadius: 7,
                                    p: 1
                                }}>
                                <CommentForm />
                            </Sheet>
                            
                        </Grid>
                    </Grid>
                </Sheet>

            </Sheet>
        </Sheet>
    )
}

export default DetailVideo;