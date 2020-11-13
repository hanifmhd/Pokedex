import {gql} from '@apollo/client';
const query = {
  allPokemon: gql`
    {
      pokemons(first: 1000) {
        id
        number
        name
        types
        image
      }
    }
  `,
  infoPokemon: (id) => gql`
    query {
      pokemon(id: "${id}=") {
        id
        number
        name
        classification
        maxCP
        maxHP
        fleeRate
        resistant
        weaknesses
        height{
          maximum
          minimum
        }
        weight{
          maximum
          minimum
        }
        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }      
        }
        evolutions {
          id
          number
          name
          image
          types
        }
      }
    }
  `,
};

export default query;
