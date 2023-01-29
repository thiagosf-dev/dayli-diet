import { Text, TextInput, TextInputProps } from 'react-native'
import * as S from './styles'

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
  isMultiline?: boolean
  label: string
}

export const Input = ({
  inputRef,
  isMultiline = false,
  label,
  ...rest
}: Props) => {
  return (
    <S.Container>
      <S.Label> {label} </S.Label>
      <S.Input
        multiline={isMultiline}
        numberOfLines={isMultiline ? 5 : 1}
        ref={inputRef}
        textAlignVertical={isMultiline ? 'top' : 'center'}
        {...rest}
      />
    </S.Container>
  )
}
