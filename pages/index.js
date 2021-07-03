// Next modules
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
// Styless
import styles from '../styles/HomeView.module.css'
// Axios 
import axios from 'axios'
import PokeList from '../components/PokeList';

const HomeView = ({ pokemons }) => {


  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>PokeDex</title>
      </Head>
      <div>
        <div>NavBar</div>
        <div>
          <h1>Header Pokedex</h1>
          <div>
            <PokeList pokemons={pokemons} />
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=160&offset=60.');
  const pokemons = await res.data;


  return {
    props: {
      pokemons
    }
  }
}

export default HomeView;