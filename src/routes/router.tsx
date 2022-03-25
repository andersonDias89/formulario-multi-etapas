import { BrowserRouter, Route } from 'react-router-dom'

import { FormStep1 } from '../pages/FormStep1/intex'
import { FormStep2 } from '../pages/FormStep2'
import { FormStep3 } from '../pages/FormStep3'
import {FormStep4} from '../pages/FormStep4'

export const Router = () => {
    return(
        <BrowserRouter>
             <Route path='/' exact component={FormStep1} />
             <Route path='/step2' component={FormStep2} />
             <Route path='/step3' component={FormStep3} />
             <Route path='/step4' component={FormStep4} />
        </BrowserRouter>
    )
}