import { Image } from "./image";

export const Speakers = (props) => {
  return (
    <div id='speakers' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Speakers</h2>
          <p>
            
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='speakers-image'>
                  <Image title={d.title} largeImage={d.img} smallImage={d.img} />
                  </div>                  
                  <div className='service-desc'>
                  <a href={d.linkedIn} target="_blank" rel="noreferrer">
                      <i className='fa fa-linkedin'></i>
                    </a>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
