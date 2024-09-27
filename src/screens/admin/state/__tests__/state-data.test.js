import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';
import {State} from '../index';

const deleteState = () => ({data: {}});
jest.mock('@/slice',()=>{
  return{
    useGetStateQuery:()=>({
      isLoading:false,
      isSuccess:true,
      isError:false,
      states: {
        __v: 0,
        _id: '66f54f826d56c57bb6ccf641',
        name: 'State name',
      },
      data: {
        entities: {
          '66f54f826d56c57bb6ccf641': {
            __v: 0,
            _id: '66f54f826d56c57bb6ccf641',
            name: 'State name',
          },
        },
        ids: ['66f54f826d56c57bb6ccf641'],
      }
    }),
    useDeleteStatesMutation:()=>[deleteState,{isLoading:false,isError:false}],
  }
})
describe('State admin with data screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<State />);
    expect(all.toJSON()).toMatchSnapshot();
  });

  it('Should to trigger Create Button', () => {
    const all = renderWithProviders(<State />);
    const el = all.getByTestId('StateCreateButtonTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

  it('Should to trigger Edit Button', () => {
    const all = renderWithProviders(<State />);
    const el = all.getByTestId('StateEditFormTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

  it('Should to trigger Delete Item Button', () => {
    const all = renderWithProviders(<State />);
    const el = all.getByTestId('StateDeleteFormTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });
});
