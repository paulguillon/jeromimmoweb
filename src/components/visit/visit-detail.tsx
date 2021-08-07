
import { FunctionComponent, useEffect, useState } from "react";
import Visit from "../../models/visit/visit";
import VisitData from "../../models/visit/visitData";
import VisitService from "../../services/visit-service";

type Props = {
  visit: Visit,
  token: string
};

const VisitDetail: FunctionComponent<Props> = ({ visit, token }) => {
  const [allData, setAllData] = useState<Array<VisitData>>([]);

  useEffect(() => {
    VisitService.getAllData(visit.idVisit, token).then(data => setAllData(data));
  }, [visit.idVisit, token]);

  const ids = JSON.parse(allData?.filter(data => data.keyVisitData === "id")[0]?.valueVisitData)
  const titre = allData?.filter(data => data.keyVisitData === "titre")[0]?.valueVisitData;
  const comment = allData?.filter(data => data.keyVisitData === "comment")[0]?.valueVisitData;

  return (
    <tr>
      <td>{visit.dateVisit}</td>
      <td>{titre}</td>
      <td>{ids.idProperty}</td>
      <td>{ids.idAgent}</td>
      <td>{ids.idAgence}</td>
      <td>{comment}</td>
    </tr>
  );

}

export default VisitDetail;