import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import Router from 'next/router';
import { useEffect } from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Colss from '../components/Colss';
import useAuth from '../hooks/useAuth';
import { Movie, Product } from '../typings';
import requests from '../utils/requests';
import { modalStateTwo, openOne } from '../atoms/modelAtom';
import ModalTwo from '../components/ModalTwo';
import Plans from '../components/Plans';
import productss from './api/products';
import NewHeader from '../components/NewHeader';
import HeaderLat from '../components/HeaderLatest';

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

function Home({
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
  const showOpen = useRecoilValue(openOne);
  const subscription = false;

  if (loading || subscription === null) return null;

  if (!user) Router.push('/homepage');

  // if (!subscription) return <Plans products={products} />;

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>

      </Head>

      <HeaderLat />
      <div className="flex flex-row   h-full">
        <NewHeader />
        <main className={`relative pb-24 pt-16  lg:pt-10 lg:space-y-24 w-screen transition duration-75 ease-in-out  ${showOpen ? 'lg:pl-64' : 'lg:pl-20'}`}>
          {/* <Banner
            netflixOriginals={netflixOriginals}
          /> */}
          <section className="md:space-y-18 space-y-20 w-full">
            <Colss title="New on Netflix" movies={trendingNow} />
            <Colss title="Worth the Wait" movies={topRated} />
            <Colss title="Top 10 Movies " movies={actionMovies} />
            {/* My List */}

            <Colss title="Coming this Week" movies={comedyMovies} />
            <Colss title="Top 10 Series" movies={horrorMovies} />
            <Colss title="Coming Next Week" movies={romanceMovies} />
            {/* <Colss title="Documentaries" movies={documentaries} /> */}
          </section>
        </main>

        {showModal && <ModalTwo />}
      </div>
    </div>
  );
}

export default Home;

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
