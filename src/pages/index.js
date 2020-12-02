import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Layout from 'src/components/Layout';
import VideoCard from 'src/components/VideoCard';
import { getVideos } from 'src/database/getVideos';

function Home({ data }) {
  return (
    <Layout title="YouTube">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item._id} item xl={2} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  // const data = [
  //   {
  //     id: 1,
  //     title:
  //       'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
  //     channel: 'Lucas Nhimi',
  //     views: '11 mi de visualizações',
  //     date: Date.now(),
  //     avatar:
  //       'https://yt3.ggpht.com/ytc/AAUvwnjsAqYw8F72hHnk-aZsOIJG3_Yf_AjF4cfekZ-A=s176-c-k-c0x00ffffff-no-rj',
  //     thumb:
  //       'https://i.ytimg.com/vi/eg9yLyb8mdM/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBjDZp2thAhoXe4VnvcH47CFQYUoQ',
  //   },
  // ];

  const data = await getVideos();
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}

export default Home;
