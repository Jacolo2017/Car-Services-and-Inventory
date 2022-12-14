import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


 (async () => {
    const serviceAppointmentListResponse = await fetch ('http://localhost:8080/api/appointments/');
    const manufacturerResponse = await fetch ('http://localhost:8100/api/manufacturers/');
    const vehicleResponse = await fetch ('http://localhost:8100/api/models/');
    const automobileResponse = await fetch ('http://localhost:8100/api/automobiles/');
    const appointmentHistoryResponse = await fetch ('http://localhost:8080/api/history/')
    const salesListResponse = await fetch ('http://localhost:8090/api/sales/')
    if (serviceAppointmentListResponse.ok && manufacturerResponse.ok && vehicleResponse.ok && automobileResponse.ok && appointmentHistoryResponse && salesListResponse) {
      const serviceAppointmentListData = await serviceAppointmentListResponse.json();
      const manufacturerData= await manufacturerResponse.json();
      const vehicleData = await vehicleResponse.json();
      const automobileData = await automobileResponse.json();
      const historyData = await appointmentHistoryResponse.json();
      const salesListData = await salesListResponse.json()
      root.render(
        <React.StrictMode>
          <App
          appointments={serviceAppointmentListData}
          manufacturers={manufacturerData}
          vehicles={vehicleData}
          automobiles={automobileData}
          history={historyData}
          sales={salesListData}
          />
        </React.StrictMode>
      );
    } 
    else {
      console.error('Index.js Is not receiving responses')
    }
  }
)
();