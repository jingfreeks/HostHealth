import React, {useState, useMemo} from 'react';
import {
  FormHeaderContainerStyled,
  FormTextInputContainerStyled,
  FormContainerStyled,
  FormHeaderTextStyled,
} from './styles';
import {StyleSheet} from 'react-native';
import {FormTextController, Bbutton, Text} from '@/component';
import {useCityHooks} from './hooks';
import {colors} from '@/utils/themes';
import {useForm, FormProvider, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAddCityMutation, useUpdateCityMutation} from '@/slice/city';
import {Dropdown} from 'react-native-element-dropdown';
import {Schema} from './schema';
import * as yup from 'yup';
import type {RoutesProps} from './types';
import {statedata} from './constant';
import FontAwesome from 'react-native-vector-icons/MaterialIcons';
import {useStateHooks} from '@/screens/admin/state/hooks';

const Form = (props: RoutesProps) => {
  const {navigation} = useCityHooks();

  const [isFocus, setIsFocus] = useState(false);
  const {route} = props;
  const {name,state, _id} = route?.params || {};
  const [value, setValue] = useState<any>(state);
  type FormData = yup.InferType<typeof Schema>;
  const formMethod = useForm<FormData>({
    defaultValues: {
      name: name || '',
    },
    resolver: yupResolver(Schema),
  });

  const [addCity, {isLoading: addStateLoading}] = useAddCityMutation();
  const [updateCity, {isLoading: updateStateLoading}] = useUpdateCityMutation();

  const {states, isLoading: stateloading} = useStateHooks();

  const statesdata = useMemo(() => {
    let statedata = states;
    return states?.ids?.map((item: string) => {
      return {
        label: statedata?.entities[item]?.name,
        value: item,
      };
    });
  }, [states]);
  console.log('statesdata', statesdata);
  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      let response: any;
      if (_id) {
        //update
        response = await updateCity({
          name: data?.name,
          stateId: value,
          image:
          'https://img.freepik.com/premium-photo/city-skyline-with-city-background_1249034-36162.jpg?w=826',
          id: _id,
        }).unwrap();
      } else {
        //insert
        response = await addCity({
          name: data?.name,
          stateId: value,
          image:
            'https://img.freepik.com/premium-photo/city-skyline-with-city-background_1249034-36162.jpg?w=826',
        });
      }
      if (response?.error) {
        alert(response?.error?.data?.message);
      } else {
        navigation.goBack();
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <FormContainerStyled>
      <FormProvider {...formMethod}>
        <FormHeaderContainerStyled>
          <FormHeaderTextStyled TextMode="Htitlenormal">
            City Form Information
          </FormHeaderTextStyled>
        </FormHeaderContainerStyled>
        <FormTextInputContainerStyled>
          <FormTextController
            Label="Name"
            name="name"
            placeholder="Name"
            rules={{
              required: true,
            }}
          />
        </FormTextInputContainerStyled>
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={!stateloading ? statesdata : []}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item: any) => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <FontAwesome
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="safety-check"
              size={20}
            />
          )}
        />
        {!value && <Text TextMode="ErrorText">{'State must be required'}</Text>}
        <Bbutton
          bcolor={colors.lightergreen}
          border={10}
          loaders={addStateLoading || updateStateLoading}
          title="Save"
          onPress={formMethod.handleSubmit(onSubmit)}
        />
      </FormProvider>
    </FormContainerStyled>
  );
};

export default Form;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
