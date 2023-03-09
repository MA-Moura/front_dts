import React from "react";
import qr_logo from "./img/qr_code.svg"
import qr_not_ok from "./img/fermer.svg"
import information_svg from "./img/information.svg"


function NotvalidPage() {

    return (
        <div className="notValidPage">
          <header className="App-header">
          <img className="is-not-valid-logo" src={qr_not_ok} alt="on_shake"></img>
          <h1 className="refused_subtitle">
            BON DE RÉDUCTION
          </h1>
          <h1 className="refused_title">
            REFUSÉ
          </h1>
          <div className="refus">
            <h2 className="motif_title">
                Le motif
            </h2>
            <div className="refus-type">
                <div className="picto-refus">
                    <img className="information-svg" src={information_svg} alt="on_shake"></img>
                </div>
                <div className="explain-refus">
                    <h3 className="refus-title">Offre expirée</h3>
                    <p className="promotion-explain-title">Offre valable du 02 au 30/02/2023</p>
                </div>
            </div>
            </div>
          </header>
        </div>
      );
  }
  
  export default NotvalidPage;