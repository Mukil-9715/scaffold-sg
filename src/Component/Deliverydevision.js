import React, { useState } from 'react'
import Deliveryform from './Deliveryform'
import Deliveryformresult from './Deliveryformresult'

const Deliverydevision = ({loginfo, setDeliverydevisions,setordersummary}) => {
    const [DeliveryFormStatus, setDeliveryFormStatus] = useState(true)
    const [deliveryFormResultStatus, setDeliveryFormResultStatus] = useState(false)
  return (
    <div className="loginconfirm">
      <div className="brh-loginconfirm ">

        {DeliveryFormStatus&&(<Deliveryform  loginfos={loginfo} setDeliverydevision={setDeliverydevisions} DeliveryFormStatusSet={setDeliveryFormStatus} DeliveryFormResultStatusSet={setDeliveryFormResultStatus} />)}
        {deliveryFormResultStatus&&(<Deliveryformresult loginfos={loginfo} setDeliverydevision={setDeliverydevisions} setordersummarys={setordersummary} DeliveryFormStatusSet={setDeliveryFormStatus} DeliveryFormResultStatusSet={setDeliveryFormResultStatus} />)}
      </div>
      </div>
  )
}

export default Deliverydevision