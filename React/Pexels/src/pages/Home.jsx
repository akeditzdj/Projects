import { useState } from "react";
import Header from "../components/Header";
import ImageList from "../components/ImageList";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("nature");

  return (
    <div>
      <Header onSearchChange={setSearchTerm} />
      <ImageList searchTerm={searchTerm} />
    </div>
  );
};

export default Home;
