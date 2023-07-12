import React, {useState} from 'react'

export default function About() {
    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const [btnText, setbtnText] = useState('Enable Dark Mode');

    const toggleMode = () => {
        if(myStyle.color === 'white'){
           setmyStyle({
            color: 'black',
            backgroundColor: 'white'
           })
            setbtnText('Enable Dark Mode');
        }else{
            setmyStyle({
            color: 'white',
            backgroundColor: 'black'
            })
            setbtnText('Enable Light Mode');
        }
    };

  return (
    <div className="container rounded">
    <div className="accordion container my-3 rounded-4" style = {myStyle} id="accordionExample">
        <h2>About</h2>
        <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" style = {myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Education
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {myStyle}>
                    <strong>Here is my education details. :</strong> B.Tech. graduate of 2023 Batch Computer Science and Engineering stream with 7.3 SGPA , Higher Secondary and Senior Secondary education are from CBSE Board with 6.8 and 6.6 CGPA.        </div>
                </div>
        </div>
        <div className="accordion-item" style = {myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Skills
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {myStyle}>
                    <strong>Here's my skills. :</strong> C++, Java, Javascript, HTML, CSS, Bootstrap, NodeJS, ExpressJS, ReactJS and MongoDB.
                </div>
                </div>
        </div>
        <div className="accordion-item" style = {myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Contact Info
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {myStyle}>
                    <strong>This is my Contact information</strong> Email: himanshudawande1805@gmail.com, Mobile No: +91 7999395714 || +91 8103176314
                </div>
                </div>
        </div>
        
    </div>
    <button type="button" onClick={toggleMode} className='btn btn-primary'>{btnText}</button>
    </div>
  )
}
