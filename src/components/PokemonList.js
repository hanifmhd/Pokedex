/* eslint-disable react-native/no-inline-styles */
import {useQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import R from '../configs';
import query from '../constants/query';
import EmptyState from './EmptyState';
import Loader from './Loader';

const {width} = Dimensions.get('screen');
const PokemonList = ({onPress}) => {
  const {loading, error, data} = useQuery(query.allPokemon);

  if (error) {
    return (
      <EmptyState title={'Error'} subtitle={'Please check your connection'} />
    );
  }
  if (loading) {
    return <Loader isVisible={loading} title={'Loading list'} />;
  }
  return (
    <FlatList
      data={data ? data.pokemons : []}
      numColumns={2}
      horizontal={false}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: 'center',
        marginLeft: RFValue(4),
        marginTop: RFValue(4),
        paddingBottom: RFValue(60),
      }}
      renderItem={({item, index}) => (
        <TouchableOpacity
          style={{
            marginRight: RFValue(10),
            marginBottom: RFValue(10),
            padding: RFValue(10),
            borderRadius: RFValue(10),
            backgroundColor: R.colors.baseWhite,
            shadowColor: R.colors.baseBlack,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 1,
          }}
          onPress={() => onPress(item)}>
          <Text
            style={{
              fontSize: R.sizes.txtBody,
              fontFamily: R.fonts.NunitoBold,
              marginBottom: RFValue(10),
            }}>
            {item.name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                marginRight: RFValue(10),
                width: width * 0.14,
              }}>
              {item.types.map((item_types, index_types) => (
                <View
                  key={index_types}
                  style={{
                    backgroundColor: R.colors.baseGreyLight,
                    marginBottom: RFValue(4),
                    padding: RFValue(4),
                    borderRadius: RFValue(4),
                    alignItems: 'center',
                  }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: R.sizes.txtHashtag,
                      fontFamily: R.fonts.NunitoRegular,
                    }}>
                    {`#${item_types}`}
                  </Text>
                </View>
              ))}
            </View>
            <Image
              source={{uri: item.image}}
              style={{width: RFValue(65), height: RFValue(65)}}
            />
          </View>
        </TouchableOpacity>
      )}
      ListEmptyComponent={
        <EmptyState
          title={'No data found'}
          subtitle={'We cant find any pokemons'}
        />
      }
    />
  );
};

export default PokemonList;
