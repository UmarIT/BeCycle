import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {RF} from '@theme/responsive';
import {COLORS} from '@theme/colors';
import CustomText from '@components/CustomText';
import {GST} from '@theme/globalStyles';
import RenderImages from '@components/RenderImages';
import RenderVideoCard from '@components/RenderVideoCard';
import {navigate} from '@services/nav.service';
import {ROUTES} from '@utils/routes';
interface props {
  item: any;
  index: number;
}
const NotificationCard = (props: props) => {
  const {item, index} = props;
  const description = item?.description;
  const regex = /([A-Z][a-z]*|\S+)/g;
  const parts = description.match(regex);

  return (
    <Pressable
      style={styles.mainView}
      key={index}
      onPress={() => navigate(ROUTES.UPLOADPOST)}>
      <View style={styles.innerView}>
        <FastImage
          resizeMode="contain"
          source={item?.icon}
          style={styles.iconStyles}
        />
      </View>
      <View style={styles.columnView}>
        <RenderImages item={item?.users} />

        <View>
          <CustomText style={styles.txtStyles} color={COLORS.WHITE}>
            {parts.map((part: string, index: number) => {
              if (/^[A-Z]/.test(part)) {
                return (
                  <Text key={index} style={styles.boldStyles}>
                    {`${part} `}
                  </Text>
                );
              } else {
                return (
                  <Text style={styles.semiBold} key={index}>{`${part} `}</Text>
                );
              }
            })}
          </CustomText>
        </View>
        <View style={styles.cardView}>
          <RenderVideoCard item={item?.Videos} />
        </View>
      </View>
    </Pressable>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  txtStyles: {marginTop: RF(8), ...GST.WEIGHT500},
  mainView: {
    flexDirection: 'row',
    paddingHorizontal: RF(25),
    borderBottomWidth: RF(1),
    borderColor: COLORS.DARKGRAY,
    paddingVertical: RF(18),
  },
  innerView: {
    marginRight: RF(13),
    paddingTop: RF(10),
    height: '100%',
  },
  iconStyles: {height: RF(25), width: RF(27)},
  columnView: {
    flexDirection: 'column',
    width: '90%',
  },
  boldStyles: {
    ...GST.WEIGHT800,
    fontSize: RF(13),
  },
  cardView: {marginTop: RF(10)},
  semiBold: {
    ...GST.WEIGHT500,
    fontSize: RF(13),
  },
});
