import React,{useState} from 'react'
import Accordion from 'react-bootstrap/Accordion'

export default function About() {

     const [mystyle, setmystyle] = useState({
        color: 'black',
        backgroundColor :'white'
      } )
       
     const [BtnTxt, setBtnTxt] = useState(
        "Enable Dark Mode"
     ) 
      const darkMode = (event )=>{

        if(mystyle.color ==='white') {
             setmystyle({
                color: 'black',
                backgroundColor :'white',
                
             })
             setBtnTxt("Enable Dark Mode");
         }
             else{
                setmystyle(
                {
                    color: 'white',
                    backgroundColor :'black'
                }
                ) 
                setBtnTxt("Enable Light Mode");
             }
      }
    

  return (
    <>

    <div className="container" style={mystyle} >
        <h2 className='my-2'> About us</h2>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" style={mystyle}>
        <Accordion.Header style={mystyle}>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={mystyle}>
        <Accordion.Header style={mystyle}>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

     <button className="btn btn btn-primary my-3" onClick={darkMode}>{BtnTxt}</button>
    </div>
    </>
  )
}
