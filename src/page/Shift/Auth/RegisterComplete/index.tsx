import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { dark } from '../../../../utils/constants/color';
import { ShiftRegistrationCompleteSchema } from '../../../../utils/schemas';
import Button from '../../../../components/base/Button';
import Select from '../../../../components/base/Select-aa';
import Checkbox from '../../../../components/base/CheckBox';

const shiftExperienceList = [
  { label: 'Glass Collecting', name: 'glassCollecting' },
  { label: 'Waiting Staff', name: 'waitingStaff' },
  { label: 'Bartender', name: 'bartender' },
  { label: 'Kitchen Staff', name: 'kitchenStaff' },
  { label: 'Cocktail Waiter', name: 'cocktailWaiter' },
  { label: 'Barista1', name: 'barista1' },
  { label: 'Barista2', name: 'barista2' },
  { label: 'Barista3', name: 'barista3' },
  { label: 'Barista4', name: 'barista4' },
  { label: 'Barista5', name: 'barista5' },
  { label: 'Barista6', name: 'barista6' },
];

const dataArray = [
  'glassCollecting',
  'waitingStaff',
  'bartender',
  'kitchenStaff',
  'cocktailWaiter',
  'barista1',
  'barista2',
  'barista2',
  'barista3',
  'barista4',
  'barista5',
];

const sectorList = [
  { label: 'Hospital', value: 'hospital' },
  { label: 'Retail', value: 'retail' },
  { label: 'Hair and Beauty', value: 'hair_and_beauty' },
  { label: 'Construction', value: 'construction' },
  { label: 'Agriculture', value: 'agriculture' },
  { label: 'Film Production', value: 'film_production' },
  { label: 'Theatre and Cinema', value: 'theatre_and_cinema' },
  { label: 'Courier & Shipping', value: 'courier_shipping' },
  { label: 'Nursing and Care', value: 'Nursing_and_care' },
  { label: 'Other', value: 'other' },
];

const ShiftRegisterComplete: React.FC = () => {
  const {
    control,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ShiftRegistrationCompleteSchema) });
  const watchField = watch();

  const onSubmit = (data: FieldValues) => {
    let requestData: { [key: string]: any } = {};
    const checkData = Object.keys(data)?.filter((item) => data[item] === true && item !== 'noExperience');
    requestData.sector = data.sector;
    requestData.experience = checkData;
  };

  useEffect(() => {
    if (watchField.noExperience) {
      dataArray.forEach((item) => {
        setValue(item, false);
      });
    }
  }, [watchField.noExperience]);

  useEffect(() => {
    if (dataArray?.filter((item) => watchField[item] === true && item !== 'noExperience')?.length) {
      setValue('noExperience', false);
    }
  }, [...dataArray.map((item) => watchField[item])]);

  return (
    <View style={styles.wrapper}>
      <View style={{ paddingHorizontal: 30 }}>
        <Text style={styles.text}>Select the type of work you are looking for and have experience of:</Text>
      </View>

      <View
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1, paddingTop: 20 }}
      >
        <Select
          styles={{ paddingHorizontal: 30 }}
          control={control}
          list={sectorList}
          name="sector"
          error={errors.sector}
          placeholder="Choose your Sector"
        />
        <View style={{ paddingVertical: 20 }}>
          <ScrollView style={{ height: '73%' }}>
            <View style={{ gap: 20, paddingHorizontal: 30 }}>
              {[...shiftExperienceList, { label: 'No Experience', name: 'noExperience' }]?.map((item) => (
                <Checkbox setValue={setValue} key={item.name} control={control} name={item.name} label={item.label} />
              ))}
            </View>
          </ScrollView>
        </View>
        <Button styles={{ paddingHorizontal: 30 }} onPress={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: dark,
  },
  text: {
    fontSize: 18,
    color: 'white',
    paddingHorizontal: 20,
    lineHeight: 24,
  },
});

export default ShiftRegisterComplete;
