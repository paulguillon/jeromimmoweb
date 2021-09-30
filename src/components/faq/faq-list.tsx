import { FunctionComponent, useEffect, useState } from "react";
import Faq from "../../models/faq/faq";
import FaqService from "../../services/faq-service";
import Loader from "../loader";
import FaqCat from "./faq-cat";


const FaqList: FunctionComponent = () => {

    const [faqs, setFaqs] = useState<Faq[]>([]);

    useEffect(() => {
        FaqService.getFaqs().then(faqs => setFaqs(faqs));
    }, []);

    return (

        <div>

            <div className="container">


                {faqs ? (
                    faqs.map((catFaq: any) => (
                        <div className="bg-white shadow-1 mb-5 p-2 border">
                            <h2>{catFaq.faqTypeName}  </h2>
                            <div>
                                {Object.keys(catFaq).map((faq: any) => (
                                    <FaqCat key={catFaq[faq].idFaq} idFaq={catFaq[faq].idFaq} />
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <Loader></Loader>
                )}

            </div>
        </div >
    );
};

export default FaqList;