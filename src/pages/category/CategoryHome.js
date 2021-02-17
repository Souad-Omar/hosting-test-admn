import axios from 'axios'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Table from '../../components/tabel/Table'




export default function CategoryHome() {
  const [categories, setcategories] = useState([])
    useEffect(() => {
     axios.get('http://127.0.0.1:3000/category/list').then(response =>{
       console.log(response);
       setcategories(response.data.data)
      })
    }, [])
  return (
    <div className={"row mt-5"}>
      <div className={"col-md-9 "}>
        <h2>CategoryData</h2>
        <Table
          action ={true}
          header={['title','description']}
          data={categories}
        />
        {categories.map(category=> <>
              <div className={"list-group"}>
              <a  className="list-group-item list-group-item-action m-1">
                <Link to={`/categories/${category._id}`}>
                        <span className={"text-info font-weight-bold"}> {category.title} </span>
                </Link>
              </a>
              </div>
             </>)}
       
      </div>
      <div className={"col-md-3"}>
          
      </div>
    </div>
  )
}
