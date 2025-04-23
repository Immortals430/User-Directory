import { useEffect, useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Card from "./Component/Card/Card";
import Error from "./Component/Error/Error";
import NoSearchResult from "./Component/NoSearchResult/NoSearchResult";
import Loading from "./Component/Loading/Loading";
import MobileNavbar from "./Component/Navbar/MobileNavbar";

function App() {
  const [userData, setUserData] = useState([]);
  const [filterData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  // fetch user data
  const fetchData = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      res = await res.json();
      setUserData(res);
      setFilteredData(res);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // fetch user data on initial render
  useEffect(() => {
    fetchData();
  }, []);

  // error
  if (error) return <Error fetchData={fetchData} setError={setError} />;

  // loading
  if (loading) return <Loading />;

  return (
    <>
      <Navbar
        setFilteredData={setFilteredData}
        userData={userData}
        setNoResult={setNoResult}
        setMobileNav={setMobileNav}
      />

      {noResult ? <NoSearchResult /> : <Card filterData={filterData} />}
      <MobileNavbar
        mobileNav={mobileNav}
        setMobileNav={setMobileNav}
        setFilteredData={setFilteredData}
        userData={userData}
        setNoResult={setNoResult}
      />
    </>
  );
}

export default App;
