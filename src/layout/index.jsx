import {Route} from "react-router-dom";
import TemplateDefault from './default'
import TemplateTranscend from './transcend'

const templates = {
    default: TemplateDefault,
    transcend: TemplateTranscend
}

export default (props) => {
    const {path, exact, store, component: Component} = props

    let Template = template(store.layout);

    if (!Template) {
        // RENDER 503
    }

    return (
        <Route exact={exact} path={path} render={() => (
            <Template {...props}>
              <Component/>
            </Template>)}
        />
    )
}

function template(layout)
{
    return templates[layout]
}
