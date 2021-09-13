import React, { FunctionComponent, useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import Agency from "../../models/agency/agency";
import AgencyCardDetail from "../../components/agency/agency-card-detail";
import AgencyService from "../../services/agency-service";
import Loader from "../../components/loader";

type Params = { idAgency: string };

const AgencyDetail: FunctionComponent<RouteComponentProps<Params>> = ({
  match,
}) => {
  const [agency, setAgency] = useState<Agency | null>(null);

  useEffect(() => {
    AgencyService.getAgency(+match.params.idAgency).then((agency) =>
      setAgency(agency)
    );
  }, [match.params.idAgency]);

  return (
    <div>
      {agency ? (
        <div>
          <AgencyCardDetail key={agency.idAgency} agency={agency} />
          {/* <Btn texte="Retour" push="/agencies" /> */}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AgencyDetail;
