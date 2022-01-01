import {Route} from "react-router-dom";
import TemplateDefault from './default'
import TemplateTranscend from './transcend'

export default ({path, exact, layout, component: Component}) => {
    let Template = template(layout);

    if (Template === false) {
        // RENDER 503
    }

    return (
        <Route exact={exact} path={path} render={props => (
            <Template>
              <Component/>
            </Template>)}
        />
    )
}

function template(layout)
{
    if (layout == "default" || layout == "transcend") {
        return (layout == "default") ? TemplateDefault : TemplateTranscend;
    }

    return false;
}