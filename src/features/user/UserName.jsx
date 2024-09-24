import { useSelector } from "react-redux";

function UserName() {
    const username = useSelector((state) => state.user.username);
    if (!username) return null;
  return (
    <div className="hidden text-md font-semibold md:block tracking-wider">{username}</div>
  );
}

export default UserName;
