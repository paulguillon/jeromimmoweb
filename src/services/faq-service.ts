import axios from "axios";
import Faq from "../models/faq/faq";
import FaqData from "../models/faq/faqData";

export default class FaqService {

    static async getFaqs(): Promise<Array<Faq>> {
        //FaqAll
        const resp = await axios({
            method: 'GET',
            url: `https://jeromimmo.fr/api/v1/faq`,
        });
        const result = await resp.data;
        return result;

    }

    static async getFaq(idFaq: number): Promise<Faq> {
        // OneFaq
        const resp = await axios({
            method: 'GET',
            url: `https://jeromimmo.fr/api/v1/${idFaq}/faq`,
        });
        const result = await resp.data;
        return result;
    }

    static async getAllData(idFaq: number): Promise<Array<FaqData>> {
        const promise =
            await axios(`https://jeromimmo.fr/api/v1/faq/${idFaq}/data`);

        const result = await promise.data;
        console.log(result);
        return result.data;
    }

    static async getData(idFaq: number, key: string): Promise<FaqData> {
        const promise = await axios({
            method: 'GET',
            url: `https://jeromimmo.fr/api/v1/visits/${idFaq}/data/${key}`,
        });
        const result = await promise.data;
        return result.data;
    }
}

