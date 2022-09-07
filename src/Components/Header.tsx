import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Touchable,
  Image,
} from 'react-native';
import React from 'react';
import {IProps} from './props';
import {Colors} from '../Config/Colors';
import {Icons} from '../Config/Icons';
/**
 * custom header component UI
 */
const Header = ({
  label,
  onPress,
  showAddtext,
  showBackButton,
  onBackPress,
}: IProps) => {
  return (
    <View style={styles.headerView}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={onBackPress}>
        {showBackButton ? (
          <Image style={styles.buttonImage} source={Icons.left} />
        ) : null}
      </TouchableOpacity>
      <Text style={[styles.label,{marginRight: showAddtext ? 0 : 30}]}>{label}</Text>
      <Text
        style={[styles.label, {fontSize: 15, color: Colors.themeBlue}]}
        onPress={onPress}>
        {showAddtext ? 'Add' : null}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    height: 80,
    width: '92%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 17,
    fontWeight: '500',
   
  },
  button: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    height: 30,
    width: 30,
    tintColor: Colors.themeBlue,
  },
});
