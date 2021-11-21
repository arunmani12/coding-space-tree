import React,{useState} from 'react'
import classes from './Dasboard.module.css'


export default function Dasbord() {

    const [profileIsSlected, setProfileIsSlected] = useState(false)
    const [memberIsSelected, setMemberIsSelected] = useState(false)
    const [pinIsSelected, setPinIsSelected] = useState(false)
    const [tree, setTree] = useState(false)
    const [income, setIncome] = useState(false)
    const [nav, setNav] = useState(true)
    const [userConf, setUserConf] = useState(false)

    let profileClasses = profileIsSlected ? `${classes.inside}` : `${classes.inside} ${classes.none}`
    let memberClasses = memberIsSelected ? `${classes.inside}` : `${classes.inside} ${classes.none}` 
    let pinClasses = pinIsSelected ? `${classes.inside}` : `${classes.inside} ${classes.none}` 
    let treeClasses = tree  ? `${classes.inside}` : `${classes.inside} ${classes.none}` 
    let incomeClasses = income ? `${classes.inside}` : `${classes.inside} ${classes.none}` 
    
    let navClasses = nav ? `${classes.sidenav}` : `${classes.sidenav} ${classes.none}`
    


    return (
        <>
        <div className={classes.nav}>
            <div className={classes.logoa}><i onClick={()=>setNav(prv=>!prv)} class="fa fa-bars"></i>
            <img src='http://lotusfamily.in/logo.png'/>
            <div className={classes.env}>
                <div>
                <i class="far fa-envelope"></i>
                </div>
                <div>
                <i class="far fa-bell"></i>
                </div>
            </div>
            </div>
          
            <div>
            <i class="fas fa-user-cog"onClick={()=>setUserConf(prv=>!prv)} ></i>
            {userConf && <div className={classes.userleft}>
                <div>
                <div>
                <i className="fas fa-user"></i>
                <p>Welcome Letter</p>
                </div>
                <div>
                <i className="fas fa-key"></i>
                <p>Change Password</p>
                </div>
                <div>
                <i className="fas fa-users"></i>
                <p>Edit Profile</p>
                </div>
                </div>
                <div className={classes.leftlog}>
                <i class="fas fa-sign-out-alt"> </i>
                
                <p>Logout</p>
                </div>
            </div>}
            </div>
        </div>
        <div className={navClasses}>
            <ul className={classes.sidenaul}>
                 <li>
                      <a  href="usershome.asp">
                          <i className="fa fa-home"></i>
                          <span>Dashboard</span>
                      </a>
                </li>
                <li>
                      <a  href="usershome.asp">
                      <i className="fa fa-user"></i>
                          <span>Register</span>
                      </a>
                </li>
                <li onClick={()=>setProfileIsSlected(prv=>!prv)}>
                      <a href= "#">
                          <i className="fa fa-book"></i>
                          <span>Profile</span>
                          <span className={classes.plus}>{profileIsSlected ? '-' : '+'}</span>
                          <ul className={profileClasses}>
                          <li><a href="certificate.asp">Welcome Letter</a></li>
                          <li><a href="editprofilemember.asp">Edit Profile</a></li>
                          <li><a href="memberreplace.asp">Change Password</a></li>
                      </ul>
                      </a>
                </li>
                <li onClick={()=>setMemberIsSelected(prv=>!prv)}>
                      <a href= "#">
                          <i className="fa fa-users"></i>
                          <span>Member Topup</span>
                          <span className={classes.plus}>{memberIsSelected ? '-' : '+'}</span>
                          <ul className={memberClasses}>
                          <li><a href="certificate.asp">Member ID Topup</a></li>
                          <li><a href="editprofilemember.asp">Top List</a></li>
                          </ul>
                      </a>
                </li>
                <li onClick={()=>setPinIsSelected(prv=>!prv)}>
                      <a href= "#">
                          <i className="fa fa-cogs"></i>
                          <span>Pins</span>
                          <span className={classes.plus}>{pinIsSelected ? '-' : '+'}</span>
                          <ul className={pinClasses}>
                          <li><a href="certificate.asp">Entry Pin</a></li>
                          <li><a href="editprofilemember.asp">Pin History</a></li>
                          <li><a href="certificate.asp">Pin Transfer</a></li>
                          <li><a href="editprofilemember.asp">Pin  Report</a></li>
                          </ul>
                      </a>
                </li>
                <li  onClick={()=>setTree(prv=>!prv)}>
                      <a  href="#">
                      <i className="fab fa-pagelines"></i>
                          <span>Genealogy Tree</span>
                          <span className={classes.plus}>{tree ? '-' : '+'}</span>
                          <ul className={treeClasses}>
                          <li><a href="certificate.asp">Tree view</a></li>
                          <li><a href="editprofilemember.asp">Left Down</a></li>
                          <li><a href="editprofilemember.asp">Right  Down</a></li>
                          </ul>
                      </a>
                </li>
                <li onClick={()=>setIncome(prv=>!prv)}>
                      <a  href="#">
                          <i className="fa fa-asterisk"></i>
                          <span>Income Report</span>
                          <span className={classes.plus}>{income ? '-' : '+'}</span>
                          <ul className={incomeClasses}>
                          <li><a href="certificate.asp">Weekly Income</a></li>
                          <li><a href="editprofilemember.asp">Binary Income</a></li>
                          <li><a href="editprofilemember.asp">Repurchase Income</a></li>
                          <li><a href="editprofilemember.asp">Topup Sales Income</a></li>

                          </ul>
                      </a>
                </li>
              
                <li>
                      <a  href="usershome.asp">
                          <i className="fa fa-user"></i>
                          <span>Log Out</span>
                      </a>
                </li>
            </ul>
        </div>


      


        </>
    )
}
