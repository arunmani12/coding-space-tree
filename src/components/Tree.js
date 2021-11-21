import React,{useState,useEffect} from 'react'
import './Tree.css'
import Data from '../Data'

export default function Tree() {

    const [currentTree, setCurrentTree] = useState('LF233205')
    let [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setData( Data.find(d=>d.Id===currentTree))
        setLoading(false)
    })

   let fam
 if(!loading){   
console.log(data)
 fam = data.family
 }
 
 let clickHandler = (e) =>{
   setCurrentTree(e)
 }


    return (
        <>
             {!loading && <div className='card-div'>
                 <div className='wrapper'>
            <div className='icon-div'>
        <i class="fas fa-globe-americas"></i>
        </div>
        <div>
            <h3>Name: {data.name}</h3>
            <h3>ID: {data.Id}</h3>
            <h3>Left Sales: {data.LeftSales}</h3>
            <h3>Right Sales: {data.RightSales}</h3>
            <h3>Left Carry: {data.LeftCarry}</h3>
            <h3>Right Carry: {data.RightCarry}</h3>
            <h3>Right Bv: {data.RightBV}</h3>
            <h3>Left Bv: {data.LeftBV}</h3>
            <h3> Left TP SALES: {data.LeftTPSALES}</h3>
            <h3>Right TP SALES: {data.RightTPSALES}</h3>

        </div>
        </div>
        </div>}
        <hr/>
        <div className="body genealogy-body genealogy-scroll">
            {!loading  &&
        <div className="genealogy-tree">
            <ul>
                <li>
                    <a href="javascript:void(0);">
                        <div className="member-view-box">
                            <div className="member-image">
                                <img src="./user.png" alt="Member"/>
                                <div className="member-details">
                                    <h3>{`${data.name} ${data.Id}`}</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                    <ul className="active">
                        <li>
                            <a onClick={()=> clickHandler(`${fam.find(d=>d.pos===0).Id}`)} href="javascript:void(0);">
                                <div className="member-view-box">
                                    <div className="member-image">
                                        <img src="./user.png" alt="Member"/>
                                        <div className="member-details">
                                            <h3>{`${fam.find(d=>d.pos===0).name} ${fam.find(d=>d.pos===0).Id}`}</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <ul >
                             
                              
                                <li>
                                    <a onClick={()=> clickHandler(`${fam.find(d=>d.pos===2).Id}`)} href="javascript:void(0);">
                                        <div className="member-view-box">
                                            <div className="member-image">
                                                <img src="./user.png" alt="Member"/>
                                                <div className="member-details">
                                                    <h3>{`${fam.find(d=>d.pos===2).name} ${fam.find(d=>d.pos===2).Id}`}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <ul>
                                        <li>
                                            <a onClick={()=> clickHandler(`${fam.find(d=>d.pos===6).Id}`)} href="javascript:void(0);">
                                                <div className="member-view-box">
                                                    <div className="member-image">
                                                        <img src="./user.png" alt="Member"/>
                                                        <div className="member-details">
                                                            <h3>{`${fam.find(d=>d.pos===6).name} ${fam.find(d=>d.pos===6).Id}`}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={()=> clickHandler(`${fam.find(d=>d.pos===7).Id}`)} href="javascript:void(0);">
                                                <div className="member-view-box">
                                                    <div className="member-image">
                                                        <img src="./user.png" alt="Member"/>
                                                        <div className="member-details">
                                                            <h3>{`${fam.find(d=>d.pos===7).name} ${fam.find(d=>d.pos===7).Id}`}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                              
                               

                                <li>
                                    <a onClick={()=> clickHandler(`${fam.find(d=>d.pos===3).Id}`)} href="javascript:void(0);">
                                        <div className="member-view-box">
                                            <div className="member-image">
                                                <img src="./user.png" alt="Member"/>
                                                <div className="member-details">
                                                    <h3>{`${fam.find(d=>d.pos===3).name} ${fam.find(d=>d.pos===3).Id}`}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <ul>
                                        <li>
                                            <a onClick={()=> clickHandler(`${fam.find(d=>d.pos===8).Id}`)} href="javascript:void(0);">
                                                <div className="member-view-box">
                                                    <div className="member-image">
                                                        <img src="./user.png" alt="Member"/>
                                                        <div className="member-details">
                                                            <h3>{`${fam.find(d=>d.pos===8).name} ${fam.find(d=>d.pos===8).Id}`}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={()=> clickHandler(`${fam.find(d=>d.pos===9).Id}`)} href="javascript:void(0);">
                                                <div className="member-view-box">
                                                    <div className="member-image">
                                                        <img src="./user.png" alt="Member"/>
                                                        <div className="member-details">
                                                            <h3>{`${fam.find(d=>d.pos===9).name} ${fam.find(d=>d.pos===9).Id}`}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                          
                                        </li>
                                    
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a onClick={()=> clickHandler(`${fam.find(d=>d.pos===1).Id}`)} href="javascript:void(0);">
                                <div className="member-view-box">
                                    <div className="member-image">
                                        <img src="./user.png" alt="Member"/>
                                        <div className="member-details">
                                            <h3>{`${fam.find(d=>d.pos===1).name} ${fam.find(d=>d.pos===1).Id}`}</h3>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <ul className="active">
                                <li>
                                    <a onClick={()=> clickHandler(`${fam.find(d=>d.pos===4).Id}`)} href="javascript:void(0);">
                                        <div className="member-view-box">
                                            <div className="member-image">
                                                <img src="./user.png" alt="Member"/>
                                                <div className="member-details">
                                                    <h3>{`${fam.find(d=>d.pos===4).name} ${fam.find(d=>d.pos===4).Id}`}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <ul>
                                        <li>
                                            <a onClick={()=> clickHandler(`${fam.find(d=>d.pos===10).Id}`)} href="javascript:void(0);">
                                                <div className="member-view-box">
                                                    <div className="member-image">
                                                        <img src="./user.png" alt="Member"/>
                                                        <div className="member-details">
                                                            <h3>{`${fam.find(d=>d.pos===10).name} ${fam.find(d=>d.pos===10).Id}`}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={()=> clickHandler(`${fam.find(d=>d.pos===11).Id}`)} href="javascript:void(0);">
                                                <div className="member-view-box">
                                                    <div className="member-image">
                                                        <img src="./user.png" alt="Member"/>
                                                        <div className="member-details">
                                                            <h3>{`${fam.find(d=>d.pos===11).name} ${fam.find(d=>d.pos===11).Id}`}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a onClick={()=> clickHandler(`${fam.find(d=>d.pos===5).Id}`)} href="javascript:void(0);">
                                        <div className="member-view-box">
                                            <div className="member-image">
                                                <img src="./user.png" alt="Member"/>
                                                <div className="member-details">
                                                    <h3>{`${fam.find(d=>d.pos===5).name} ${fam.find(d=>d.pos===5).Id}`}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                  <ul>
                                        <li>
                                            <a onClick={()=> clickHandler(`${fam.find(d=>d.pos===12).Id}`)} href="javascript:void(0);">
                                                <div className="member-view-box">
                                                    <div className="member-image">
                                                        <img src="./user.png" alt="Member"/>
                                                        <div className="member-details">
                                                            <h3>{`${fam.find(d=>d.pos===12).name} ${fam.find(d=>d.pos===12).Id}`}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={()=> clickHandler(`${fam.find(d=>d.pos===13).Id}`)} href="javascript:void(0);">
                                                <div className="member-view-box">
                                                    <div className="member-image">
                                                        <img src="./user.png" alt="Member"/>
                                                        <div className="member-details">
                                                            <h3>{`${fam.find(d=>d.pos===13).name} ${fam.find(d=>d.pos===13).Id}`}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>}
    </div>
    </>
    )
}
