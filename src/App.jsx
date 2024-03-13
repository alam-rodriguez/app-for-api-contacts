import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");

  const [contacts, setContacts] = useState([]);
  // const [contactsRequired, setContactsRequired] = useState([]);

  useEffect(() => {
    // const f = async () => {
    //   const response = await fetch("https://contact-api-zeta.vercel.app/contacts");
    //   if (response.status != 200) return;
    //   const data = await response.json();
    //   setContacts(data);
    // };
    // f();
    searchContacts();
  }, []);

  const searchContacts = async () => {
    let url = "https://contact-api-zeta.vercel.app/contacts?";
    console.log(name != "");
    url.concat(`name=${name}`);
    if (name != "") url = url.concat(`name=${name}`);
    if (phone != 0) url = url.concat(`&phone=${phone}`);
    if (email != "") url = url.concat(`&email=${email}`);
    console.log(url);
    const response = await fetch(url);
    if (response.status == 404) return setContacts([]);
    const data = await response.json();
    setContacts(data);
  };

  const handleName = (e) => setName(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  return (
    <main className="w-2/4 m-auto">
      <p className="text-center text-5xl mt-10">Contact app</p>

      <table className="table-auto mx-auto mt-12 text-2xl">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>numero</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, i) => (
            <tr key={i}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-40">
        <div className="mt-4">
          <input className="text-black" type="text" id="nombre" value={name} onChange={handleName} />
          <label htmlFor="nombre">Nombre</label>
        </div>
        <div className="mt-4">
          <input className="text-black" type="text" id="phone" onChange={handlePhone} value={phone} />
          <label htmlFor="phone">Numero</label>
        </div>
        <div className="mt-4">
          <input className="text-black" type="text" id="email" value={email} onChange={handleEmail} />
          <label htmlFor="email">Email</label>
        </div>
        <button className="bg-blue-800 py-2 px-5 rounded-full text-2xl" onClick={searchContacts}>
          Buscar
        </button>
      </div>
    </main>
  );
}

export default App;
