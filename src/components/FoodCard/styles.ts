import { TouchableOpacity } from 'react-native';
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  height: 50px;
  margin-top: 8px;
  padding: 14px 16px 14px 12px;
  width: 327px;
`

export const Informations = styled.View`
  flex-direction: row;
  flex: 1;
`

export const Hour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const Food = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export type StyleStatusProps = 'INSIDE' | 'OUTSIDE' | 'NONE'

type StatusProps = {
  status: StyleStatusProps
}

function setStyteStatus(status: StyleStatusProps) {
  if (status === 'INSIDE') return 'GREEN_MID'
  if (status === 'OUTSIDE') return 'RED_MIND'
  return 'WHITE'
}

export const Status = styled.View<StatusProps>`
  border-radius: 7px;
  height: 14px;
  width: 14px;
  background-color: ${({ theme, status }) => theme.COLORS[setStyteStatus(status)]
  };
`
