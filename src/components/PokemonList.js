import {gql, useQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';

const PokemonImage = ({image}) => {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');

  useEffect(() => {
    Image.getSize(
      image,
      (widthCallback, heightCallback) => {
        setWidth(widthCallback);
        setHeight(heightCallback);
      },
      console.error,
    );
  }, []);

  if (height && width) {
    return <Image source={{uri: image}} style={{width, height}} />;
  } else {
    return <ActivityIndicator size={'small'} />;
  }
};

const PokemonList = () => {
  const {loading, error, data} = useQuery(GET_FIRT_10_POKEMON);

  if (error) {
    return <Text>Error!</Text>;
  }
  if (loading) {
    return <Text>Loading!</Text>;
  }
  console.log(loading);
  console.log(error);
  console.log(data);
  return (
    <FlatList
      data={data.pokemons}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => (
        <View>
          <Text>{item.name}</Text>
          <PokemonImage image={item.image} />
        </View>
      )}
    />
  );
};

const GET_FIRT_10_POKEMON = gql`
  {
    pokemons(first: 10) {
      id
      number
      name
      types
      image
    }
  }
`;

export default PokemonList;
