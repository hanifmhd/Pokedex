/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import {RFValue} from 'react-native-responsive-fontsize';
import Snackbar from 'react-native-snackbar';
import Icon from 'react-native-vector-icons/Ionicons';
import {PokemonList} from '../components';
import R from '../configs';

const Home = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [display, setDisplay] = useState(2);
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
              name={'options-outline'}
              size={RFValue(28)}
              onPress={() => setModalVisible(true)}
            />
          </View>
        </View>
        <PokemonList
          onPress={(item) => navigation.navigate('Detail', {data: item})}
          display={display}
        />
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        style={{
          marginTop: RFValue(40),
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            width: RFValue(120),
            backgroundColor: R.colors.baseWhite,
            padding: RFValue(10),
            borderRadius: RFValue(10),
          }}>
          <Text
            style={{
              fontSize: R.sizes.txtBody,
              fontFamily: R.fonts.NunitoBold,
              marginBottom: RFValue(4),
            }}>
            Display Options
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{alignItems: 'center', marginRight: RFValue(10)}}
              onPress={() => {
                setDisplay(2);
                Snackbar.show({
                  text: 'Display is changed to grid',
                  duration: Snackbar.LENGTH_SHORT,
                });
              }}>
              <Icon
                name={'grid-outline'}
                size={RFValue(28)}
                color={display === 2 ? R.colors.baseBlack : R.colors.baseGrey}
              />
              <Text
                style={{
                  color: display === 2 ? R.colors.baseBlack : R.colors.baseGrey,
                  fontSize: R.sizes.txtInfo,
                  fontFamily: R.fonts.NunitoRegular,
                }}>
                Grid
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => {
                Snackbar.show({
                  text: 'Display is changed to list',
                  duration: Snackbar.LENGTH_SHORT,
                });
                setDisplay(1);
              }}>
              <Icon
                name={'reorder-four-outline'}
                size={RFValue(28)}
                color={display === 1 ? R.colors.baseBlack : R.colors.baseGrey}
              />
              <Text
                style={{
                  color: display === 1 ? R.colors.baseBlack : R.colors.baseGrey,
                  fontSize: R.sizes.txtInfo,
                  fontFamily: R.fonts.NunitoRegular,
                }}>
                List
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
