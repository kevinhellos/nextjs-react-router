import { Link } from "react-router-dom";

export default function Navlink() {
  return (
    <div>
        <Link to="/">Homepage</Link>
        <Link to="/about">About</Link>
    </div>
  )
}
