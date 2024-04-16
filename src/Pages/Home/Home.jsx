import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightsideNav from "../Shared/RightsideNav/RightsideNav";
import BrKingNews from "./BrKingNews";



const Home = () => {
    return (
        <div>
            <Header></Header>
             <BrKingNews></BrKingNews>
            <Navbar></Navbar>
            

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                <div><LeftSideNav></LeftSideNav></div>

                <div className="md:col-span-2">
                    <h2>New comming soon............</h2>
                </div>

                <div><RightsideNav></RightsideNav></div>
            </div>
        </div>
    );
};

export default Home;