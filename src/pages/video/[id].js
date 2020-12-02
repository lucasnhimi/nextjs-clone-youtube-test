import Layout from 'src/components/Layout';
import { useRouter } from 'next/router';

function Video() {
  const router = useRouter();
  return (
    <Layout title="YouTube">
      <span>{router.query.id}</span>
    </Layout>
  );
}

export default Video;
