import React, {useMemo} from 'react';
import {View} from 'react-native';
import {
  ContainerStyled,
  TextInputContainerStyled,
  BankListContainerStyled,
  ButtonContainerStyled,
  FormContainerStyled
} from './styles';
import {Prevnextfooter} from '@/component/template';
import {FormProvider} from 'react-hook-form';
import {FormTextController} from '@/component/molecules';
import {useOnBoardingHooks} from './hooks';
import {Formdropdowncontroller} from '@/component';
import {Sbutton} from '@/component/molecules';
import {testingProps} from '@/utils/testframework';
import {useBankHooks} from '@/screens/admin/banks/hooks';

const BankInfoScreens = () => {
  const {formBankInfo,handleBankInfoSave} = useOnBoardingHooks();

  const {bank, bankLoading} = useBankHooks();

  const banksdata = useMemo(() => {
    let bankdata = bank;
    return bank?.ids?.map((item: string) => {
      return {
        label: bankdata?.entities[item]?.name,
        value: bankdata?.entities[item]?._id,
      };
    });
  }, [bank]);

  return (
    <ContainerStyled>
      <FormProvider {...formBankInfo}>
        <FormContainerStyled>
          <TextInputContainerStyled>
            <FormTextController
              Label="Account Number"
              name="accountNumber"
              placeholder="Account Number"
              rules={{
                required: true,
              }}
            />
          </TextInputContainerStyled>
          <TextInputContainerStyled>
            <FormTextController
              Label="Account Name"
              name="accountName"
              placeholder="Account Name"
              rules={{
                required: true,
              }}
            />
          </TextInputContainerStyled>
          <BankListContainerStyled>
            <Formdropdowncontroller
              Label="Bank"
              name="bankName"
              placeholder="Bank"
              rules={{
                required: true,
              }}
              loading={bankLoading}
              data={banksdata}
            />
          </BankListContainerStyled>
        </FormContainerStyled>
        <ButtonContainerStyled>
          <Sbutton
            testId={'ProfileTabDetailsTestId'}
            title={'Update'}
            loaders={bankLoading}
            bcolor={'#d6f3f3'}
            borderw={2}
            border={10}
            onPress={formBankInfo.handleSubmit(handleBankInfoSave)}
          />
        </ButtonContainerStyled>
      </FormProvider>
    </ContainerStyled>
  );
};
export default BankInfoScreens;
