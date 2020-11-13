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
      pokemon(id: "${id}") {
        id
        number
        name
        weaknesses
        maxCP
        maxHP
        weight {
          minimum
          maximum
        }
        height {
          minimum
          maximum
        }
        classification
        fleeRate
        attacks {
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
          weight {
            minimum
            maximum
          }
          attacks {
            fast {
              name
              type
              damage
            }
          }
        }
      }
    }
  `,
};

export default query;
