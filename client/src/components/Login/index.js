import React from 'react';
import { useForm } from "react-hook-form";
import clsx from 'clsx'
import styles from './index.module.scss'
import {loginStatus} from '../../redux/Slices/loginSlice'
import {  Link , useNavigate} from "react-router-dom";
import {loginRequest} from '../../redux/Slices/loginSlice'

import {useDispatch , useSelector} from 'react-redux';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const value = (state) => state.login.status
    const a = useSelector(value)

       const [exist , setExist] = React.useState(false)
    React.useEffect(() => {
      if(a ==='ok') {
        navigate('/')
      }
    
     
    
      return function cleanup() {
        dispatch(loginStatus({
 
      status:'',
      
    }))
      };
     }
  , [a , dispatch , navigate])
  React.useEffect(() => {
    if(a===404) {
      setExist(!exist)
      console.log('exits')
    }
  })
    const onSubmit =(data) => {
      dispatch(loginRequest(data))
    }
    return (
      <form onSubmit={handleSubmit(onSubmit)} className={clsx(styles.wrapper)}>
        <div className={clsx(styles.container)}>
            <h1>Login</h1>
            <div className={clsx(styles.Form)}>
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
                <button type='submit' className={clsx(styles.btn)}>Đăng Nhập</button>
              {exist && <p style={{color:'red'}}>Tài Khoản không tồn tại</p>}
                <p>Bạn chưa có tài khoản. Hãy click <Link to='/register'>vào đây</Link></p>
            </div>
        </div>
      </form>
  )
}
export default Login