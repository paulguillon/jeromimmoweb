
import { FunctionComponent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Visit from "../../models/visit/visit";
import AgencyService from "../../services/agency-service";
import PropertyService from "../../services/property-service";
import UserService from "../../services/user-service";
import VisitService from "../../services/visit-service";

type Props = {
  visit: Visit,
  token: string
};

const VisitDetail: FunctionComponent<Props> = ({ visit, token }) => {
  const history = useHistory();

  const [listId, setListId] = useState({
    idProperty: 0,
    idAgent: 0,
    idAgence: 0
  });
  const [propertyPic, setPropertyPic] = useState<string>();
  const [nomAgent, setNomAgent] = useState<string>();
  const [nomAgence, setNomAgence] = useState<string>();
  const [titre, setTitre] = useState<string>();
  const [comment, setComment] = useState<string>();

  useEffect(() => {
    //get all ids related to this visit
    VisitService.getData(visit.idVisit, "id", token).then(data => setListId(JSON.parse(data?.valueVisitData)));

    //get property image
    PropertyService.getData(listId?.idProperty, "thumbnail").then(data => setPropertyPic(data?.valuePropertyData));
    //get name of the agent
    UserService.getUser(token, listId?.idAgent).then(data => setNomAgent(data.lastnameUser + " " + data.firstnameUser[0].toUpperCase()));

    //get name of the agency
    AgencyService.getAgency(listId?.idAgence).then(data => setNomAgence(data.nameAgency + ", " + data.cityAgency + ", " + data.zipCodeAgency));

    VisitService.getData(visit.idVisit, "titre", token).then(data => setTitre(data?.valueVisitData));
    VisitService.getData(visit.idVisit, "comment", token).then(data => setComment(data?.valueVisitData));
    
  }, [visit.idVisit, token, listId?.idProperty, listId?.idAgent, listId?.idAgence]);

  return (
    <tr>
      <td>{visit.dateVisit}</td>
      <td>{titre}</td>
      <td>{nomAgent}</td>
      <td>{nomAgence}</td>
      <td>{comment ?? "Aucun"}</td>
      <td><img src={propertyPic} alt="bien" onClick={() => history.push('/property/' + listId?.idProperty)} /></td>
    </tr>
  );

}

export default VisitDetail;