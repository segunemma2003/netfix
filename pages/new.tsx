import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import Router from 'next/router';
import { useEffect } from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Row from '../components/Row';
import useAuth from '../hooks/useAuth';
import { Movie, Product } from '../typings';
import requests from '../utils/requests';
import { modalState } from '../atoms/modelAtom';
import Modal from '../components/Modal';
import Plans from '../components/Plans';
import productss from './api/products';
import NewHeaders from '../components/NewHeaders';

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
  const showModal = useRecoilValue(modalState);
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

      {/* <Header /> */}
      <div className="flex flex-row h-full">
        <NewHeaders />
        <main className="relative pl-4 pt-8 pb-24 lg:space-y-24 lg:pl-24 w-screen">
          {/* <Banner
            netflixOriginals={netflixOriginals}
          /> */}
          <section className="md:space-y-28">
            <Row title="New on Netflix" movies={trendingNow} />
            <Row title="Worth the Wait" movies={topRated} />
            <Row title="Top 10 Movies Today on Netflix" movies={actionMovies} />
            {/* My List */}

            <Row title="Coming this Week" movies={comedyMovies} />
            <Row title="Top 10 Series Today on Netflix" movies={horrorMovies} />
            <Row title="Coming Next Week" movies={romanceMovies} />
            {/* <Row title="Documentaries" movies={documentaries} /> */}
          </section>
        </main>

        {showModal && <Modal />}
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
