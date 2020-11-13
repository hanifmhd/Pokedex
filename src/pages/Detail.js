/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import {PokemonInfo} from '../components';
import R from '../configs';

const Empty = ({navigation, route}) => {
  const [data, setData] = useState(route.params.data);
  const [like, setLike] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    Image.getSize(data.image, (widthCallback, heightCallback) => {
      setWidth(widthCallback / 1.25);
      setHeight(heightCallback / 1.25);
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={R.colors.baseWhite}
        translucent={true}
      />
      <View style={styles.canvas}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Icon
            name={'chevron-back-outline'}
            size={RFValue(28)}
            onPress={() => navigation.goBack()}
          />
          <Icon
            name={`heart${like ? '' : '-outline'}`}
            size={RFValue(28)}
            color={like ? R.colors.baseRed : R.colors.baseBlack}
            onPress={() => setLike(!like)}
          />
        </View>
        <View
          style={{
            marginTop: RFValue(20),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                fontSize: R.sizes.txtHeading1,
                fontFamily: R.fonts.NunitoBold,
              }}>
              {data.name}
            </Text>
            <View style={{flexDirection: 'row'}}>
              {data.types.map((item, index) => (
                <View
                  key={index}
                  style={{
                    marginRight: RFValue(4),
                    backgroundColor: R.colors.baseGreyLight,
                    padding: RFValue(10),
                    borderRadius: RFValue(4),
                  }}>
                  <Text
                    style={{
                      fontSize: R.sizes.txtBody,
                      fontFamily: R.fonts.NunitoRegular,
                    }}>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <Text
            style={{
              fontSize: R.sizes.txtBody,
              fontFamily: R.fonts.NunitoItalic,
            }}>{`#${data.number}`}</Text>
        </View>
        <Image
          source={{uri: data.image}}
          style={{
            width,
            height,
            alignSelf: 'center',
            marginTop: RFValue(10),
          }}
        />
      </View>
      <PokemonInfo id={data.id} style={{marginTop: RFValue(20)}} />
    </SafeAreaView>
  );
};

export default Empty;

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
