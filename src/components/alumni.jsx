export const Alumni = (props) => {
  return (
    <div id='alumni'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Alumni Corner</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='alumni'>
                    <div className='alumni-image'>
                      <img src={d.img} alt="alumni details"/>
                    </div>
                    <div className='alumni-content'>
                    <div className='alumni-meta'> {d.name} </div>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
           
        </div>
        <div className="alumni-contact">
              <a href="https://lbs-blockchain.com/#:~:text=lbsblockchain%40protonmail.com">Alumni : Get in touch with LBS Blockchain Society</a> 
        </div>
      </div>
    </div>
  )
}
