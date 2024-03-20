









import React from "react";

import { Form, Button , Row , Col} from 'react-bootstrap';

//import "./index.css"

export default function Main5(){

       const[text, settext] = React.useState("")

       const[array, setarray] = React.useState([])

       

        function Change(e){

           settext(e.target.value)


        }

        function Dabao(){

          setarray([...array, text])

          settext("")


        }

         React.useEffect(() => {

           console.log(array)

         }, [array])



           const render = array.map((pre, index) => (

            <div key={index}>

<Row className="row22">

<Col>

 <div className="raone">

 <p>{pre}</p>


 </div>
 
</Col>


 <Col>
 
 <Button onClick={() => Delete(index)}  className="rounded-circle"  style={{ backgroundColor: "black" }}>

 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>



</Button>
 
 </Col>


      <Col>
      
      <Button onClick={() => Edit(index)}  className="rounded-circle"  style={{ backgroundColor: "black" }}>

      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
</svg>



</Button>
      
      
      
      
      </Col>



</Row>





            </div>



           ))


           function Delete(index){

              const newarray = [...array]

              newarray.splice(index, 1)

              setarray(newarray)

               

           }
      

            function Edit(index){

                   const liz = [...array]


                const write = prompt('write something')

                liz[index] = write

                setarray(liz)



            }





      return(
      

        <>

        <Row className="row21">


       <Col>


<Form.Control
          type="text"
          placeholder="Enter text"
          id="viral"
          onChange={Change}
          value={text}
          
        />


        </Col>

        <Col>
        
        <Button onClick={Dabao} className="rounded-circle"  style={{ backgroundColor: "black" }}>

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
<path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg>



</Button>
        
        
        </Col>




      </Row>

           {render}



        </>






      )



}









































