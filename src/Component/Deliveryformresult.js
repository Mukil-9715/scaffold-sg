import React, { useContext } from 'react'
import AllDataScaffoldContext from './ScaffoldContext/DataContext';
import { Button } from 'antd';

const Deliveryformresult = ({DeliveryFormStatusSet, loginfos, setDeliverydevision, setordersummarys, DeliveryFormResultStatusSet}) => {
  const {  deliveryformdetails,setStepperControler } = useContext(AllDataScaffoldContext);
const handeEdit=()=>{
    DeliveryFormStatusSet(true) 
    DeliveryFormResultStatusSet(false)
}
const handeContinue=()=>{
    setordersummarys(true)
    setDeliverydevision(false)
    setStepperControler(2)
}
const handeBack=()=>{
    loginfos(true)
    setDeliverydevision(false)
    setStepperControler(0)
  }
  return (
      <div className='flex1' style={{width:"100%"}} >
        <div className='text_h2'>Address :</div>
      <div className='text_p' >
        <div>{deliveryformdetails.Name}, </div>
        <div>{deliveryformdetails["Flat Number"]}, {deliveryformdetails["Street"]},  </div>
        <div>{deliveryformdetails["City/District/Town"]}, </div>
        <div>{deliveryformdetails.State}, </div>
        <div>{deliveryformdetails.Landmark} - {deliveryformdetails["Pincode Number"]}, </div>
        <div>{deliveryformdetails["Phone Number"]}, </div>
        <div>{deliveryformdetails["Alternative Phone"]}. </div>

    </div>
    <Button onClick={()=>{handeEdit()}} >Edit</Button>
    <div className='flex_c'>
    <Button  className='marb' onClick={()=>{handeContinue()}}>Continue</Button>
    <Button onClick={()=>{handeBack()}}>Back</Button>
    </div>
    </div>
  )
}

export default Deliveryformresult