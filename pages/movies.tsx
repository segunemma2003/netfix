import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import Router from 'next/router';
import { useEffect } from 'react';
import BannerThree from '../components/BannerThree';
import HeaderTwo from '../components/HeaderTwo';
import Colss from '../components/Colss';
import useAuth from '../hooks/useAuth';
import { Movie, Product } from '../typings';
import requests from '../utils/requests';
import { modalStateTwo } from '../atoms/modelAtom';
import ModalTwo from '../components/ModalTwo';
import Plans from '../components/Plans';
import productss from './api/products';
import NewHeader from '../components/NewHeader';

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
  products: Product[]
}

function Tv({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
  products,
}:Props) {
  const { loading, user } = useAuth();
  const showModal = useRecoilValue(modalStateTwo);
  const subscription = false;

  if (loading || subscription === null) return null;

  if (!user) Router.push('/homepage');

  // if (!subscription) return <Plans products={products} />;

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderTwo name="Movies" />
      <div className="flex flex-Colss h-full">
        <NewHeader />
        <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-24 w-screen">
          <BannerThree
            netflixOriginals={netflixOriginals}
          />
          <section className="md:space-y-18 space-y-20">
            <Colss title="Trending Now" movies={trendingNow} />
            <Colss title="Top Rated" movies={topRated} />
            <Colss title="Acftion Series" movies={actionMovies} />
            {/* My List */}

            <Colss title="Comedies" movies={comedyMovies} />
            <Colss title="Scary Series" movies={horrorMovies} />
            <Colss title="Romance Series" movies={romanceMovies} />
            {/* <Colss title="Documentaries" movies={documentaries} /> */}
          </section>
        </main>

        {showModal && <ModalTwo />}
      </div>
    </div>
  );
}

export default Tv;

export const getServerSideProps = async () => {
  const products:Product[] = productss;
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
    // products
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
    // fetch("/api/hello").then((res) =>res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
      products,
    },
  };
};
