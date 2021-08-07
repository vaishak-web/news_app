import React, {useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = "e6b400929c6e48636810b6b5637b91062e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () =>{
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({command}) =>{
                if(command === 'testCommand'){
                    alert('This code is executed');
                }
            }
        })
    }, []);


    return(
        <div>
            <h1>AI</h1>
        </div>
    )
}
export default App;