import { useAuth } from "../../context/AuthContext";


export default function Content() {

  const {user} = useAuth();

  return (
    <div style={{height: '80vh', background:"green", width: "100vw"}}>
    <h1>Wel come {user}</h1>
    </div>
  )
}
