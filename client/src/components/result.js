import {useSelector} from 'react-redux'
function Result () {
    const status = (state) => state.schedule.status
    const number = (state) => state.schedule.number

  const value_1  = useSelector(status)
  const value_2 = useSelector(number)

  if(value_1 ==='successfully') {
     return(
        <>
           <p>Chúc mừng bạn đã đăng kí thành công!</p>
           <p>Số thứ tự</p>
           <p style={{color: 'green' , fontWeight: 'bold'}}>{value_2}</p>
        </>
    )  
  }
  else {
    return(
        <>
           <p>Vui lòng thử lại sau.</p>
        </>
    )  
  }
   
}
export default Result