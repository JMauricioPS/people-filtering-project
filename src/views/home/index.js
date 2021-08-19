import { useEffect, useState } from "react";
import axios from "axios";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";

//import data from "../../data/users.json";
import "./style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Search() {
  const [isAtTop, setIsAtTop] = useState(false);
  //const [usersData, setUsersData] = useState(data);
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        //realizando peticiones a una API con FETCH.
        /* fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setData(data)); */
        /* const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data =  await response.json();
        setData(data); */
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers().catch(null);
  }, []);

  const handleCloseSearch = () => {
    setIsAtTop(false); //invertir el valor de isAtTop
    setResults([]);
  };

  const handleSearchClick = (searchText) => {
    setIsAtTop(true);
    if (data?.length) {
      const searchTextMinus = searchText.toLowerCase();
      const filteredData = data.filter((value) => {
        return (
          value.name.toLowerCase().includes(searchTextMinus) ||
          value.email.toLowerCase().includes(searchTextMinus) ||
          value.phone.toLowerCase().includes(searchTextMinus) ||
          value.username.toLowerCase().includes(searchTextMinus)
        );
      });
      console.log(filteredData);
      setResults(filteredData);
    }
  };

  return (
    <>
      <Navbar isAtTop={isAtTop} />
      <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
        <SearchBox
          onSearch={handleSearchClick}
          onClose={handleCloseSearch}
          isSearching={isAtTop}
        />
        <SearchResults results={results} isSearching={isAtTop} />
      </div>
      <Footer isAtTop={isAtTop} />
    </>
  );
}
