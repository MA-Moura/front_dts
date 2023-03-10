import React from "react";
// import qr_logo from "./img/qr_code.svg";
import qr_not_ok from "./img/fermer.svg";
import information_svg from "./img/information.svg";

function NotvalidPage(props) {
  function formatDate(input) {
    var datePart = input.match(/\d+/g),
      year = datePart[0], // get only two digits
      month = datePart[1],
      day = datePart[2];

    return day + "/" + month + "/" + year;
  }
  return (
    <div className="notValidPage">
      <header className="App-header">
        <img className="is-not-valid-logo" src={qr_not_ok} alt="on_shake"></img>
        <h1 className="refused_subtitle">BON DE RÉDUCTION</h1>
        <h1 className="refused_title">REFUSÉ</h1>
        <div className="refus">
          <h2 className="motif_title">Le motif</h2>
          <div className="refus-type">
            <div className="picto-refus">
              <img
                className="information-svg"
                src={information_svg}
                alt="on_shake"
              ></img>
            </div>

            {props.info.status === 2 && (
              <div className="explain-refus">
                <h3 className="refus-title">Offre déjà utilisée</h3>
                <p className="promotion-explain-title">
                  Utilisé le {formatDate(props.info.update_date)} à&nbsp;
                  {props.info.update_date.substr(
                    props.info.update_date.length - 8
                  )}
                </p>
              </div>
            )}
            {props.info.status === 1 && (
              <div className="explain-refus">
                <h3 className="refus-title">Offre expirée</h3>
                <p className="promotion-explain-title">
                  Offre valable jusqu'au{" "}
                  {formatDate(props.info.expiration_date)}
                </p>
              </div>
            )}
            {props.info.status === 3 && (
              <div className="explain-refus">
                <h3 className="refus-title">QR non retrouvé</h3>
                <p className="promotion-explain-title">
                  Conctactez support@3550-agency.com
                </p>
              </div>
            )}
            {props.info.status === 4 && (
              <div className="explain-refus">
                <h3 className="refus-title">Erreur Inconnue</h3>
                <p className="promotion-explain-title">
                  Conctactez support@3550-agency.com
                </p>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default NotvalidPage;
