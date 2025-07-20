import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const usersData = useLoaderData();
    console.log(usersData);
    return (
        <div>
            <h1>Users: {usersData.length} </h1>

           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-6 ">
            {
                usersData.map(user => <User user={user} key={user.id}></User> )
            }
           </div>
            
        </div>
    );
};

export default Users;