import tempLogo from "./tempLogo.png";

let salesRevenue = "₱ " + 1432.04;
let profit = "₱ " + 392.94;
let soldUnits = 4206;
let salesTarget = "₱ " + 1300;
let salesTargetPercent = 100 + "%";

const HeaderPanel = () => {
  return (
    <div className="headerPanel">
      <div className="alignMiddle childPanel1">
        <div>
          <div className="alignMiddle inlineBlock childLogo">
            <img src={tempLogo} width="100" height="100"></img>
          </div>
          <div className="alignMiddle inlineBlock childLogo2">
            <h1 className="noMargin">{salesRevenue}</h1>
            <span className="panelLabel">Sales Revenue</span>
          </div>
        </div>
        <div>
          <div className="alignMiddle inlineBlock childLogo">
            <img src={tempLogo} width="100" height="100"></img>
          </div>
          <div className="alignMiddle inlineBlock childLogo2">
            <h1 className="noMargin">{profit}</h1>
            <span>Profit</span>
          </div>
        </div>
      </div>
      <div className="alignMiddle childPanel2">
        <div>
          <h1 className="noMargin">{soldUnits}</h1>
          <span>Sold Units</span>
        </div>
        <div>
          <img src={tempLogo} width="100" height="100"></img>
        </div>
      </div>
      <div className="alignMiddle childPanel3 ">
        <div className="alignMiddle">
          <h1 className="noMargin">{salesTarget}</h1>
          <span>Sales Target</span>
        </div>
        <div className="alignMiddle">
          <h1 className="circle noMargin">{salesTargetPercent}</h1>
        </div>
      </div>
    </div>
  );
};

export default HeaderPanel;
