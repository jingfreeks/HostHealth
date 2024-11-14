import React from 'react';
import {Loaders} from '@/component/atoms/loaders';
import {Text, Button1} from '@/component';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useJobsHooks} from '../../hooks';
import {
  ContainerStyled,
  InfoContainerStyled,
  ActionButtonContainerStyled,
  ImageContainerStyled,
  ImageStyled,
} from './styles';
import {AdminJobsCardDetailsProps} from './types'
const ListItem = (props: {item: AdminJobsCardDetailsProps}) => {
  const {item} = props;
  const {handleDeleteJobs, deleteLoading, navigation} = useJobsHooks();

  return (
    <ContainerStyled onPress={()=>navigation.navigate('AdminJobDetails',{adminJobDetail:item})}>
      <InfoContainerStyled>
        <Text numberOfLines={1} TextMode="Htitle">
          {item?.jobtitle}
        </Text>
        <Text numberOfLines={1} TextMode="Ptitle">
          {item?.compname}
        </Text>
        <Text numberOfLines={1} TextMode="Title">
          {item?.salaryrange}
        </Text>
      </InfoContainerStyled>
      <ActionButtonContainerStyled>
        <Button1
          // testId={'CompanyEditFormTestId'}
          bcolor="transparent"
          onPress={() =>
            navigation.navigate('JobsForm', {...item, cityId: item.city})
          }
          border={0}>
          <FontAwesome name={'pencil'} size={25} />
        </Button1>
        <Button1
          testId={'CompanyDeleteFormTestId'}
          bcolor="transparent"
          onPress={() => handleDeleteJobs(item._id)}
          border={0}>
          {deleteLoading ? (
            <Loaders size={'small'} />
          ) : (
            <FontAwesome name={'trash-o'} size={25} />
          )}
          {/* <FontAwesome name={'trash-o'} size={25} /> */}
        </Button1>
      </ActionButtonContainerStyled>
    </ContainerStyled>
  );
};

export default ListItem;
