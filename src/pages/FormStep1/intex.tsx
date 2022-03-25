import * as C from './styles'
import {useHistory} from 'react-router-dom'
import { useForm, FormActions } from '../../context/FormContext'
import { Theme } from '../../components/Theme/intex'
import { ChangeEvent, useEffect } from 'react'


export const FormStep1 = () => {
    

    const history = useHistory()
    const { state, dispatch} = useForm()

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value 

        })
    }

    const handleNextStep = () =>{
        if(state.name !== '') {
            history.push('/step2')
        } else{
            alert('preencha os dados corretamente')
        }

    }

    useEffect(()=>{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })

    },[])


    return(
        <Theme>
            <C.Container>
                <p className='passo'>Passo 1/3</p>
                <h2>Vamos começar com o seu nome</h2>
                <p>Preencha o campo com seu nome</p>

                <label>Seu nome completo </label>
                <input 
                    type="text" 
                    autoFocus
                    onChange={handleNameChange}
                    
                    />
                    
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}