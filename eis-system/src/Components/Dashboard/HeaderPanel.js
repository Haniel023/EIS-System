
import profit from "./Assets/profit.png";
import salesRevenue from "./Assets/salesRevenue.png";
import soldUnits from "./Assets/soldUnits.png";

let sales_Revenue = "₱ " + 1432.04;
let profits = "₱ " + 392.94;
let sold_Units = 4206;
let salesTarget = "₱ " + 1300;
let salesTargetPercent = 100 + "%";

const HeaderPanel = () => {
  return (
    <div className="headerPanel">
      <div className="alignMiddle childPanel1">
        <div>
          <div className="alignMiddle inlineBlock childLogo">
            <img src={salesRevenue} width="100" height="100"></img>
          </div>
          <div className="alignMiddle inlineBlock childLogo2">
            <h1 className="noMargin">{sales_Revenue}</h1>
            <span className="panelLabel">Sales Revenue</span>
          </div>
        </div>
        <div>
          <div className="alignMiddle inlineBlock childLogo">
            <img src={profit} width="100" height="100"></img>
          </div>
          <div className="alignMiddle inlineBlock childLogo2">
            <h1 className="noMargin">{profits}</h1>
            <span>Profit</span>
          </div>
        </div>
      </div>
      <div className="alignMiddle childPanel2">
        <div>
          <h1 className="noMargin">{sold_Units}</h1>
          <span>Sold Units</span>
        </div>
        <div>
          <img src={soldUnits} width="100" height="100"></img>
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
