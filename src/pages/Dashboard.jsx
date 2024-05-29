import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, email, photoURL } = useAuth();
  return (
    <div>
      <h1 className="text-3xl text-center mt-8 text-orange-900">
        Welcome <span className="text-green-900	">{user.displayName}</span> at
        <span className=" font-bold	"> FABULOUS</span>
        <span> T-Shart Corner</span>
      </h1>

      <div className="text-center mt-5">
        <div className="avatar ">
          <div className="w-36 rounded-full">
            <img src={user.photoURL} />
          </div>
        </div>
        <h1 className="font-bold">Name : {user.displayName}</h1>
        <h1 className="font-bold">Email : {user.email}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
