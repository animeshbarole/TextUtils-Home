import React,{useState} from "react";
//import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function BasicExample(props) {
  
  const [text, setText] = useState("");
   let yourname = "Animesh Barole"
  const handleUpClick = (event) =>
  {
      console.log("Run")
      let newText = text.toUpperCase();
       setText(newText)
       props.showAlert("Converted to UpperCase");
       
  }
  
  const handleExtraSpace = (event) =>
  {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaced Removed");
  }

  const handleCopyText =(event) =>
  {
     let newText = document.getElementById("exampleForm.ControlTextarea1")
     newText.select()
     navigator.clipboard.writeText(newText.value);
     props.showAlert("Copied To ClipBoard");
  }

  const handleReverse = (event) =>
  {
      if(text===yourname)
      {
       
        alert("Your name Can't be Reversed Just Like Your Direction ")
        props.showAlert("This is Your Name");
      }
   else{
    let  newText= text.split("").reverse().join("")
      setText(newText)
      props.showAlert("Text is Reversed ");
   }
      
  }

  const handleLowClick = (event) =>
  {
       let newText = text.toLowerCase();
       setText(newText)
       props.showAlert("Converted to LowerCase");
  }

  const handleOnChange = (event) =>
  {
     console.log("Onchange");
     setText(event.target.value)
  }



  //text= "animesh" Worng way to change the text
  //setText =("Enter the new Text") //Correct Way to Change the Syntax
  return (
    <>
    <div className="container box1">
    <Form>
      <h1>{props.heading} </h1>
     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
           <Form.Control  as="textarea" value ={text}   onChange = {handleOnChange}  rows={7} />
      </Form.Group>
     </Form>
     
     <Button className="mx-0" variant="outline-dark"  onClick={handleUpClick}>Change To UpperCase</Button>
     <Button className="mx-3" variant="outline-dark"  onClick={handleLowClick}>Change To LowerCase</Button>
     <Button className="mx-1" variant="outline-dark"  onClick={handleReverse}>Change To Reverse</Button>
     <Button className="mx-3" variant="outline-dark"  onClick={handleCopyText}>Tap To Copy</Button>
     <Button className="mx-2" variant="outline-dark"  onClick={handleExtraSpace}>Tap To Remove Space</Button>

     </div>  
      <div className="container my-3">
        <h1>Word and character Summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} Characters </p>
        <p>{0.008*(text.split(" ").length-1)} Minutes Read  </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to Preview"}</p>
        
      </div>
    </>
  );
}

export default BasicExample;
