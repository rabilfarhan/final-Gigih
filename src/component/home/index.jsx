import React from 'react';

import Top from './Top';
import Thumbnail from './Thumbnail';
import { Link } from 'react-router-dom';
import { Button, Grid, Sheet } from '@mui/joy';
import { useFetch } from '../../hook/useFetch';

const Home = () => {
  const { data, error, isLoading } = useFetch("videos")

  return (
    <>
      <Top />

      {
        isLoading ? (
          <Sheet
            sx={{ width: '100vw', textAlign: 'center', mt: 5 }}
          >
            <Button
              loading
              loadingPosition="start"
              variant="outlined"
              color='success'
              size='lg'
            >
              Fetch data...
            </Button>
          </Sheet>
        ) : (

          <Grid
            container
            sx={{ flexGrow: 1, padding: 3 }}
            spacing={2}
          >
            <Thumbnail
              data={data}
              isLoading={isLoading}
            />
          </Grid>
        )
      }
    </>
  )
}

export default Home