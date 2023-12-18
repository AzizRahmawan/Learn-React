import { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
    });
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const resultContainer = document.getElementById('result-text');

      resultContainer.innerHTML = `<h1>Username: ${formData.username}, Email: ${formData.email}</h1>`;
    };
    return (
      <div className="justify-center items-center m-4">
        <div id="result-text"></div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold " htmlFor="username">
              username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
              </label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
              />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
}


export default Form