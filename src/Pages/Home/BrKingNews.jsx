
import Marquee from "react-fast-marquee";
const BrKingNews = () => {
    return (
        <div className="flex"> 
            <button className="btn btn-danger">Breaking News</button>

            <Marquee>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
        
    );
};

export default BrKingNews;