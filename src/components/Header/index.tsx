import Avatar from '@assets/avatar.png'
import Logo from '@assets/logo.png'
import { foodRemoveAll } from '@storage/food/foodRemoveAll'
import { Alert, View } from 'react-native'
import * as S from './styles'

type Props = {
  handleSetRefresh: (toRefresh: boolean) => void
}

export const Header = ({ handleSetRefresh }: Props) => {
  async function handleRemoveAll() {
    Alert.alert(
      'PERIGO',
      'TODOS OS REGISTROS SERÃO EXCLUÍDOS. CONFIRMA?',
      [
        { text: 'NÃO', style: 'cancel' },
        { text: 'SIM', onPress: async () => await fetchRemoveAll(), style: 'default' }
      ]
    )
  }

  async function fetchRemoveAll() {
    try {
      await foodRemoveAll()
      handleSetRefresh(true)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <S.Container>
      <S.Logo source={Logo} />
      <View onTouchStart={handleRemoveAll}>
        <S.Avatar source={Avatar} />
      </View>
    </S.Container>
  )
}
