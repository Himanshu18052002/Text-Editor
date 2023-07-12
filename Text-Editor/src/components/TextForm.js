import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('');
    //setText("enter text"); for setting text this is the correct way

    const handleUpClick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert('Converted to Upper case', 'success');
    }

    const handleloClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert('Converted to Lower case', 'success');
    }

    function convertToCamelCase(str) {
      // Split the string by spaces
      const words = str.split(' ');
    
      // Convert the first word to lowercase
      let camelCase = words[0].toLowerCase();
    
      // Convert the first character of each subsequent word to uppercase
      for (let i = 1; i < words.length; i++) {
        const capitalizedWord = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        camelCase += capitalizedWord;
      }
    
      return camelCase;
    }

    const handelCamelCase = ()=>{
        let newtext = convertToCamelCase(text);
        setText(newtext)
        props.showAlert('Converted to CamelCase!! you can change it to normal text by the dedicated button', 'warning');
    }

    function convertToNormalCase(str) {
        // Split the camelCase string into words
        const words = str.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
      
        // Join the words with spaces
        const spaceSeparatedString = words.join(' ');
        return spaceSeparatedString;
      
    }

    const handelNormalText = ()=>{
      let newtext = convertToNormalCase(text);
      setText(newtext);
      props.showAlert('Converted to Normal text!!', 'success');
    }
    
    const handleOnChange = (event)=>{ // when click is done this event will be passed to the function
        setText(event.target.value); //this event will be changed to the targeted value
    }
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
    <div className="mb-3 ">
      <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark' ? '#4A336E' : 'white' , color: props.mode === 'dark' ? 'white' : 'black'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button className='btn btn-primary' onClick={handleUpClick}>Convert to Upper-case</button>
    <button className='btn btn-primary mx-1' onClick={handleloClick}>Convert to Lower-case</button>
    <button className='btn btn-primary mx-1' onClick={handelCamelCase}>Convert to Camel Case font</button>
    <button className='btn btn-primary mx-1' onClick={handelNormalText}>Change into normal texts</button>
    </div>
    <div className="container my-4" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your text summary :</h1>
        <p>{text === ''? 0 : text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read time</p>
        <h2>Text preview</h2>
        <p>{text.length > 0 ? text : "Enter something on the above Box to preview it here!!"}</p>
    </div>
    
</>
  );
}
