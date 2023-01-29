import React from "react";
import { ETHBanners } from "./sub/eth_banners";

export function TokenETH() {
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

              <div className="row" style={{ flexFlow: "column", padding: "0px 15px 15px 15px" }}>

                  <img
                    src="images/web/ethereum.png"
                    width="150px"
                    alt="bscscan-logo"
                  />
                  <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    textAlign: "center",
                    letterSpacing: "0.95em",
                    margin: "5px",
                  }}
                >
                  <i>ERC-</i>20
                </h2>


              </div>
            </div>
            <div
              className="row"
              style={{ flexFlow: "row", alignItems: "center", margin: "15px", }}
            >
              <h2
                style={{
                  display: "flex",
                  fontSize: "26px",
                  fontWeight: "800",
                  textAlign: "center",
                }}
              >
                PINKSALE&emsp;
              </h2>
              
              <h2
                style={{
                  display: "flex",
                  fontSize: "20px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                &emsp;LAUNCHPAD
              </h2>
            </div>
            <div className="bottom-space-sm" />
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
                  1% YIELD
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
                    fontSize: "19px",
                    margin: "0px 0px 0px 0px",
                    opacity: 1,
                    letterSpacing: "0.35em",
                  }}
                >
                  POOL 1%
                </h3>
              </div>
            </div>
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col">
                <h3
                  style={{
                    fontSize: "15px",
                    margin: "0px 0px 0px 0px",
                    opacity: 1,
                    letterSpacing: "0.3em",
                    lineHeight: '1.85em'
                  }}
                >
                  ⭐ <br />1% 
                  <br />DOGE-1 SPACE MARKETING{" "}
                </h3>
              </div>
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                flexFlow: "column",
                alignItems: "center",
              }}
            >
            </div>
            <div className="bottom-space-md" />
            <div
              className="row"
              style={{ flexFlow: "column", alignItems: "center" }}
            >
            </div>
            <div className="row">
              <ETHBanners />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
