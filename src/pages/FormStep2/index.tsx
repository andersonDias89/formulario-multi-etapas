import * as C from './styles'
import {useHistory, Link} from 'react-router-dom'
import { Theme } from '../../components/Theme/intex'
import { SelectOption } from '../../components/SelectOption'
import {useForm, FormActions} from '../../context/FormContext'
import {useEffect} from 'react'


export const FormStep2 = () => {
    const {state, dispatch} = useForm()
    const history = useHistory()

    const handleNextStep = () => {
        history.push('/step3')

    }

    useEffect(()=>{
        if(state.name === '') {
            history.push('/')
        } else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
        

    },[])

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level 
        })

    }

    return(
        <Theme>
            <C.Container>
            <p className='passo'>Passo 2/3</p>
            <h2>{state.name}, o que melhor descreve você?</h2>
            <p>Escolha a melhor opção que descreve o seu nível atualmente</p>

            <SelectOption
            title="Sou iniciante"
            description="Comecei a programar há menos de 2 anos"
            icon="🥳"
            selected={state.level === 0}
            onClick={()=>setLevel(0)}
            />

             <SelectOption
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}
                />

            <div>
                <Link to='/'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </div>


            </C.Container>
        </Theme>
    )
}