import {useState , useEffect } from 'react';
import { Link , useNavigate } from "react-router-dom";
import styles from './Index.module.scss'
import clsx from 'clsx'
import NavMobile from '../NavMobile/index'
import MenuForMobile from '../MenuForMobile/index.js'
function Menu() {
 const [changeLogin , setChangeLogin] = useState(true)
 const [changeLogout , setChangeLogout] = useState(false)
 const [hide , setHide] = useState(false)

 var data = localStorage.getItem('token');

 var navigate = useNavigate()
    const handleSchedule = () => {
   
     if(!data) {
        navigate('/login')
     }
     else {
         
     }
    }
    const removeHandle = () => {
        localStorage.removeItem('token')
        setChangeLogin(!changeLogin)
        setChangeLogout(!changeLogout)
        window.location.reload();
    }
    const appearSideBar = () => {
        console.log('hode')
        setHide(!hide)
    }
    useEffect(() => {
      
      if(data) {
        setChangeLogin(!changeLogin)
        setChangeLogout(!changeLogout)

      }
      // else {
      //   setChangeLogin(changeLogin)
      //   setChangeLogout(changeLogout)

      // }
    }, [data])
    return (
        <div className={clsx(styles.first)}>
          <div className={clsx(styles.container)}>
          <div className={clsx(styles.container1)}>
               <div className={clsx(styles.item1)}>
                    <div>Tải ứng dụng MyVinmec</div>
                    <div>|</div>
                    <div>Hướng dẫn khách hàng</div>
                    <div>|</div>
                    <div>Hệ thống Vinmec</div>
                </div>  
                <div className={clsx(styles.item2)}>

                <select style={{marginRight:'10px'}}>
                    <option value>English</option>
                    <option value>Việt Nam</option>

                </select>
                <img className={clsx(styles.container2Logo)} src='https://vinmec.com/static/img/post-detail-new/en.ccf7b800d1fe.png' style={{width:"27px" ,height:"18px" }} alt='logo'/>
                </div>  
          </div>
          <div className={clsx(styles.container2)}>
               <img src='https://www.vinmec.com/static/img/logo.9e7e5ef03cbd.svg' alt='logo' style={{width:'80px', height:'50px'}}/>
               <div className={clsx(styles.container2Select)}> 
                     <select className={clsx(styles.select)}>
                         <option>Hà Nội</option>
                         <option>Đà Nẵng</option>
                         <option>Nha Trang</option>
                         <option>Hải Phòng</option>
                         <option>Hạ Long</option>
                         <option>Phú Quốc</option>
                         <option>Hồ Chí Minh</option>
                    </select>
                </div>
           
            <div className={clsx(styles.inputContainer)}>
                <div className="fa-solid fa-magnifying-glass searchIcon"></div>
                <input className={clsx(styles.input)} style={{ color:'black' , fontWeight:'1.2rem' }}  type="text" placeholder="Tìm kiếm bài viết , trợ giúp..."/>
            </div>
            <div className={clsx(styles.container2LastItem)}>
                <div className={clsx(styles.askDoctor)}>
                <img src='https://www.vinmec.com/static/build/cbe6a520989f0a627e43430e550f4895.svg' className={clsx(styles.askDoctorIcon)} alt='logo'/>
                <span style={{paddingTop: '4px', fontFamily:'Helvetica' , fontWeight:'bold',textDecoration: 'none', color:'black' , cursor: 'pointer'}} onClick={handleSchedule}> TẠO LỊCH HẸN </span>
                </div>
                <div style={{margin: '0 15px'}} className={clsx(styles.i)}>|</div>
                <div className={clsx(styles.register)}>
               
                <img src='https://www.vinmec.com/static/build/abfdfc8824997f7e9471d120546c71e8.svg' className={clsx(styles.registerIcon)} alt='logo'/>
                
                {changeLogin &&  <Link to='login' style={{paddingTop: '4px', fontFamily:'Helvetica' , fontWeight:'bold',textDecoration: 'none', color:'black'}} >ĐĂNG NHẬP</Link>}
               
                {changeLogout &&  <div  style={{paddingTop: '4px', fontFamily:'Helvetica' , fontWeight:'bold',textDecoration: 'none', color:'black' , cursor: 'pointer'}} onClick={removeHandle}>ĐĂNG XUẤT</div>}
                </div>
                <i  className={clsx(styles.bar, 'fa-solid fa-bars')} style={{paddingTop: '4px'}} onClick={appearSideBar}></i>

            </div>

          </div>


          <div className={clsx(styles.container3)}>
                <div className={clsx(styles.containerMenu)} style={{padding: '6px 6px'}}>Hệ thống Vinmec 
                <div className={clsx(styles.subMenu)}>
                   <div>
                   Vinmec Central Park (Tp.Hồ Chí Minh)
                    </div>
                    <div>
                    Vinmec Times City (Hà Nội)
                    </div>
                    <div>
                    Vinmec Đà Nẵng (Đà Nẵng)
                    </div>
                    <div>
                    Vinmec Nha Trang (Khánh Hòa)
                    </div> 
                    <div>
                    Vinmec Hải Phòng (Hải Phòng)
                    </div>
                    <div>
                    Vinmec Hạ Long (Quảng Ninh)
                    </div>
                    <div>
                    Vinmec Phú Quốc (Kiên Giang)
                    </div>
                    <div>
                    Bệnh viện & Phòng khám            
                    </div>
                    <div>
                    Cơ sở vật chất            
                    </div>
                </div>
                    


                </div>
                <div style={{padding: '6px 6px'}}>Chuyên khoa trọng điểm</div>
                <div style={{padding: '6px 6px'}} >Danh sách bác sĩ</div>
                <div style={{padding: '6px 6px'}}>Gói dịch vụ </div>
                <div style={{padding: '6px 6px'}}>Hướng dẫn khách hàng</div>
                <div style={{padding: '6px 6px'}}>Khác</div>
                <div style={{display: 'flex' , alignItems: 'center'}}>
                <div className={clsx(styles.logoSocial , styles.logoSocialFb )} style={{marginRight: '16px'}}>
                <span className="fa-brands fa-facebook facebookLogo"></span>
                </div>
                <div className={clsx(styles.logoSocial , styles.logoSocialYt)} >
                <span className="fa-brands fa-youtube facebookLogo"></span>
                </div>
                </div>
          </div>
          </div>
          <NavMobile changeLogin={changeLogin} changeLogout={changeLogout}  removeHandle={removeHandle} hide={hide} handleSchedule={handleSchedule}/>
          <div className={clsx(styles.overlay , {[styles.x]:hide} )} onClick={appearSideBar}></div>
          <MenuForMobile/>
          
        </div>
    )
}
export default Menu