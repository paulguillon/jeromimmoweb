import { FunctionComponent, useEffect, useState } from "react";
import Faq from "../../models/faq/faq";
import FaqService from "../../services/faq-service";

type Props = {
    idFaq: number,
}

const FaqCat: FunctionComponent<Props> = ({idFaq}) => {

    const [faq, setFaq] = useState<Faq>();


    useEffect(() => {
        FaqService.getAllData(idFaq).then(data => setFaq(faq));
    }, [idFaq]);

    return (
        <div>
            test
        </div>
    );
};

export default FaqCat;