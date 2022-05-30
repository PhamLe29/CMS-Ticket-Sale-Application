import React, { useEffect } from "react";
import "./index.css";
import TrangChu1 from "./TrangChu1";
import TrangChu2 from "./TrangChu2";

function TrangChu(){
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });

      }, []);

   return(
        <div className="Home">
            <div className="Home-tk">
                <h2>Thống Kê</h2>
                <div className="Home-tk-1">
                    <h4>Doanh Thu</h4>
                    <input type="date" className="form-control calender-black" />
                </div>
                <div className="Home-tk-2">
                
                </div>
                <div style={{width:'400px' ,height:'30px',paddingTop:'300px' ,position:"absolute"}}>Tổng doanh thu theo tuần</div>
                <div style={{paddingTop:'320px' ,position:"absolute"}}><b style={{fontSize:'35px'}}>500.000.000 </b> đồng </div>
                <div className="Home-tk-3">
                <div style={{display:'flex'}}>
                        <div style={{marginLeft:310, marginTop:'350px', position:"absolute"}}>
                            <h3><b>Gói gia đình</b></h3>
                        </div>
                        <div style={{marginLeft:720,  marginTop:'350px', position:"absolute"}}>
                            <h3><b>Gói sự kiện</b></h3>
                        </div>
                    </div>
                    <div id='TrangChu1'>
                        <div id='TrangChu11' style={{}}> 
                        <TrangChu1 />
                        </div>
                        <div id='TrangChu2' > 
                        <TrangChu2 />
                        </div>
                    </div>
                    
                    <div id='boder2'> 13568</div>
                    <div id='boder1'> 56024</div>
                    <div id='boder3'> 30256</div>
                    <div id='boder4'> 28302</div>
                </div>
            </div>
        </div>
   )
}

export default TrangChu;
