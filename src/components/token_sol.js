import React from "react";

export function TokenSOL() {
  return (
    <div className="container">
      <p className="bottom-space-sm" />
      <div className="token__section">
        <div className="token__wrapper">
          <div className="token__container-card">
            <div
              className="token__container-cardInfo"
              style={{ height: "200px" }}
            >
              <p className="bottom-space-sm" />

              <div className="row" style={{ flexFlow: "column", padding: "0px 10px 10px 1px" }}>

                  <img
                    src="images/web/solana1.png"
                    width="150px"
                    alt="solana-logo"
                  />
                  
                <h2
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    textAlign: "center",
                    letterSpacing: "0.95em",
                    margin: "5px",
                  }}
                >
                  <i>MEME</i> TOKEN
                </h2>
              </div>
            </div>
            <p className="bottom-space-xsm" />
            <div className='img-zoom'>
            <div className='float-div'>
            <img
                    src="images/web/upsidedown.gif"
                    width="275px"
                    alt="xtronaut-logo"
                    padding="5px 5px 5px 5px"
                  />
            </div>
            </div>

            <p className="bottom-space-xsm" />
            <div
              className="row"
              style={{ flexFlow: "row", alignItems: "center" }}
            >
              <div className="col">
                <h3
                  style={{
                    fontSize: "19px",
                    margin: "0px 0px 0px 0px",
                    opacity: 1,
                    letterSpacing: "0.35em",
                  }}
                >
                  LAUNCH
                </h3>
              </div>
              <div className="col">
                <h3
                  style={{
                    fontSize: "19px",
                    margin: "0px 0px 0px 0px",
                    opacity: 1,
                    letterSpacing: "0.35em",
                  }}
                >
                  &emsp;|&emsp;
                </h3>
              </div>
              <div className="col">
                <h3
                  style={{
                    fontSize: "25px",
                    margin: "0px 0px 0px 0px",
                    opacity: 1,
                    letterSpacing: "0.35em",
                  }}
                >
                  SOON
                </h3>
                
              </div>
            </div>

          </div>
          </div>
        </div>
      </div>
  );
}
