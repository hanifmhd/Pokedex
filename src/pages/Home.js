import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
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
            <Icon
              name={'filter-sharp'}
              size={RFValue(28)}
              onPress={() => navigation.goBack()}
            />
          </View>
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
    paddingTop: Platform.OS === 'android' ? RFValue(40) : 0,
  },
});
