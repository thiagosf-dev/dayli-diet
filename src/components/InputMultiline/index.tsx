import { Text, TextInput, TextInputProps } from 'react-native'
import * as S from './styles'

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
  label: string
}

export const InputMultiline = ({
  inputRef,
  label,
  ...rest
}: Props) => {
  return (
    <S.Container>
      <S.Label> {label} </S.Label>
      <S.Input
        ref={inputRef}
        textAlignVertical={'top'}
        multiline={true}
        numberOfLines={5}
        {...rest}
      />
    </S.Container>
  )
}
