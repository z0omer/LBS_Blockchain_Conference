export const Schedule = (props) => {
  return (
    <div id='schedule' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Schedule</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='.col-xs-11 col-md-11'>
                  <div className='schedule-image'>
                  <img src={d.img} alt="schedule item"/>
                  </div>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
