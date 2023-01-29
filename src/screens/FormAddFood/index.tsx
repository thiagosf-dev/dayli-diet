import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { ItsInsideOutside } from '@components/ItsInsideOutside'
import { useNavigation, useRoute } from '@react-navigation/native'
import { foodCreate } from '@storage/food/foodCreate'
import { FoodModel } from '@storage/food/FoodModel'
import { foodSequenceInfoUpdate } from '@storage/food/foodSequenceInfoUpdate'
import { foodUpdate } from '@storage/food/foodUpdate'
import { AppError } from '@utils/AppErrors'
import { useEffect, useRef, useState } from 'react'
import { Alert, Keyboard, TextInput, View } from 'react-native'
import uuid from 'react-native-uuid'
import * as S from './styles'

export const FormAddFood = () => {
  const newFoodNameInputRef = useRef<TextInput>(null)
  const navigation = useNavigation()
  const route = useRoute()
  const selectedFood = route.params as FoodModel || null
  const [food, setFood] = useState<FoodModel>({} as FoodModel)
  const [yesButton, setYesButton] = useState(selectedFood?.status === 'YES' ? true : false)
  const [notButton, setNotButton] = useState(selectedFood?.status === 'NO' ? true : false)

  function handleHomeNavigate() {
    navigation.navigate('home')
  }

  function handleYesButtonSetFoodType() {
    setYesButton(true)
    setNotButton(false)
    setFood(prevFood => (
      {
        ...prevFood,
        status: 'YES'
      }
    ))
  }

  function handleNoButtonSetFoodType() {
    setYesButton(false)
    setNotButton(true)
    setFood(prevFood => (
      {
        ...prevFood,
        status: 'NO'
      }
    ))
  }

  function validations(food: FoodModel) {
    if (!food.name || food.name.trim().length <= 0) return Alert.alert(
      'Campo obrigatório',
      'O campo Nome deve ser preenchido'
    )
  }

  async function handleAddFood() {
    validations(food)

    if (selectedFood && food.id) {
      try {
        await foodUpdate(food)
        Alert.alert(
          'Sucesso',
          'A refeição foi alterada com sucesso.',
          [
            { text: 'OK', onPress: () => handleHomeNavigate() }
          ]
        )
      } catch (error) {
        console.error(error)
      }
    } else {
      const newFood: FoodModel = {
        ...food,
        id: uuid.v4() as string,
      }

      try {
        Keyboard.dismiss()
        foodCreate(newFood)
        Alert.alert(
          'Sucesso',
          'A refeição foi registrada com sucesso.',
          [
            { text: 'OK', onPress: () => handleHomeNavigate() }
          ]
        )
      } catch (error) {
        if (error instanceof AppError) {
          return Alert.alert(
            'Nova refeição',
            error.message
          )
        }
        console.error(error);
      }
    }

    foodSequenceInfoUpdate(food.status === 'YES')
  }

  useEffect(() => {
    newFoodNameInputRef.current?.focus()

    if (selectedFood) {
      setFood(selectedFood)
    }
  }, [])

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onPress={handleHomeNavigate}>
          <S.BackIcon />
        </S.BackButton>

        <S.Title> {'Nova refeição'} </S.Title>
      </S.Header>

      <S.FormContainer>
        <S.InputContainer>
          <Input
            inputRef={newFoodNameInputRef}
            label={'Nome'}
            onChangeText={(value) => setFood({ ...food, name: value })}
            value={food.name}
          />

          <Input
            label={'Descrição'}
            multiline={true}
            numberOfLines={5}
            onChangeText={(value) => setFood({ ...food, description: value })}
            textAlignVertical={'top'}
            value={food.description}
          />

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '53%',
            }}
          >
            <Input
              label={'*Data'}
              onChangeText={(value) => setFood({ ...food, date: value })}
              style={{ width: 153.5 }}
              keyboardType={'phone-pad'}
              maxLength={10}
              value={food.date}
            />

            <Input
              label={'Hora'}
              onChangeText={(value) => setFood({ ...food, hour: value })}
              style={{ width: 153.5 }}
              keyboardType={'numbers-and-punctuation'}
              maxLength={5}
              value={food.hour}
            />
          </View>

          <S.InsideOutsideContainer>
            <S.InsideOutsideLabel> Está dentro da dieta? </S.InsideOutsideLabel>
            <S.InsideOutsideOptionGroup>
              <ItsInsideOutside
                label={'Sim'}
                handleOnPress={handleYesButtonSetFoodType}
                option={yesButton ? 'YES' : undefined}
                type={yesButton ? 'YES' : undefined}
              />
              <ItsInsideOutside
                label={'Não'}
                handleOnPress={handleNoButtonSetFoodType}
                option={notButton ? 'NO' : undefined}
                type={notButton ? 'NO' : undefined}
              />
            </S.InsideOutsideOptionGroup>
          </S.InsideOutsideContainer>
        </S.InputContainer>


        <Button
          onPressHandle={handleAddFood}
          text={selectedFood?.id ? 'Salvar alterações' : 'Cadastrar refeição'}
        />
      </S.FormContainer>
    </S.Container>
  )
}
