import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Linear = styled(LinearGradient)`
  flex: 1;
`;

export const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 18px;
  text-transform: capitalize;
`;

export const Form = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  width: 90%;
`;

export const Input = styled.TextInput`
  width: 75%;
  background-color: #ffffff;
  height: 50px;
  border-radius: 5px;
  font-size: 18px;
  padding-left: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 20%;
  height: 50px;
  background-color: #00366e;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const Result = styled.View`
  width: 85%;
  height: auto;
  margin-top: 50px;
  border-radius: 5px;
  padding: 20px 0;
  align-items: center;
`;

export const ResultTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Division = styled.Text`
  width: 100%;
  height: 1px;
  background-color: #fff;
  margin: 20px 0 30px 0;
`;

export const ResultTemp = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Temp = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.Image`
  width: 80px;
  height: 50px;
`;

export const Description = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  color: #fff;
  text-transform: capitalize;
`;

export const Temperature = styled.Text`
  font-size: 50px;
  color: #fff;
`;
