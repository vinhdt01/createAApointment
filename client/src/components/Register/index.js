import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch , useSelector  } from "react-redux";
import {registerRequest , registerSuccess , registerStatus} from '../../redux/Slices/registerSlice'
import {useNavigate} from 'react-router-dom'
import clsx from 'clsx'
import styles from './index.module.scss'
function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
     dispatch(registerRequest(data))
    }

    const value = (state) => state.register.status
         const a = useSelector(value)
        
    React.useEffect(() => {
         if(a ==='ok') {
            navigate('/login')
         }
       return function cleanup() {
             dispatch(registerStatus({
     
        status:'',
        
      }))
      }
        }
     , [a , navigate , dispatch ])
    var ErrMessage =(state) => state.register.error
    var result = useSelector(ErrMessage)
  return (
      <form  onSubmit={handleSubmit(onSubmit)} className={clsx(styles.wrapper)}>
        <div className={clsx(styles.container)}>
            <h1>Register</h1>
            <div className={clsx(styles.Form)}>
                <div className={clsx(styles.Form1)}>
                    <label>Họ Và Tên</label>
                    <input type="text"   name='name'{...register("name" , { required: true, maxLength: 20 })}/>
                    {errors.name?.type === 'required' && "Name is required"}
                </div>
                <div  className={clsx(styles.Form2)}> 
                    <label>Số điện thoại</label>
                    <input type='text' name='phone' {...register("phone" ,  { required: true, minLength: 7, maxLength: 11 })}/>
            {errors.phone?.type === 'required' && "phonenumber is unvalid"}
            {errors.phone?.type === 'minLength' && "phonenumber is too short"}
            {errors.phone?.type === 'maxLength' && "phonenumber is too long"}
                </div>
                <div className={clsx(styles.Form1)}>
                    <label>Tên Đăng Nhập</label>
                    <input type="text"  name='username'{...register("username" , { required: true, maxLength: 20 })}/>
                    {errors.username?.type === 'required' && "username is required"}
                    {errors.username?.type === 'maxLength' && "username is too long"}
                </div>
                <div  className={clsx(styles.Form2)}> 
                    <label>Mật Khẩu</label>
                    <input type="password"  name='password'{...register("password" , { required: true, maxLength: 20 })}/>
                    {errors.password?.type === 'required' && "password is required"}
                    {errors.password?.type === 'maxLength' && "password is too long"}
                </div>
               
                <button type="submit">Đăng kí</button>
                <p>{result}</p>
            </div>
        </div>
      
      </form>
  )
}
export default Register
