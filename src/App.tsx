import {Router} from './routes/router'
import {FormProvider} from './context/FormContext'

import GlobalStyled from './components/styles/GlobalStyledComponents/GlobalStyled';

function App() {
  return (
    <div>
      <FormProvider>
          <Router />
          <GlobalStyled />
      </FormProvider>
    </div>
  );
}

export default App;
