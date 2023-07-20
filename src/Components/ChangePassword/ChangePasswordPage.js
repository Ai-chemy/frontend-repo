import Title from "./Title";
import ExplainText from './ExplainText';
import PageInput from './PageInput';

import './ChangePasswordPage.css';

const ChangePasswordPage = () => {
    return(
        <div className="ChangePasswordComponents">
            <Title />
            <PageInput />
            <ExplainText />
        </div>
        
    )
}

export default ChangePasswordPage;