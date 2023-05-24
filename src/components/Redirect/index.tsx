import { useParams } from "react-router-dom";
import "./style.css";

export const Redirect = () => {
  const params = useParams();
  const id = params.id ? params.id : "0";

  return (
    <div className="posts">
      <h1>Posts {`ID: ${id}`}</h1>
    </div>
  );
};
