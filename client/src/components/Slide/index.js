 import { useState , useEffect } from 'react'
 import clsx from 'clsx'
 import styles from './index.module.scss'
 function Slide() {
   
    const [numberNext , setnumberNext] = useState(0)

    //     const next = () => {
    //     setnumberNext(numberNext + 1)
    //     var x = 100;
    //     x = x*numberNext
    //     if(numberNext < 3) {
    //     data.current.style.marginLeft = `-${x}%`   
    //     console.log(data.current)
              
    //    }              
    //   }
    //   const previous = () => {
    //     setnumberNext(numberNext - 1)
    //     x=x*numberNext
    //     // data.current.style.marginLeft = `${x}%`    
    //     // console.log(data.current)
    //   }   
    const data = ['https://vinmec-prod.s3.amazonaws.com/images/vicaread/20210602_120205_960094_ai-0.jpeg',
                  'https://vinmec-prod.s3.amazonaws.com/images/vicaread/20210602_115921_943199_ICon.jpeg',
                  'https://vinmec-prod.s3.amazonaws.com/images/vicaread/20210602_115652_716747_Bweb_Tim.ori.jpg',
                 ]
         
   useEffect(() => {
       setTimeout(() =>{
        if(numberNext < data.length - 1) {

            setnumberNext(prev => prev + 1)
        }
        else {
            setnumberNext(prev => prev = 0)
        }

       }, 2000)
   }, [numberNext , data.length])
    return (
        <div  className={clsx(styles.root)}>
            <div  className={clsx(styles.container)} >
                <img alt='logo' className={styles.img} src={data[numberNext]}/>
                {/* <img alt='logo' style={{width: '1536px'}} className={styles.img} src='https://vinmec-prod.s3.amazonaws.com/images/vicaread/20210602_115921_943199_ICon.jpeg'/>
                <img alt='logo' className={styles.img} src='https://vinmec-prod.s3.amazonaws.com/images/vicaread/20210602_115652_716747_Bweb_Tim.ori.jpg'/> */}
            </div>
            {/* <div className={clsx(styles.arrowLeft)}   >
            <i className="fa-solid fa-circle-arrow-left "></i>
            

            </div> */}
            {/* <div className={clsx(styles.arrowRight)} >
            <i className="fa-solid fa-circle-arrow-right "></i>
            </div> */}
        </div>
    )
}
export default Slide