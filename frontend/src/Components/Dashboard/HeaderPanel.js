import profit from "./Assets/profit.png";
import salesRevenue from "./Assets/salesRevenue.png";
import soldUnits from "./Assets/soldUnits.png";
import React, { useState, useEffect } from 'react';
import { logout } from "../../Actions/action.auth";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Axios from 'axios';

let tax = (1.1).toFixed(2);
let salesTarget = "₱ " + 1300;
let salesTargetPercent = 100 + "%";


const HeaderPanel = () => {
  let [dataMap, setDataMap] = useState()
  let [revenue, getRevenue] = useState()

  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  };

  const getData = Axios.get(
    `${process.env.REACT_APP_API_URL}/Integration/INSMonthly`,
    {},
    config
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        let dataFromAPI = await getData
        console.log(dataFromAPI.data)

        setDataMap(Object.values(dataFromAPI.data.count).map((currentMonth) => {
          return currentMonth
        }).reduce((currentValue, selectedValue) => {
          return currentValue += selectedValue
        }))

        getRevenue(Object.values(dataFromAPI.data.data).map((currentMonth) => {
          let totalAmount = currentMonth.map((currentPrice) => {
            return currentPrice.price
          }).reduce((currentValue, selectedValue) => {
            return currentValue += selectedValue
          },0)
          console.log(totalAmount)
          return totalAmount
        }).reduce((currentValue, selectedValue) => {
          return currentValue += selectedValue
        }))

      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);


  const history = useHistory();
  const logoutSubmission = () => {
    logout()
    history.push('/');
    toast.success('Logout Success', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className="headerPanel">
      <div className="headerPanel__statistics">
        <div className="alignMiddle childPanel1">
          <div>
            <div className="alignMiddle inlineBlock childLogo">
              <img src={salesRevenue} width="70" height="70"></img>
            </div>
            <div className="alignMiddle inlineBlock childLogo2">
              <h1 className="noMargin">₱ {parseFloat(revenue).toFixed(2)}</h1>
              <span className="panelLabel">Sales Revenue</span>
            </div>
          </div>
          <div>
            <div className="alignMiddle inlineBlock childLogo">
              <img src={profit} width="70" height="70"></img>
            </div>
            <div className="alignMiddle inlineBlock childLogo2">
              <h1 className="noMargin">₱ {(revenue * tax).toFixed(2)}</h1>
              <span>Profit</span>
            </div>
          </div>
        </div>
        <div className="alignMiddle childPanel2">
          <div>
            <h1 className="noMargin">{dataMap}</h1>
            <span>Inventory</span>
          </div>
          <div>
            <img src={soldUnits} width="90" height="90"></img>
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
      <div className="headerPanel__profile">
        {/* Vernon's Part: Profile Tab - Top Right */}
        <div className="topRightDashboard__container">
          <div className="topRightDashboard__card">
            <div className="topRightDashboard__cardTop">
              <h1 className="topRightDashboard__name">Welcome Executives!</h1>
            </div>
            <div className="topRightDashboard__cardBottom">
              <h3 className="topRightDashboard__time">
                {dateState.toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })}</h3>
              <h3 className="topRightDashboard__date">
                {dateState.toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}</h3>
            </div>
          </div>
        </div>
        <div className="topRightDashboard__button">
          <button className="topRightDashboard__logoutButton" onClick={() => { logoutSubmission() }} to="/">LOGOUT</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderPanel;
