import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const LeftNav = () => {
    const [categories, setcategories] = useState([]);
    useEffect(() =>{
       fetch('http://localhost:3000/categories')
       .then(res => res.json())
       .then(data => setcategories(data));
    },[])
    return (
        <div className="border border-1 mt-4 text-bold">
            <h2>All categories</h2>
            <div>
                {
                    categories.map( category =><p key={category.id}>
 <Link to={`/category/${category.id}`} className="text-decoration-none fs-4 p-2">{category.name}</Link>
                    </p> )
                }
            </div>
        </div>
    );
};

export default LeftNav;