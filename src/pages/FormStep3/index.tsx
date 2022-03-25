import * as C from './styles'
import { Theme } from '../../components/Theme/intex'
import {Link, useHistory} from 'react-router-dom'
import {useForm, FormActions} from '../../context/FormContext'
import {ChangeEvent, useEffect} from 'react'

export const FormStep3 = () => {
    const {state, dispatch} = useForm()
    const history = useHistory()

    const handleNextStep = () =>{
        if(state.email !== '' && state.github !== '') {
            history.push('/step4')
        } else{
            alert('preencha os dados corretamente')
        }

    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    useEffect(()=>{
        if(state.name === '') {
            history.push('/')
        } else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
        

    },[])

    return(
        <Theme>
            <C.Container>
                <p className='passo'>Passo 3/3</p>
                <h2>Legal {state.name}, onde te achamos?</h2>
                <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

                <label>Qual o seu email?</label>
                <input 
                type="email" 
                onChange={handleEmailChange}
                />

                <label>Qual é seu GitHub?</label>
                <input 
                type="url" 
                onChange={handleUrlChange}
                />

                <div>
                    <Link to='/step2'>Voltar</Link>
                    <button onClick={handleNextStep}>Finalizar</button>
                </div>

            </C.Container>
        </Theme>
    )
}