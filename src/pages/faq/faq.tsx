import { FunctionComponent } from "react";
import FaqList from "../../components/faq/faq-list";
import "../../assets/css/general.css";

const Faq: FunctionComponent = () => {

    return (
        <div>
            <header className="text-center p-5 mb-5">
                <h2>Foire aux questions </h2>
            </header>
            <div>
                <FaqList />
            </div>
        </div>
    )
};

export default Faq;
