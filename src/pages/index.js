import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Layout from 'src/components/Layout';
import VideoCard from 'src/components/VideoCard';

function Home({ data }) {
  return (
    <Layout title="YouTube">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item.id} item lg={2} md={3} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = [
    {
      id: 1,
      title:
        'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
      channel: 'Lucas Nhimi',
      views: '11 mi de visualizações',
      date: '01/11/2020',
      avatar:
        'https://yt3.ggpht.com/ytc/AAUvwnjsAqYw8F72hHnk-aZsOIJG3_Yf_AjF4cfekZ-A=s176-c-k-c0x00ffffff-no-rj',
      thumb:
        'https://i.ytimg.com/vi/eg9yLyb8mdM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBjDZp2thAhoXe4VnvcH47CFQYUoQ',
    },
  ];
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}

export default Home;
