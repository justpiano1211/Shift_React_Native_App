import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StarRating from 'react-native-star-rating-widget';

import { AppRouter } from '../../../routers/config';
import { MainStackParamsList } from '../../../routers';
import { dark, primary } from '../../../utils/constants/color';

type Props = {
  index?: number;
};

const ShiftCard: React.FC<Props> = ({ index = 0 }) => {
  const navigation = useNavigation<MainStackParamsList>();
  const [rating, setRating] = useState(0);

  return (
    <View style={{ backgroundColor: 'white', borderWidth: 2, borderColor: primary, borderRadius: 8 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderColor: primary,
          borderBottomWidth: 2,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: dark, fontSize: 22 }}>{`Bartender ${index + 1}`}</Text>
        <Text style={{ color: dark, fontSize: 22 }}>Bs3 3DG</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', paddingHorizontal: 5, gap: 10, paddingVertical: 10 }}>
        <Image
          source={require('../../../assets/images/avatar.png')}
          style={{ height: 80, width: 80, borderRadius: 100 }}
        />
        <View>
          <Text style={{ fontSize: 20, color: dark }}>{`Shift Seeker ${index + 1}`}</Text>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{ fontSize: 18, color: dark }}>Rating:</Text>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, color: dark }} />
              <StarRating rating={1.5} onChange={() => {}} starSize={24} color={primary} />
            </View>
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate(AppRouter.Main.Employer, { screen: AppRouter.Employer.Main.ShitDetail });
            }}
          >
            {({ pressed }) => (
              <Text
                style={{
                  fontSize: 18,
                  color: pressed ? primary : dark,
                  paddingTop: 2,
                  textDecorationLine: 'underline',
                }}
              >
                tab to view details
              </Text>
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ShiftCard;
