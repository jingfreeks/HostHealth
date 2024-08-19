import React from 'react';
import {ContainerStyled, TextInputContainerStyled} from '../styles';
import {Prevnextfooter} from '@/component/template';
import {FormProvider} from 'react-hook-form';
import {FormTextController} from '@/component/molecules';
import {useOnBoardingHooks} from '../hooks';

const BankInfoScreens = () => {
  const {navigation,formBankInfo} = useOnBoardingHooks();
  const handleBankInfoNext=()=>{

  }
  return (
    <ContainerStyled>
      <FormProvider {...formBankInfo}>
        <TextInputContainerStyled>
          <FormTextController
            Label="Account Number"
            name="accountNumber"
            placeholder="First Name"
            rules={{
              required: true,
            }}
          />
        </TextInputContainerStyled>
        <TextInputContainerStyled>
          <FormTextController
            Label="Account Name"
            name="accountName"
            placeholder="First Name"
            rules={{
              required: true,
            }}
          />
        </TextInputContainerStyled>
        <TextInputContainerStyled>
          <FormTextController
            Label="Bank Name"
            name="bankName"
            placeholder="First Name"
            rules={{
              required: true,
            }}
          />
        </TextInputContainerStyled>
        <Prevnextfooter
          nextOnPress={formBankInfo.handleSubmit(handleBankInfoNext)}
          prevOnPress={()=>navigation.goBack()}
          isPrevView
          loadernext={false}
        />
      </FormProvider>
    </ContainerStyled>
  );
};
export default BankInfoScreens;
