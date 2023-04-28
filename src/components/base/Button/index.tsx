import React, { ReactNode } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import { dark, primary, white } from '../../../utils/constants/color';

type Props = {
  children: ReactNode;
  styles?: any;
  onPress?: Function;
  buttonSize?: 'large' | 'medium' | 'small';
  buttonStyles?: 'whiteButton' | 'pinkButton';
};

const Button: React.FC<Props> = ({
  children,
  buttonSize = 'medium',
  buttonStyles = 'pinkButton',
  styles = {},
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity style={[btnStyles[buttonSize], btnStyles[buttonStyles], { ...styles }]} onPress={() => onPress()}>
      <Text style={[btnStyles[`${buttonSize}Text`], btnStyles[`${buttonStyles}Text`]]}>{children}</Text>
    </TouchableOpacity>
  );
};

const btnStyles = StyleSheet.create({
  pinkButton: {
    backgroundColor: primary,
    borderColor: white,
  },
  whiteButton: {
    backgroundColor: white,
    borderColor: dark,
  },
  small: {
    paddingVertical: 4,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 2,
  },
  medium: {
    paddingVertical: 8,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 2,
    marginHorizontal: 20,
  },
  large: {
    paddingVertical: 12,
    borderRadius: 18,
    borderStyle: 'solid',
    borderWidth: 3,
  },
  pinkButtonText: {
    color: white,
  },
  whiteButtonText: {
    color: primary,
  },
  smallText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 42,
    lineHeight: 24,
  },
  mediumText: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 40,
    lineHeight: 32,
  },
  largeText: {
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 40,
    lineHeight: 32,
  },
});

export default Button;
