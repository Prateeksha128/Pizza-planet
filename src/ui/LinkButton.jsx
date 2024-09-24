import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
    const className = "text-sm text-blue-600 hover:text-orange-700";
  const navigate = useNavigate();
  if (to === "-1") {
    return <button className={className} onClick={() => navigate(-1)}>{children} </button>;
  }
  return (
    <Link to={to} className= {className}>
      &larr; Back to menu
    </Link>
  );
}

export default LinkButton;
