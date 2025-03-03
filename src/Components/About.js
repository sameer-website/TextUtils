// import React, {useState} from 'react'

export default function About(props) {

  let myStyle={
    color:props.mode === 'dark'?'white':'#042743',
    backgroundColor:props.mode === 'dark'?'rgb(36 74 104)':'white'
  }

  return (
    <div>
      <div className="container">
      <h1 className='my-3' style={{color:props.mode === 'dark'?'white':'#042743'}}>About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle} >
              Textutils gives you way to analyze your text quickly and efficiently. Be to word count charater count or 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle} >
              Textutils is a free character counter tool that provides instant character count & word count. statistics for a given count textutlis repostery nomber of words and characters . thus it is suitable for writing text word character limit
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
             <strong>Browser Compatiable</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle} >
              This word counter software works in any web browser such as chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count ,facebooks, Vlog books  
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
