import React from 'react';
import {useGetSkillsQuery} from '@/slice';
import {ListItem} from '../index';
import {ListItemContainerStyled} from '../../styles';
const List = (props: {skillId: string}) => {
  const {skillId} = props;
  const {skills}= useGetSkillsQuery('getSkills', {
    selectFromResult: ({data}: any) => ({
      skills: data?.entities[skillId],
    }),
  });

  return (
    <ListItemContainerStyled>
      <ListItem item={skills} />
    </ListItemContainerStyled>
  );
};
export default List;
