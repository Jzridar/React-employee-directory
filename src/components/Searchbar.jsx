import React, { useState } from 'react'


const SearchBar = (props) => {//State to hold the data of our form
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
    props.search(formData.searchterm);
  };

  //The component must return some JSX
  return (
    <div>
      <form>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
      </form>
    </div>
  );
};

export default SearchBar;