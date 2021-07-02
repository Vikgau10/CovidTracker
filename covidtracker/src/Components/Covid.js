import React from 'react'
import { useState, useEffect } from "react"

export const Covid = () => {
    const [data, setdata] = useState([])
    const [statewisedata,setstatewisedata]=useState([])

    const getdata = async () => {

        try {
            const res = await fetch("https://api.covid19india.org/data.json");
            const resdata = await res.json();
            setdata(resdata.statewise[0]);
            console.log(resdata.statewise);


        }
        catch {

            console.log("Error something went wrong");
        }
    }

    const getstatewisedata=async()=>{

        try {
            const res = await fetch("https://api.covid19india.org/data.json");
            const resdata = await res.json();
            // const newresdata=resdata.statewise.filter((elem,key)=>elem.active)
            setstatewisedata(resdata.statewise);
     


        }
        catch {

            console.log("Error something went wrong");
        }


    }

    useEffect(() => {
        getdata();
        getstatewisedata();
    }, [])

    return (
        <div className="container">
      
            <div className="row">
                <div className="col1 col-color1 ">
                    <p className="card-title"><span>OUR</span>COUNTRY</p>
                    <p className="card-info">INDIA</p>
                </div>

                <div className="col1 col-color2">
                    <p className="card-title"><span>TOTAL</span>RECOVERED</p>
                    <p className="card-info">{data.recovered}</p>
                </div>

                <div className="col1 col-color3">
                    <p className="card-title"><span>TOTAL</span>CONFIRMED</p>
                    <p className="card-info">{data.confirmed}</p>
                </div>

            </div>

            <div className="row">
                <div className="col1 col-color4">
                    <p className="card-title"><span>TOTAL</span>DEATHS</p>
                    <p className="card-info">{data.deaths}</p>
                </div>

                <div className="col1 col-color5">
                    <p className="card-title"><span>TOTAL</span>ACTIVE</p>
                    <p className="card-info">{data.active}</p>
                </div>
                <div className="col1 col-color6">
                    <p className="card-title"><span>TOTAL</span>LASTUPDATEDTIME</p>
                    <p className="card-info">{data.lastupdatedtime}</p>
                </div>

            </div>

            <table className="table-main">
             <tr className="table-row">
             <th>state</th>
             <th>recovered</th>
             <th>deaths</th>
             <th>active</th>
             <th>updatedtime</th>
             </tr>

            {

                statewisedata.map((elem,index)=>{
                         return(
                  
                            <tr className="table-row2" key={index}>
                           
                          
                            <td>{elem.state}</td>
                            <td>{elem.recovered}</td>
                            <td>{elem.deaths}</td>
                            <td>{elem.active}</td>
                            <td>{elem.lastupdatedtime}</td>
                            
                          
                            </tr>
                           
                          

                         )


                })
            }

            </table>
  
        </div>
    )
}
