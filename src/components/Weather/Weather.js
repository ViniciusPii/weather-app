import React, { useState, useEffect } from 'react';
import { StatusBar, ActivityIndicator, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Page,
  Text,
  Linear,
  Form,
  Input,
  Button,
  Img,
  Result,
  ResultTitle,
} from './Weather.style';
import api from '../../clients/api';

Icon.loadFont();

export default () => {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState();
  const [bkpCity, setBkpCity] = useState();
  const [icon, setIcon] = useState();

  const APPID = 'ae8ea9f96d42b75c0f625a8695156636';
  const UNIT = 'metric';
  const LANGUAGE = 'pt';

  const weatherByCity = async () => {
    setLoading(true);

    const response = await api.get(
      `?q=${city}&appid=${APPID}&units=${UNIT}&lang=${LANGUAGE}`
    );

    const { list } = response.data;

    setLoading(false);
    setIcon(list[0].weather[0].icon);
  };

  const handleClick = () => {
    setBkpCity(city);
    weatherByCity();
    Keyboard.dismiss();
  };

  return (
    <Linear colors={['#0083ff', '#9ecefd']}>
      <StatusBar backgroundColor="#00519d" barStyle="light-content" />
      <Page>
        <Form>
          <Input
            placeholder="Cidade"
            valor={city}
            onChangeText={c => setCity(c)}
          />
          <Button loading={loading} onPress={handleClick}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="search" size={30} color="#fff" />
            )}
          </Button>
        </Form>
        <Result>
          <ResultTitle>{bkpCity}</ResultTitle>
          <Img
            source={{ uri: `http://openweathermap.org/img/w/${icon}.png` }}
          />
        </Result>
      </Page>
    </Linear>
  );
};
