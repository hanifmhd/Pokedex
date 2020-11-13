import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {GradientText, PokemonList} from '../components';
import R from '../configs';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={R.colors.baseWhite}
        translucent={true}
      />
      <View style={styles.canvas}>
        <View style={{marginBottom: RFValue(10)}}>
          <Text
            style={{
              fontSize: R.sizes.txtHeading1,
              fontFamily: R.fonts.NunitoBold,
            }}>
            Pokédex
          </Text>
          <Text
            style={{
              fontFamily: R.fonts.NunitoRegular,
              fontSize: R.sizes.txtBody,
            }}>
            Find your lovely pokemon and get it within 2 days
          </Text>
        </View>
        <PokemonList
          onPress={(item) => navigation.navigate('Detail', {data: item})}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.baseWhite,
  },
  canvas: {
    paddingHorizontal: RFValue(20),
  },
});
