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
  ResultTemp,
  Temp,
  Division,
  Description,
  Temperature,
} from './Weather.style';
import api from '../../clients/api';

Icon.loadFont();

export default () => {
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [city, setCity] = useState();
  const [bkpCity, setBkpCity] = useState();
  const [icon, setIcon] = useState();
  const [description, setDescription] = useState();
  const [temperature, setTemperature] = useState();

  const APPID = 'ae8ea9f96d42b75c0f625a8695156636';
  const UNIT = 'metric';
  const LANGUAGE = 'pt';

  const weatherByCity = async () => {
    try {
      setLoading(true);

      const response = await api.get(
        `?q=${city}&appid=${APPID}&units=${UNIT}&lang=${LANGUAGE}`
      );

      const { list } = response.data;

      setLoading(false);
      setIcon(list[0].weather[0].icon);
      setDescription(list[0].weather[0].description);
      setTemperature(list[0].main.temp);
      setShowResult(true);
    } catch (error) {
      alert('erro!!!');
      setLoading(false);
    }
  };

  const handleClick = () => {
    setShowResult(false);
    setBkpCity(city);
    weatherByCity();
    Keyboard.dismiss();
    setCity('');
  };

  return (
    <Linear colors={['#052a4e', '#9ecefd']}>
      <StatusBar backgroundColor="#00519d" barStyle="light-content" />
      <Page>
        <Form>
          <Input
            placeholder="Cidade"
            value={city}
            onChangeText={c => setCity(c.replace(/\d/g, ''))}
          />
          <Button loading={loading} onPress={handleClick}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="search" size={30} color="#fff" />
            )}
          </Button>
        </Form>
        {showResult && (
          <Result>
            <ResultTitle>{bkpCity}</ResultTitle>
            <Division />
            <ResultTemp>
              <Temp>
                <Img
                  source={{
                    uri: `http://openweathermap.org/img/w/${icon}.png`,
                  }}
                />
                <Description>{description}</Description>
              </Temp>
              <Temperature>{parseFloat(temperature).toFixed(0)}° C</Temperature>
            </ResultTemp>
          </Result>
        )}
      </Page>
    </Linear>
  );
};
