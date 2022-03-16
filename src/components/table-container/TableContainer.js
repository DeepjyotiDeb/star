import { useEffect, useState} from "react";
import axios from "../../api/Axios";
import Table from "../table/Table"; 

function TableContainer() {
  const [people, setPeople] = useState([]);
  
  // const PostTable = () => {
    useEffect(() => {
      axios.get("people/").then(function (response) {
        setPeople(response.data.results);
        // console.log(response.data.results)
      })
      .catch((error) => {
        if(error.response){
          console.log("not found");
        }
      })
    }, []);
  // }
    // const Search = () => {
      // const [search, setSearch] = useState([]);
      // const handleSearch = (e) => {
      //   setSearch(e.target.value)
      // };
    // }
    // const peopleData = {
    //   people: people.filter((item) => 
    //   item.name.toLowerCase().includes(search.toLowerCase())),      
    // };
    return (<div> <h1>Star Wars Table</h1>
        {/* {console.log(typeof(people))} */}
        <label htmlFor="search">Search: <span></span>
        <input id = "search" type="text" />
        </label>
        {
          people == ""?
          <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
          :
          <Table 
          people = {people} 
          // {...console.log(peopleData)}
          ></Table>
        }
    </div>            

  );
}

export default TableContainer;
