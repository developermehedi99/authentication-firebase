import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
    const userInfo = useContext(AuthContext)
    return (
        <div>
            <h2>User:{userInfo.name} </h2>
        </div>
    );
};

export default Home;