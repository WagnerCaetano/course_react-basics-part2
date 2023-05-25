import { useNavigate } from "react-router-dom";
import "./style.css";
import { useEffect, useRef, useState } from "react";

export const Redirect = () => {
  const [time, setTime] = useState(3);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    if (time <= 0) {
      navigate("/about", { replace: true, state: "state" });
    }
  }, [time]);

  return (
    <div className="posts">
      <h1>Get out of here in: {time}</h1>
    </div>
  );
};
