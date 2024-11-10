import React from 'react';
import {ScrollViewContainer,ContainerStyled} from './styles'
import type {JobDetailContainerProps} from './types'

const JobDetailContainer=(props:JobDetailContainerProps)=>{
    const {children}=props
    return(
        <ScrollViewContainer>
            <ContainerStyled>
                {children}
            </ContainerStyled>
        </ScrollViewContainer>
    )
}
export default JobDetailContainer