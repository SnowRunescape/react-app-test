import {Route} from "react-router-dom";
import TemplateDefault from './default/default'
import TemplateTranscend from './transcend/transcend'

const templates = {
    default: TemplateDefault,
    transcend: TemplateTranscend
}

export default (props) => {
    const {path, exact, store, component: Component} = props

    let Template = template(store.template);

    if (!Template) {
        return "template nao localizado"
        // RENDER 503
    }

    return (
        <Route exact={exact} path={path} render={() => (
            <Template {...props}>
              <Component {...props}/>
            </Template>)}
        />
    )
}

function template(template)
{
    return templates["default"]
}
