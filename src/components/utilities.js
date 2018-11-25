import styled from 'styled-components/native';
import {theme} from '../../app.json';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.thirdColor};
  padding: 20px;
`;

export const Header = styled.View`
  padding: 20px;
  padding-top: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
  width: 100%;
`;

export const HeaderTitle = styled.Text`
  font-family: Roboto-Medium;
  font-size: 30px;
`;

export const StyledTextInput = styled.TextInput`
  background-color: #FFFFFF;
  border: 1px solid #EEEEEE;
  width: 100%;
  padding: 12px 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  font-family: Roboto-Medium;
`;

export const StyledButton = styled.TouchableHighlight`
  background-color: ${theme.primaryColor};
  border-radius: 5px;
  padding: 10px 15px;
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledButtonSmall = styled.TouchableHighlight`
  background-color: #FFFFFF;
  border: 1px solid #EEEEEE;
  padding: 5px 15px;
  border-radius: 30px;
`;

export const StyledButtonBlack = styled.TouchableHighlight`
  background-color: #222;
  padding: 5px 15px;
  border-radius: 5px;
`;

export const StyledButtonText = styled.Text`
  color: #FFFFFF;
  text-align: center;
  font-family: Roboto-Medium;
  font-size: 20px;
`;

export const StyledButtonTextSmall = styled.Text`
  color: ${theme.secondColor};
  text-align: center;
  font-family: Roboto-Medium;
  font-size: 12px;
`;

/*
 * News components
 */
export const BoxTitle = styled.Text`
  font-family: Roboto-Medium;
  font-size: 20px;
  padding: 10px;
`;

/*
 * General Components
 */
export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${theme.fourthColor};
  margin: 20px 0;
`;

export const Title = styled.Text`
  font-size: 35px;
  font-family: Roboto-Medium;
`;

export const StyledText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 15px;
`;

export const TitleGreen = styled.Text`
  font-size: 35px;
  font-family: Roboto-Medium;
  color: ${theme.primaryColor};
`;

export const PointText = styled.Text`
  font-size: 17px;
  font-family: Roboto-Regular;
  margin-left: 10px;
`;

export const Message = styled.Text`
  color: ${theme.secondColor};
  font-size: 17px;
  font-family: Roboto-Regular;
`;