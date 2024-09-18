import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {StyleSheet} from 'react-native';
import {Text} from '@/component'
import type {dropdownTypes} from './types';

import FontAwesome from 'react-native-vector-icons/MaterialIcons';

const Dropdownscreen = (props: dropdownTypes) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const {loading, data, value='', isError, errmessage,onChange} = props;
  return (
    <>
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={!loading ? data : []}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={onChange}
        renderLeftIcon={() => (
          <FontAwesome
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="safety-check"
            size={20}
          />
        )}
      />
      {isError && <Text TextMode="ErrorText">{errmessage}</Text>}
    </>
  );
};
export default Dropdownscreen;
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
