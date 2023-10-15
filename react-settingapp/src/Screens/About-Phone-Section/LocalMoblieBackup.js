import React from "react";
import Headingtxt from "../../Components/Headingtxt";
import "../CSS/localMobileBackup.css";
import messageicon from "../Images/messageicon.png";
import appicon from "../Images/appicon.png";
import copyicon from "../Images/copyicon.png";
import ToggleBtn from "../../Components/ToggleBtn";

export default function LocalMoblieBackup() {
  return (
    <>
      <div className="localmoboile-container">
        <Headingtxt headingtxt="Back up Restore"></Headingtxt>

        <div className="mobile-restore">
          <img src={messageicon} alt="message"></img>
          <p
            style={{
              marginTop: "-0px",
              color: "black",
              fontWeight: "500",
              fontSize: "18px",
              marginLeft: "20px",
            }}
          >
            SMS,Contacts,call history
            <p
              style={{
                color: "#534d4d",
                fontSize: "16px",
                marginTop: "2px",
                fontWeight: "300",
              }}
            >
              2.5 MB 3/3{" "}
            </p>
          </p>
          <div style={{ display: "flex", marginLeft: "-20px" }}>
            {" "}
            <ToggleBtn></ToggleBtn>
          </div>
        </div>

        <div className="mobile-restore">
          <img src={appicon} alt="message"></img>
          <p
            style={{
              marginTop: "-0px",
              color: "black",
              fontWeight: "500",
              fontSize: "18px",
              marginLeft: "20px",
              marginRight: "-25px",
            }}
          >
            Other system app data
            <p
              style={{
                color: "#534d4d",
                fontSize: "16px",
                marginTop: "2px",
                fontWeight: "300",
              }}
            >
              700 MB 18/18{" "}
            </p>
          </p>
          <div
            style={{ display: "flex", marginLeft: "0px", marginRight: "-35px" }}
          >
            {" "}
            <ToggleBtn></ToggleBtn>
          </div>
        </div>

        <div className="mobile-restore">
          <img src={copyicon} alt="message"></img>
          <p
            style={{
              marginTop: "-0px",
              color: "black",
              fontWeight: "500",
              fontSize: "18px",
              marginLeft: "20px",
              marginRight: "-25px",
            }}
          >
            Other system app data
            <p
              style={{
                color: "#534d4d",
                fontSize: "16px",
                marginTop: "2px",
                fontWeight: "300",
              }}
            >
              1.3 GB 140/40{" "}
            </p>
          </p>
          <div
            style={{ display: "flex", marginLeft: "0px", marginRight: "-35px" }}
          >
            {" "}
            <ToggleBtn></ToggleBtn>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div
          style={{
            color: "#534d4d",
            fontSize: "14px",
            marginTop: "150px",
            fontWeight: "300",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          <p>
            1. Copy backups to your computer to avoid data loss.
            <p>2. Backups will be saved to MIUI-Backup-AllBackup.</p>
          </p>
        </div>

        <div class="button-container">
          <button class="round-button">Back-up</button>
        </div>
      </div>
    </>
  );
}
