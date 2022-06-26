import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {scheduleRequest} from '../../redux/Slices/scheduleSlice.js'
import clsx from "clsx";
import styles from './index.module.scss'
function ScheduleForMobile({hide}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        var value = localStorage.getItem('token')
        dispatch(scheduleRequest({data , value}))
        navigate('/result')
    }

    return(hide &&
                <form onSubmit={handleSubmit(onSubmit)} >
        <div className={clsx(styles.container)}>
            <h1>Tạo Lịch Hẹn</h1>
            <div className={clsx(styles.Form)}>
                <div className={clsx(styles.Form1)}>
                    <label>Họ và Tên</label>
                    <input type="text"  name='name'{...register("name" , { required: true, maxLength: 20 , number:true })}/>
                    {errors.name?.type === 'required' && "name is required"}
                    {errors.name?.type === 'maxLength' && "name is too long"}


                </div>
                <div  className={clsx(styles.Form2)}> 
                    <label>Số điện thoại</label>
                    <input type="text"  name='phone'{...register("phone" , { required: true, maxLength: 20 })}/>
                    {errors.phone?.type === 'required' && "phone is required"}
                    {errors.phone?.type === 'maxLength' && "phone is too long"}
                </div>
                <div  className={clsx(styles.Form2)}> 
                    <label>Ngày sinh</label>
                    <input type="date"  name='dateofbirth'{...register("dateofbirth" , { required: true, maxLength: 20 })}/>
                    {errors.dateofbirth?.type === 'required' && "dateofbirth is required"}
                    {errors.dateofbirth?.type === 'maxLength' && "dateofbirth is too long"}
                </div>
                <div  className={clsx(styles.Form2)}> 
                    <label>Ngày đặt</label>
                    <input type="date"  name='dateofappointment'{...register("dateofappointment" , { required: true, maxLength: 20 })}/>
                    {errors.dateofappointment?.type === 'required' && "dateofappointment is required"}
                    {errors.dateofappointment?.type === 'maxLength' && "dateofappointment is too long"}
                </div>
                <div  className={clsx(styles.Form2)}> 
                    <label>Nhu cầu khám bệnh</label>
                    <select style={{height:'40px'}} name='faculities' {...register("faculities",  { required: true})} >
              <option value='Tiêu Hóa'>Tiêu Hóa</option>
              <option value='Hô Hấp'>Hô Hấp</option>
              <option value='Thần Kinh'>Thần Kinh</option>
              <option value='Xương Khớp'>Xương Khớp</option>
              <option value='Tim Mạch'>Tim Mạch</option>

            </select>
                </div>
                <button type='submit' className={clsx(styles.btn)}>Tạo lịch hẹn</button>
            </div>
        </div>
      </form>
    )
}
export default ScheduleForMobile