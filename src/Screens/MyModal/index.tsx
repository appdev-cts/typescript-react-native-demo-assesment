import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Container from '../../Components/Container';
import Header from '../../Components/Header';
import ModalList from './ModalList';
import {OpenModal} from '../../Config/NavigationComponent';
import {AppRoute} from '../../AppnNavigation/ScreenName';
import AppLoader from '../../Components/AppLoader';
/**
 * mymodal screen
 */
const MyModal = () => {
  return (
    <Container>
      <Header
        label="My Modal"
        onPress={() => {
          OpenModal(AppRoute.Add);
        }}
        showAddtext={true}
      />
      <ModalList />
      <AppLoader />
    </Container>
  );
};

export default MyModal;

const styles = StyleSheet.create({});
