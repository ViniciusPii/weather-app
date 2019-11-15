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
  const [findCity, setFindCity] = useState();
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
        `?q=${findCity}&appid=${APPID}&units=${UNIT}&lang=${LANGUAGE}`
      );

      const { list, city } = response.data;

      setLoading(false);
      setBkpCity(city.name);
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
    weatherByCity();
    Keyboard.dismiss();
    setFindCity('');
  };

  return (
    <Linear colors={['#052a4e', '#325d87']}>
      <StatusBar backgroundColor="#041a2f" barStyle="light-content" />
      <Page>
        <Form>
          <Input
            placeholder="Cidade"
            placeholderTextColor="#052a4e"
            value={findCity}
            onChangeText={c => setFindCity(c.replace(/\d/g, ''))}
          />
          <Button loading={loading} onPress={handleClick} activeOpacity={1}>
            {loading ? (
              <ActivityIndicator color="#052a4e" />
            ) : (
              <Icon name="search" size={30} color="#052a4e" />
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
