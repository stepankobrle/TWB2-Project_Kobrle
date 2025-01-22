import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App";
import LoginForm from "../components/auth/LoginForm";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/LoginForm">
                <LoginForm/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews