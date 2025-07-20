import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, email, phone, website, id
   } = user;
  return (
    <div className="border-2 border-amber-200 rounded-2xl p-10 ">
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{phone}</h1>
      <h1>{website}</h1>
      <Link className="btn btn-primary" to={`/user/${id}`}>Show Deatils</Link>
    </div>
  );
};

export default User;
