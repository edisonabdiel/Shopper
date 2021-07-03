// Next modules
import Link from 'next/link';
// Styles
import styles from '../styles/PokeList.module.css';

const PokeList = ({ pokemons }) => {

    const pokeList = pokemons.results;

    return (
        <>
            <div >
                {pokeList.map((pokemon) => (
                    <Link
                        key={pokemon.id}
                        href='/pokemon/[id]'
                        as={`/pokemon/${pokemon.id}`}>
                        <h3 >{pokemon.name}</h3>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default PokeList;
