import React from "react";
// import qr_logo from "./img/qr_code.svg";
import qr_ok from "./img/ok.svg";
// import logo_fleche from "./img/fleche_basse.svg";

function ValidPage(props) {
  return (
    <div className="ValidPage">
      <header className="App-headerr"></header>
      <div className="validate-top-page">
        <img className="is-valid-logo" src={qr_ok} alt="on_shake"></img>
        <h1 className="validate_subtitle">BON DE RÉDUCTION</h1>
        <h1 className="validate_title">VALIDE </h1>
      </div>

      <div className="full-remise">
        <div>
          <h1 className="title-remise">Type d'offre</h1>
        </div>
        <div className="offer-type">
          <div className="offer-type-left">
            <div className="offer_type">
              <p className="promotion-circle">{props.info.store}</p>
            </div>
          </div>
          <div className="offer-type-right">
            <h3 className="promotion-explain-title2">{props.info.offer}</h3>
            <p className="promotion-explain-sub">{props.info.description}</p>
          </div>
        </div>
      </div>

      <div className="validate-bottom-page">
        {/* <img className="fleche-logo" src={logo_fleche} alt="on_shake"></img> */}
        {/* <div className="has-paid">
          <p className="has-paid-title">EST-IL PASSÉ EN CAISSE ?</p>
          <div className="has-paid-buttons">
            <button className="has-paid-yes" type="button">OUI</button>
            <button className="has-paid-no" type="button">NON</button>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default ValidPage;
