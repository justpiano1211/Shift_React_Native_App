import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Button from '../../components/base/Button';
import { AppRouter } from '../../routers/config';
import { dark, white } from '../../utils/constants/color';

type Props = {
  navigation: any;
};

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.logoWrapper}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{ width: 220, height: 110 }}
          resizeMode="stretch"
        />
      </View>
      <Text style={styles.text}>Find Shift work to suit your lifestyle</Text>
      <View style={styles.buttonGroup}>
        <Button buttonSize="large" onPress={() => navigation.navigate(AppRouter.Main.Shift)}>
          Login as a Shiftseeker
        </Button>
        <Button
          buttonSize="large"
          onPress={() => navigation.navigate(AppRouter.Main.Employer)}
          styles={{ marginTop: 15 }}
        >
          Login as a Employer
        </Button>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: dark,
    paddingBottom: 50,
    paddingTop: 25,
    paddingHorizontal: 60,
    marginHorizontal: 'auto',
  },
  logoWrapper: {
    width: '100%',
    height: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  buttonGroup: {
    flex: 1,
    justifyContent: 'center',
  },
});
