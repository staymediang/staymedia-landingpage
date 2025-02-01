import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <Why />
    </div>
  );
};

const Hero = () => {
  return (
    <div>
      <div className="heroSub">
        <span>
          <p className="heroSubUnder">partnership/</p>
          <p className="heroSubText">duo msp program</p>
        </span>
        <h1>Duo MSP Program</h1>
        <p>
          Duo’s modern approach to security deserves a modern program approach
          for our Managed Service Providers (MSP). That means a partner program
          that provides you with simple-to-set-up security solutions that easily
          scales with your business.
        </p>
        <div>
          <button className="hbutton-two">Get a demo</button>
          <button className="hbutton-one">Become a partner</button>
        </div>
      </div>
      <div>{/* <img src={headerGraphic1} alt="" /> */}</div>
    </div>
  );
};

const Why = () => {
  return (
    <div>
      <div className="whyTop">
        <h1>Why Duo MSP</h1>
        <p>
          The Duo Managed Service Provider (MSP) Program enables partners to
          leverage Duo’s cloud-based, multi-tenant architecture to swiftly
          secure customers’ environments—all without the hassle of deploying
          physical agents. Grow your security stack and ensure application
          access to only trusted users and devices.{" "}
        </p>
      </div>

      <div className="whyMiddle">
        <div>Video</div>
        <div>
          <ul>
            <li>
              <span>/</span>
              <p>Conveniently manage all your customers in one console</p>
            </li>
            <li>
              <span>/</span>
              <p>Pay-as-you-go pricing to scale with your business</p>
            </li>
            <li>
              <span>/</span>
              <p>
                Lower TCO with speed to deployment and reduced support tickets
              </p>
            </li>
            <li>
              <span>/</span>
              <p>Faster ROI for your MSP business</p>
            </li>
            <li>
              <span>/</span>
              <p>Excellent documentation and sales enablement support</p>
            </li>
          </ul>
          <button className="hbutton-two">Get the MSP at a glance</button>
        </div>
      </div>

      <div className="whyThird">
        <div>
          <p>
            At Ntiva we see Cisco’s Duo portfolio as a beacon of continuous
            innovation, consistently adapting to the evolving landscape of
            cybersecurity. Its user-friendly interface, efficiency, and robust
            security measures make it an indispensable asset for any company
            striving for comprehensive multi-factor authentication coverage.”
          </p>
          <p>— Ted Brown, Director of Product Management, Ntiva</p>
        </div>
        <div>
          <div>{/* <img src={headerGraphic2} alt="" /> */}</div>
        </div>
      </div>
    </div>
  );
};

const Started = () => {
  return (
    <div>
      <div>{/* <img src={headerGraphic3} alt="" /> */}</div>
      <div>
        <h1>Get started with Duo MSP</h1>
        <p>
          Duo's Managed Service Provider program delivers security solutions
          that are simple to set up and can easily scale with your business as a
          service. Whether supporting you in your first install, helping you
          troubleshoot a customer problem, or powering you to land the next
          winning deal, our team, and access to our extensive documentation
          library are available to you any time, anywhere. After all: your
          success is our success.
        </p>
        <span>Get the playbook</span>
      </div>
    </div>
  );
};

const Grow = () => {
  return (
    <div>
      <h1>Grow your business with Duo!</h1>
      <div></div>
    </div>
  );
};

export default Home;
