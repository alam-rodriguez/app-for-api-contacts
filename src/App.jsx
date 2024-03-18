import CreateContact from "./CreateContact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState(0);
  // const [email, setEmail] = useState("");

  // const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   searchContacts();
  // }, []);

  // const peticion = async (url) => {
  //   const response = await fetch(url);
  //   if (response.status == 404) return setContacts([]);
  //   const data = await response.json();
  //   setContacts(data);
  // };

  // const searchContacts = async () => {
  //   let url = "https://contact-api-zeta.vercel.app/contacts?";
  //   console.log(name != "");
  //   url.concat(`name=${name}`);
  //   if (name != "") url = url.concat(`name=${name}`);
  //   if (phone != 0) url = url.concat(`&phone=${phone}`);
  //   if (email != "") url = url.concat(`&email=${email}`);
  //   console.log(url);
  //   peticion(url);
  //   // const response = await fetch(url);
  //   // if (response.status == 404) return setContacts([]);
  //   // const data = await response.json();
  //   // setContacts(data);
  // };

  // const handleName = (e) => setName(e.target.value);
  // const handlePhone = (e) => setPhone(e.target.value);
  // const handleEmail = (e) => setEmail(e.target.value);

  // const resetContacts = () => {
  //   setName("");
  //   setPhone(0);
  //   setEmail("");
  //   peticion("https://contact-api-zeta.vercel.app/contacts");
  // };

  // const goToCreateContact = () => {};

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/create-contact" Component={CreateContact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
