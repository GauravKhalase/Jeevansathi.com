import React from "react";
import SwitchCustomStyles from "../../Components/Common/SwitchCustomStyles";

const AlertManager = () => {
  return (
    <div>
      <div>
        <p>Mail Alerts</p>
        <p>
          You are receiving these Emails on your registered Email ld -
          dummyemail@gmail.com
        </p>
        <div>
          <div className="">
            <div>Match Alert Mails</div>
            <div>
              Receive mails where Jeevansathi recommends a profile to you.
            </div>
            <div>
              <button>Daily</button>
              <button>3 times/week</button>
              <button>Unsubscribe</button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p>Match Alert Mails</p>
            <p>Receive mails where Jeevansathi recommends a profile to you.</p>
          </div>
          <SwitchCustomStyles />
        </div>
      </div>
      
    </div>
  );
};

export default AlertManager;
