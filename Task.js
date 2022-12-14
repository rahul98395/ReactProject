const Task = ({datas}) => {
    return (
      <div className="card">
      <div className = "card-top">
        <div className="card-left">
            <svg className="svg-container" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 84 84" enable-background="new 0 0 84 84"><g fill-rule="evenodd" clip-rule="evenodd"><path fill="#06B0E4" d="M81.4 56.9c-4.4-4.101-9.65-6.15-15.75-6.15h-46.3c-6.399 0-11.933 2.184-16.6 6.55-1.833-4.734-2.75-9.833-2.75-15.3 0-11.533 4.083-21.417 12.25-29.65 8.233-8.233 18.15-12.35 29.75-12.35 11.566 0 21.45 4.117 29.65 12.35 8.234 8.233 12.35 18.117 12.35 29.65 0 5.3-.866 10.267-2.6 14.9zm-52.3-42.45c-3.533 3.533-5.3 7.767-5.3 12.7 0 5 1.767 9.267 5.3 12.8 3.5 3.5 7.75 5.25 12.75 5.25s9.267-1.75 12.801-5.25c3.5-3.534 5.25-7.8 5.25-12.8 0-4.933-1.75-9.167-5.25-12.7-3.535-3.5-7.801-5.25-12.801-5.25s-9.25 1.75-12.75 5.25z"/><path fill="#7ED2EF" d="M2.75 57.3c4.667-4.366 10.2-6.55 16.6-6.55h46.3c6.1 0 11.35 2.05 15.75 6.15-2.034 5.433-5.284 10.383-9.75 14.85-8.2 8.167-18.084 12.25-29.65 12.25-11.6 0-21.517-4.083-29.75-12.25-4.333-4.333-7.5-9.15-9.5-14.45zm26.35-42.85c3.5-3.5 7.75-5.25 12.75-5.25s9.267 1.75 12.801 5.25c3.5 3.533 5.25 7.767 5.25 12.7 0 5-1.75 9.267-5.25 12.8-3.534 3.5-7.801 5.25-12.801 5.25s-9.25-1.75-12.75-5.25c-3.533-3.534-5.3-7.8-5.3-12.8 0-4.933 1.766-9.167 5.3-12.7z"/></g></svg>
          <div className="card-top-left">
            <h3 className="info-name">{datas.name} </h3>
            <h5 className="info-type">{datas.doctorType}</h5>
            <h6 className="info-add">{datas.address}</h6>
            <h6 className="info-add">{datas.contactNo}</h6>
            <h6 className="hardcode-info">0.7 miles away</h6>
            <h6 className="hardcode-info">View Additional Locations(6)</h6>
            <h6 className="hardcode-info">View Enrollment Information</h6>
          </div>
        </div>
        <div className = "disclaimer">
          <h6 className="hardcode-info">Not Evaluated for Premium Care</h6>
          <h6 className="hardcode-info">Accepting all patients</h6>
        </div>
      </div>
      <div className="card-bottom">
      <h6>Office Visit-Primary Doctor-Established Patient-Moderate Complexity</h6>
      </div>
    </div>
    )
  }
  
  export default Task
  