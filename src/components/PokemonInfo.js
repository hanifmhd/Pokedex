/* eslint-disable react-native/no-inline-styles */
import {useQuery} from '@apollo/client';
import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import R from '../configs';
import query from '../constants/query';
import EmptyState from './EmptyState';
import Loader from './Loader';

const {width, height} = Dimensions.get('screen');
const menu = ['About', 'Base Stats', 'Attacks', 'Evolutions'];
const label_0 = [
  'classification',
  'height',
  'weight',
  'resistant',
  'weaknesses',
];
const label_1 = ['maxHP', 'maxCP', 'fleeRate'];
const label_2 = 'attacks';
const label_3 = 'evolutions';
const PokemonInfo = ({id, style}) => {
  const {loading, error, data} = useQuery(query.infoPokemon(id));
  const [indexTab, setIndexTab] = useState(0);
  console.log(data);
  const Description = () => {
    let desc = data.pokemon;
    let label = label_0;
    if (indexTab === 0) {
      label = label_0;
    } else if (indexTab === 1) {
      label = label_1;
    } else if (indexTab === 2) {
      label = label_2;
    } else if (indexTab === 3) {
      label = label_3;
    }
    return label === 'evolutions' ? (
      <FlatList
        data={desc[label]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              marginBottom: RFValue(10),
              paddingBottom: RFValue(10),
              borderBottomWidth: 0.5,
              borderBottomColor:
                index === 0 ? R.colors.baseGrey : 'transparent',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={{uri: item.image}}
                style={{
                  width: RFValue(100),
                  height: RFValue(100),
                  marginRight: RFValue(20),
                }}
              />
              <View style={{flexDirection: 'row'}}>
                <View style={{marginRight: RFValue(20)}}>
                  <Text style={styles.title}>Number: </Text>
                  <Text style={styles.title}>Name: </Text>
                  <Text style={styles.title}>Types: </Text>
                </View>
                <View>
                  <Text style={styles.body}>{`#${item.number}`}</Text>
                  <Text style={styles.body}>{item.name}</Text>
                  <View style={{flexDirection: 'row'}}>
                    {item.types.map((item_type, index_type) => (
                      <Text style={styles.body}>{`${item_type}${
                        index_type === item.types.length - 1 ? '' : ', '
                      }`}</Text>
                    ))}
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text
            style={{
              textAlign: 'center',
              marginTop: RFValue(40),
              ...styles.title,
            }}>{`No evolution for ${desc.name}`}</Text>
        }
      />
    ) : label === 'attacks' ? (
      <View>
        <View style={{marginBottom: RFValue(10)}}>
          <Text style={styles.title}>Fast</Text>
          {desc[label].fast.length > 0 ? (
            desc[label].fast.map((item, index) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{flex: 1.5, ...styles.body}}>{item.name}</Text>
                <Text style={{flex: 1, ...styles.body}}>{item.type}</Text>
                <Text style={{flex: 0.5, ...styles.body}}>{item.damage}</Text>
                <View
                  style={{
                    height: RFValue(10),
                    flexDirection: 'row',
                    flex: 2,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: RFValue(item.damage),
                      flex: 1,
                      backgroundColor: 'red',
                      borderTopLeftRadius: RFValue(4),
                      borderBottomLeftRadius: RFValue(4),
                      height: RFValue(4),
                    }}
                  />
                  <View
                    style={{
                      width: RFValue(100 - item.damage),
                      backgroundColor: R.colors.baseGreyLight,
                      height: RFValue(4),
                    }}
                  />
                </View>
              </View>
            ))
          ) : (
            <Text
              style={{
                textAlign: 'center',
                marginTop: RFValue(40),
                ...styles.title,
              }}>{`No fast attacks for ${desc.name}`}</Text>
          )}
        </View>
        <View>
          <Text style={styles.title}>Special</Text>
          {desc[label].special.length > 0 ? (
            desc[label].special.map((item, index) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{flex: 1.5, ...styles.body}}>{item.name}</Text>
                <Text style={{flex: 1, ...styles.body}}>{item.type}</Text>
                <Text style={{flex: 0.5, ...styles.body}}>{item.damage}</Text>
                <View
                  style={{
                    height: RFValue(10),
                    flexDirection: 'row',
                    flex: 2,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: RFValue(item.damage),
                      flex: 1,
                      backgroundColor: 'red',
                      borderTopLeftRadius: RFValue(4),
                      borderBottomLeftRadius: RFValue(4),
                      height: RFValue(4),
                    }}
                  />
                  <View
                    style={{
                      width: RFValue(100 - item.damage),
                      backgroundColor: R.colors.baseGreyLight,
                      height: RFValue(4),
                    }}
                  />
                </View>
              </View>
            ))
          ) : (
            <Text
              style={{
                textAlign: 'center',
                marginTop: RFValue(40),
                ...styles.title,
              }}>{`No special attacks for ${desc.name}`}</Text>
          )}
        </View>
      </View>
    ) : (
      <View style={{flexDirection: 'row'}}>
        <View style={{marginRight: RFValue(10)}}>
          {label.map((item, index) => (
            <Text
              style={{
                textTransform: 'capitalize',
                marginBottom: RFValue(10),
                ...styles.title,
              }}>
              {item}
            </Text>
          ))}
        </View>
        <View>
          {label.map((item, index) => {
            if (Array.isArray(desc[item])) {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  {desc[item].map((item_arr, index_arr) => (
                    <Text
                      numberOfLines={1}
                      key={item_arr + index_arr}
                      style={{
                        marginBottom: RFValue(10),
                        ...styles.body,
                      }}>{`${item_arr}${
                      index_arr === desc[item].length - 1 ? '' : ', '
                    }`}</Text>
                  ))}
                </View>
              );
            } else {
              if (item === 'weight' || item === 'height') {
                return (
                  <Text
                    style={{marginBottom: RFValue(10), ...styles.body}}
                    numberOfLines={1}>
                    {index === 1 || index === 2
                      ? desc[item].minimum
                      : desc[item]}
                  </Text>
                );
              } else {
                return (
                  <Text
                    style={{marginBottom: RFValue(10), ...styles.body}}
                    numberOfLines={1}>
                    {desc[item]}
                  </Text>
                );
              }
            }
          })}
        </View>
      </View>
    );
  };

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
          marginVertical: RFValue(10),
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
      <Description />
    </View>
  );
};

export default PokemonInfo;

const styles = StyleSheet.create({
  title: {
    fontSize: R.sizes.txtBody,
    fontFamily: R.fonts.NunitoBold,
  },
  body: {
    fontSize: R.sizes.txtBody,
    fontFamily: R.fonts.NunitoRegular,
  },
});
