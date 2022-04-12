export const Agenda = (props) => {
  return (
    <div id='agenda' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Agenda</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-8 col-md-4'>
                  <div className='agenda-image'>
                  <img src={d.img} />
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <p>{d.event1}</p>
                  <p>{d.event2}</p>
                  <p>{d.event3}</p>
                  <p>{d.event4}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
