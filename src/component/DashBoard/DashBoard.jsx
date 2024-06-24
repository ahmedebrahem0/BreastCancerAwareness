import React, { useContext, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";

export default function DashBord() {
  const { userData, setUserData } = useContext(CartContext);
    
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUserData(storedUsers);
  }, [setUserData]);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(10, "Too Short!")
      .max(40)
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "The password must contain at least 8 characters")
      .matches(
        /[a-z]/,
        "The password must contain at least one lowercase letter"
      )
      .matches(/[A-Z]/, "The password must contain at least one capital letter")
      .matches(/[0-9]/, "The password must contain at least one number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "The password must contain at least one special character"
      )
      .required("Password is required"),
    phone: Yup.string()
      .matches(/^\+?\d+$/, "Phone number should only contain numbers")
      .min(11, "Phone number must contain 11 digits")
      .max(12, "Phone number must contain 11 digits")
      .required("Phone number is required"),
  });

  const validateField = async (field, value) => {
    try {
      await validationSchema.validateAt(field, { [field]: value });
      return null;
    } catch (error) {
      return error.message;
    }
  };

  const handleDelete = (index) => {
    const updatedUsers = userData.filter((_, i) => i !== index);
    setUserData(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleUpdate = async (index) => {
    const updatedUser = { ...userData[index] };

    let newName;
    while (true) {
      newName = prompt("Enter new name:", updatedUser.name);
      if (newName === null) return;
      const nameError = await validateField("name", newName);
      if (!nameError) break;
      alert(nameError);
    }

    let newEmail;
    while (true) {
      newEmail = prompt("Enter new email:", updatedUser.email);
      if (newEmail === null) return;
      const emailError = await validateField("email", newEmail);
      if (!emailError) break;
      alert(emailError);
    }

    let newPassword;
    while (true) {
      newPassword = prompt("Enter new password:", updatedUser.password);
      if (newPassword === null) return;
      const passwordError = await validateField("password", newPassword);
      if (!passwordError) break;
      alert(passwordError);
    }

    let newPhone;
    while (true) {
      newPhone = prompt("Enter new phone:", updatedUser.phone);
      if (newPhone === null) return;
      const phoneError = await validateField("phone", newPhone);
      if (!phoneError) break;
      alert(phoneError);
    }

    updatedUser.name = newName;
    updatedUser.email = newEmail;
    updatedUser.password = newPassword;
    updatedUser.phone = newPhone;

    const updatedUsers = userData.map((user, i) =>
      i === index ? updatedUser : user
    );
    setUserData(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleAddUser = async () => {
    let name;
    while (true) {
      name = prompt("Enter name:");
      if (name === null || name === "") return;
      const nameError = await validateField("name", name);
      if (!nameError) break;
      alert(nameError);
    }

    let email;
    while (true) {
      email = prompt("Enter email:");
      if (email === null || email === "") return;
      const emailError = await validateField("email", email);
      if (!emailError) break;
      alert(emailError);
    }

    let password;
    while (true) {
      password = prompt("Enter password:");
      if (password === null || password === "") return;
      const passwordError = await validateField("password", password);
      if (!passwordError) break;
      alert(passwordError);
    }

    let phone;
    while (true) {
      phone = prompt("Enter phone:");
      if (phone === null || phone === "") return;
      const phoneError = await validateField("phone", phone);
      if (!phoneError) break;
      alert(phoneError);
    }

    const newUser = { name, email, password, phone };

    const updatedUsers = [...userData, newUser];
    setUserData(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <>
      <div className="container my-5">
        <div className="div d-flex align-items-center justify-content-between">
          <h3 className="my-5">All patients: {userData?.length || 0}</h3>
          <button
            className="btn btn-outline-primary color-white m-3 AddNewUser"
            onClick={handleAddUser}
          >
            Add New User
          </button>
        </div>
        <div>
          <table className="table table-striped">
            <thead className="thead">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Phone</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {userData &&
                userData.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.phone}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => handleUpdate(index)}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <NavLink
          to="/BreastCancerAwareness/Home"
          className="btn btn-outline-warning color-white m-3 ms-auto"
        >
          Logout
        </NavLink>
      </div>
    </>
  );
}
