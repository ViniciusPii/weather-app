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
`;

export const Form = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  width: 90%;
`;

export const Input = styled.TextInput`
  width: 75%;
  background-color: #fff;
  height: 50px;
  border-radius: 5px;
  opacity: 0.85;
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
