import { useState } from "react";
// import InputText from "./components/inputText";
// import Button from "./components/Button";
import { useNavigate } from "react-router-dom";

import { Input, Button } from "@nextui-org/react";

const CreateContact = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handlephoneChange = (e) => setPhone(e.target.value);
  const handleemailChange = (e) => setEmail(e.target.value);

  const handleClickCreateContact = async () => {
    if (firstName.length == 0 || lastName.length == 0 || phone == 0 || email.length == 0) {
      alert("Todos los campos deben de estar debidamente llenos");
      return;
    }
    const response = await fetch("https://contact-app-68bcp5fl2-alamrodriguezs-projects.vercel.app/contacts", {
      method: "post",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: phone,
        phone: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status !== 200) {
      alert("Ha ocurrido un error");
      return;
    }
    console.log(response);
    const newContact = await response.json();
    alert("Contacto cuargado exitosamente");
    console.log(newContact);
  };

  const goToHome = () => navigate("/");

  return (
    <main className="m-auto container px-5 mb-10">
      <p className="text-center text-6xl mt-10 font">Contact app</p>

      <div className="bg-gray-300 p-3 rounded-sm mt-10">
        {/* <div className="flex justify-between">
          <p className="w-1/4 text-xl font-semibold">Nombre</p>
          <p className="w-1/4 text-xl font-semibold">Apellido</p>
          <p className="w-1/4 text-xl font-semibold">Numero</p>
          <p className="w-1/4 text-xl font-semibold">Email</p>
        </div> */}
        <p className="text-xl font-semibold text-center">Crear contacto</p>
      </div>

      {/* <div className="bg-gray-300 p-3 rounded-md mt-5">
        {contacts.length > 0 ? (
          contacts.map((contact, i) => (
            <div key={i} className="flex justify-between pt-5">
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

      <div className="mt-20">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input type="text" label="Nombre" value={firstName} onChange={handleFirstNameChange} />
          <Input type="text" label="Apellido" value={lastName} onChange={handleLastNameChange} />
          <Input type="number" label="Numero" value={phone} onChange={handlephoneChange} />
          <Input type="email" label="Email" value={email} onChange={handleemailChange} />
        </div>
        {/* <InputText id="nombre" text={firstName} handleChange={handleFirstNameChange} label="Nombre" placeholder="Nombre" />
        <InputText id="apellido" text={lastName} handleChange={handleLastNameChange} label="Apellido" />
        <InputText id="phone" text={phone} handleChange={handlephoneChange} label="Numero" />
        <InputText id="email" text={email} handleChange={handleemailChange} label="Email" /> */}

        <div className="mt-6 flex gap-5">
          <Button className="bg-red-500 text-white" onClick={handleClickCreateContact}>
            Crear contacto
          </Button>
          <Button className="bg-red-500 text-white" onClick={goToHome}>
            Ver contactos
          </Button>
          {/* <Button handleClick={handleClickCreateContact} text="Crear contacto" />
          <Button handleClick={goToHome} text="Ver contactos" /> */}
        </div>
      </div>
    </main>
  );
};

export default CreateContact;
