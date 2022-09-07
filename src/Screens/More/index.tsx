import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Container from '../../Components/Container';
import Button from '../../Components/Button';
import {OpenModal} from '../../Config/NavigationComponent';
import {AppRoute} from '../../AppnNavigation/ScreenName';

/**
 * more screen
 */
const More = () => {
  return (
    <Container>
      <Button
        label="Open Modal"
        onPress={() => {
          OpenModal(AppRoute.Modal);
        }}
      />
    </Container>
  );
};

export default More;

const styles = StyleSheet.create({});
