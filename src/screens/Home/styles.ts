import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
`

export const Content = styled(SafeAreaView)`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 327px;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 24px;
`
