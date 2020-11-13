/* eslint-disable react-native/no-inline-styles */
import {useQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import R from '../configs';
import query from '../constants/query';
import EmptyState from './EmptyState';
import Loader from './Loader';

const {width, height} = Dimensions.get('screen');
const menu = ['About', 'Base Stats', 'Evolution', 'Moves'];
const PokemonInfo = ({id, style}) => {
  const {loading, error, data} = useQuery(query.infoPokemon(id));
  const [dataPokemons, setDataPokemons] = useState([]);
  const [indexTab, setIndexTab] = useState(0);

  if (error) {
    return (
      <EmptyState title={'Error'} subtitle={'Please check your connection'} />
    );
  }
  if (loading) {
    return <Loader isVisible={loading} title={'Loading info'} />;
  }
  return (
    <View
      style={{
        width: width,
        height: height,
        padding: RFValue(20),
        borderTopLeftRadius: RFValue(40),
        borderTopRightRadius: RFValue(40),
        backgroundColor: R.colors.baseWhite,
        shadowColor: R.colors.baseBlack,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        ...style,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: RFValue(10),
        }}>
        {menu.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setIndexTab(index)}
            style={{
              borderBottomWidth: 1,
              borderBottomColor:
                indexTab === index ? R.colors.basePrimary : 'transparent',
              padding: RFValue(4),
            }}>
            <Text
              style={{
                fontSize: R.sizes.txtBody,
                fontFamily: R.fonts.NunitoRegular,
                color:
                  indexTab === index ? R.colors.baseBlack : R.colors.baseGrey,
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PokemonInfo;
