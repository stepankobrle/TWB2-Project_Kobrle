import {createRoot} from 'react-dom/client';


import './index.css';
import App from './App';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import AuthProvider from "./components/auth/AuthProvider";


const container = document.getElementById('result')
const root = createRoot(container)
root.render(<DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
>
    <AuthProvider>
        <App tab="home"/>
    </AuthProvider>

</DevSupport>)