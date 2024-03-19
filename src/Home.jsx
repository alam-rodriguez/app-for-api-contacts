import { useEffect, useState } from "react";
import "./App.css";
import InputText from "./components/inputText";
// import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input, Button, Switch } from "@nextui-org/react";
// import { MoonIcon } from "./MoonIcon";
// import { SunIcon } from "./SunIcon";

import { useMode } from "../zustand/mode";
function Home() {
  const { mode, changeMode } = useMode();

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    searchContacts();
    console.log(mode);
  }, []);

  const peticion = async (url) => {
    console.log(url);
    const response = await fetch(url);
    console.log(response);
    if (response.status == 404) return setContacts([]);
    const data = await response.json();
    console.log(data);
    setContacts(data);
  };

  const searchContacts = async () => {
    let url = "https://contact-app-68bcp5fl2-alamrodriguezs-projects.vercel.app/contacts?";
    console.log(name != "");
    url.concat(`name=${name}`);
    if (name != "") url = url.concat(`name=${name}`);
    if (phone != 0) url = url.concat(`&phone=${phone}`);
    if (email != "") url = url.concat(`&email=${email}`);
    console.log(url);
    peticion(url);
    // const response = await fetch(url);
    // if (response.status == 404) return setContacts([]);
    // const data = await response.json();
    // setContacts(data);
  };

  const handleName = (e) => setName(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const resetContacts = () => {
    setName("");
    setPhone(0);
    setEmail("");
    peticion("https://contact-app-68bcp5fl2-alamrodriguezs-projects.vercel.app/contacts");
  };

  const setContactSeleted = ({ contact }) => {};

  const goToCreateContact = () => navigate("/create-contact");

  // const [theme, setTheme] = useState("light");

  useEffect(() => {
    console.log(mode);
  }, [mode]);

  return (
    <main className="m-auto container px-10 py-5">
      <p className="text-center text-6xl mt-0 font">Contact app</p>

      <Table aria-label="Example static collection table" className="mt-10">
        <TableHeader>
          <TableColumn>Nombre</TableColumn>
          <TableColumn>Apellido</TableColumn>
          <TableColumn>Numero</TableColumn>
          <TableColumn>Email</TableColumn>
        </TableHeader>
        <TableBody>
          {contacts.map((contact, i) => (
            <TableRow key={i}>
              <TableCell>{contact.firstName}</TableCell>
              <TableCell>{contact.lastName}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* <div className="bg-gray-300 p-3 rounded-sm mt-10">
        <div className="flex justify-between">
          <p className="w-1/4 text-xl font-semibold">Nombre</p>
          <p className="w-1/4 text-xl font-semibold">Apellido</p>
          <p className="w-1/4 text-xl font-semibold">Numero</p>
          <p className="w-1/4 text-xl font-semibold">Email</p>
        </div>
      </div>
      <div className="bg-gray-300 p-3 rounded-md mt-5">
        {contacts.length > 0 ? (
          contacts.map((contact, i) => (
            <div key={i} className="flex justify-between pt-5" onClick={() => setContactSeleted(contact)}>
              <p className="w-1/4 font-medium">{contact.firstName}</p>
              <p className="w-1/4 font-medium">{contact.lastName}</p>
              <p className="w-1/4 font-medium">{contact.phone}</p>
              <p className="w-1/4 font-medium">{contact.email}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-2xl font-semibold text-orange-900">Sin contactos</p>
        )}
      </div> */}

      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 clear-start mt-10">
        <Input type="text" label="Nombre" value={name} onChange={handleName} />
        <Input type="number" label="Numero" value={phone} onChange={handlePhone} />
        <Input type="email" label="Email" value={email} onChange={handleEmail} />
      </div>

      <div className="flex gap-5 mt-5">
        <Button className="bg-red-700 text-white" onClick={searchContacts}>
          Buscar
        </Button>
        <Button className="bg-red-700 text-white" onClick={resetContacts}>
          Restablecer
        </Button>
        <Button className="bg-red-700 text-white" onClick={goToCreateContact}>
          Crear contacto
        </Button>
      </div>

      <div className="mt-20">
        {/* <InputText id="nombre" text={name} handleChange={handleName} label="Nombre" placeholder="Nombre" />
        <InputText id="Numero" text={phone} handleChange={handlePhone} label="Numero" />
        <InputText id="email" text={email} handleChange={handleEmail} label="Email" /> */}

        <div className="mt-6 flex gap-5">
          {/* <Button handleClick={searchContacts} text="Buscar" />
          <Button handleClick={resetContacts} text="Restablecer" />
          <Button handleClick={goToCreateContact} text="Crear contacto" /> */}
        </div>
      </div>

      <Button className="bg-white text-black" onClick={() => changeMode("light")}>
        Light Mode
      </Button>
      <Button className="bg-black text-white" onClick={() => changeMode("dark")}>
        Dark Mode
      </Button>
    </main>
  );
}

export default Home;
