import React from 'react'
import classes from './main.module.css'



export default function Main() {
    return (
        <>
        <div className={classes.main}>
         <div>
             <div  className={classes.icon}>
             <i class="fas fa-user"></i>
             </div>
             <div className={classes.iconbox}> 
                 <h3>EDWARRD. MLF233205 </h3>
                 <h4>Name/ID</h4>
             </div>
         </div>
         <div>
             <div className={classes.icon}>
             <i class="fa fa-indent"></i>
             </div>
             <div className={classes.iconbox}>
                 <h3>EDWARRD. MLF233205 </h3>
                 <h4>Name/ID</h4>
             </div>
         </div>
         <div>
             <div  className={classes.icon}>
             <i class="fas fa-user"></i>
             </div>
             <div className={classes.iconbox}>
                 <h3>EDWARRD</h3>
                 <h4>Name/ID</h4>
             </div>
         </div>
         <div>
             <div  className={classes.icon}>
             <i class="fa fa-calendar"></i>
             </div>
             <div className={classes.iconbox}>
                 <h3>EDWARRD. MLF233205 </h3>
                 <h4>Name/ID</h4>
             </div>
         </div>


         
        </div>

        <div className={classes.main2}>
            <div>
                <div className={classes.main22}>
                    <img src='http://lotusfamily.in/dashboard-style/img/event1.jpg'/>
                </div>
                <div className={classes.conarea}>
                </div>
            </div>
            <div>
                <div className={classes.main22}>
                    <img src='http://lotusfamily.in/dashboard-style/img/event2.jpg'/>
                </div>
                <div className={classes.conarea}></div>
            </div>
            <div>
                <div className={classes.main22}>
                    <img src='http://lotusfamily.in/dashboard-style/img/event3.jpg'/>
                </div>
                <div className={classes.conarea}></div>
            </div>
        </div>
        </>
    )
}
