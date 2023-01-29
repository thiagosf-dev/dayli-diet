import { ReactElement } from 'react'
import { TouchableOpacity } from 'react-native'
import * as S from './styles'

type Props = {
  bgColor?: S.ButtonBgColorProps
  children?: ReactElement<any, any> | JSX.Element | undefined | never[]
  inputRef?: React.RefObject<TouchableOpacity>
  showIcon?: boolean
  text: string
  onPressHandle?: () => void
}

export const Button = ({
  bgColor = '',
  inputRef,
  children = undefined,
  onPressHandle,
  text,
  ...rest
}: Props) => {
  return (
    <S.Container
      bgColor={bgColor}
      onPress={onPressHandle}
      ref={inputRef}
      {...rest}
    >
      <S.Icon>
        {children}
      </S.Icon>

      <S.Title bgColor={bgColor}>
        {text}
      </S.Title>
    </S.Container>
  )
}
