import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {

    const [categories,setCategories] = useState([])

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories (data))
    },[])
    return (
        <div>
            <h2 className="text-2xl font-bold">All Categories</h2>

            {
                categories.map(category => <Link className="block ml-6 text-xl font-semibold mt-5" key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;