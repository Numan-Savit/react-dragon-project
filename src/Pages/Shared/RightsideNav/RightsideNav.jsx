
import { FcGoogle } from "react-icons/fc";
import { FaGithub , FaFacebook } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const RightsideNav = () => {
    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold mt-5 mb-5">Login With</h2>

                <button className="btn btn-outline w-full btn-success">
                <FcGoogle />
                   Google
                </button> <br />

                <button className="btn btn-outline w-full mt-5 btn-success">
                <FaGithub />
                   Github
                </button>

            </div>

            <div>
                <h2 className="mt-10 mb-5 text-2xl font-bold">Find Us On</h2>

                <a className="flex p-4 items-center border rounded-t-lg" href="">
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a className="flex p-4 items-center mt-5 border" href="">
                     <BsTwitter />
                    Twitter
                </a>

                <a className="flex p-4 items-center mt-5 border rounded-b-lg" href="">
                     <FaInstagramSquare />
                    Instagram
                </a>

            </div>


            {/* Q Zone Image Set */}


            <div>
                <h2 className="text-2xl font-bold mt-5 mb-5">Q Zone Area</h2>
                <img src= {qzone1} alt="" />
                <img src= {qzone2} alt="" />
                <img src= {qzone3} alt="" />
            </div>
            
        </div>
    );
};

export default RightsideNav;