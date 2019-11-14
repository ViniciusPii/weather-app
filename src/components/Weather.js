import React, { useState } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Page, Text, Linear, Form, Input, Button } from './Weather.style';

Icon.loadFont();

export default () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {};

  return (
    <Linear colors={['#0083ff', '#9ecefd']}>
      <StatusBar backgroundColor="#00519d" barStyle="light-content" />
      <Page>
        <Form>
          <Input placeholder="Cidade" />
          <Button loading={loading} onPress={handleClick}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="search" size={30} color="#fff" />
            )}
          </Button>
        </Form>
      </Page>
    </Linear>
  );
};
