import {ApolloProvider, InMemoryCache, ApolloClient} from '@apollo/client';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import PokemonList from './src/components/PokemonList';

const client = new ApolloClient({
  uri: 'https://pokemon-fclzip.pahamify.com/',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
        <PokemonList />
      </SafeAreaView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});
