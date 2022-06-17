import { useForm} from "react-hook-form";
import { useSelector , useDispatch } from "react-redux";
import { useState , useEffect ,useCallback } from "react";

import clsx from "clsx"
import { scheduleRequest , } from '../../redux/Slices/scheduleSlice'
import styles from './index.module.scss'
import { useNavigate } from "react-router-dom";

 
function Schedule () {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const [display , setDisplay] = useState(false)
  const values = (state) => state.schedule.status
  const a = useSelector(values)
  const navigate = useNavigate()
  
  const OnSubmit =(data) => {
    var value = localStorage.getItem('token')
    dispatch(scheduleRequest({data , value}))
    navigate('/result')
 }

  // const change = () => {
  //   console.log(a)
  //   if(a==='successfully') {

  //     toast('Đăng kí lịch hẹn thành công!')
  //   }
  // }

 var value = localStorage.getItem('token')
//  var display= false;
// if(value!== null) {
//  display =true
// }




  useEffect(() => {
    if(value !== null) {

      setDisplay(true)
    }
      else {
        setDisplay(false)

      }
    
  }, [])

    return (
       display &&
       <>
       <form className={clsx(styles.total)} onSubmit={handleSubmit(OnSubmit)}>
        <p>Đặt lịch khám , chữa bệnh</p>
        <div className={clsx(styles.container)}>
        <div className={clsx(styles.container1)}>
          <div className={clsx(styles.item1)}>
            <label>Họ và tên</label>
            <input type='text' name='name'{...register("name" , { required: true, maxLength: 20 })}/>
            {errors.name?.type === 'required' && "Name is required"}
          </div>
          <div className={clsx(styles.item2)}>
             <label>Số điện thoại</label>
            <input type='text' name='phone' {...register("phone" ,  { required: true, minLength: 7, maxLength: 11 })}/>
            {errors.phone?.type === 'required' && "phonenumber is unvalid"}
            {errors.phone?.type === 'minLength' && "phonenumber is too short"}
            {errors.phone?.type === 'maxLength' && "phonenumber is too long"}


          </div>
        </div>
        <div className={clsx(styles.container2)}>
          <div className={clsx(styles.item1)}>
            <label>Ngày sinh *</label>
            <input type='date' name='dateofbirth'  {...register("dateofbirth" ,  { required: true})}/>
            {errors.dateofbirth?.type === 'required' && "dateofbirth is required"}

          </div>
          <div className={clsx(styles.item2)}>
             <label>Ngày đặt</label>
            <input type='date' name='dateofappointment' {...register("dateofappointment",  { required: true})}/>
            {errors.dateofappointment?.type === 'required' && "dateofappointment is required"}

          </div>
        </div>
        <div className={clsx(styles.container3)}>
          <div className={clsx(styles.item1 , styles.need)}>
            <label>Nhu cầu khám bệnh</label>
          
            <select style={{height:'40px'}} name='faculities' {...register("faculities",  { required: true})} >
              <option value='Tiêu Hóa'>Tiêu Hóa</option>
              <option value='Hô Hấp'>Hô Hấp</option>
              <option value='Thần Kinh'>Thần Kinh</option>
              <option value='Xương Khớp'>Xương Khớp</option>
              <option value='Tim Mạch'>Tim Mạch</option>

            </select>
            {errors.faculities?.type === 'required' && "faculities is required"}

            <button type='submit' style={{height:'40px' , backgroundColor:'#286ba6', color:'#fff' ,  border:'none' , marginTop:'42px', cursor:'pointer'}}>Đặt lịch</button>
          </div>
      
        </div>
      
      
      </div>
 
    
         
      </form>
  <div>

 </div>
       </>
        
    )
}
export default Schedule


// import { useSelector } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
//   const value = (state) => state.schedule.status
//   const a = useSelector(value)
//   console.log(a)
// if(a==='successfully') {
// console.log('successfully 123')
// }
// const notify = () => toast("Wow so easy!");
// <div>
// <button onClick={notify}>Notify!</button>
// <ToastContainer />
// </div>