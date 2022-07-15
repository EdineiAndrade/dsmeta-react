import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';

import './styles.css'

type Props = {
    saleId: number;
}

function sendNotification(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then( response =>{
        toast.info("SMS enviado com sucesso")
    })
}

function NotificationButton({saleId}:Props) {
    return(
        <div className="dsmeta-red-btn-container"
        onClick={() => sendNotification(saleId)}
        >
        <div className="dsmeta-red-btn">
            <img src={icon} alt="notification"/>
        </div>
    </div>
    )
  }
  
  export default NotificationButton