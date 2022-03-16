import { useEffect, useState} from "react";
import axios from "../../api/Axios";
import Table from "../table/Table"; 

function TableContainer() {
  const [people, setPeople] = useState([]);
  const [tot, setTot] = useState('');

    useEffect(() => {
      axios.get("people/").then(function (response) {
        setPeople(response.data.results);
        setTot(response.data.count)
      })
      .catch((error) => {
        if(error.response){
          console.log("not found");
        }
      })
    }, []);
    return (<div> <h1>Star Wars Table</h1>
        <h2>total count {tot}</h2>
        
        {
          people === ""?
          <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
          :
          <Table 
          people = {people} 
          ></Table>
        }
    </div>            

  );
}

export default TableContainer;
