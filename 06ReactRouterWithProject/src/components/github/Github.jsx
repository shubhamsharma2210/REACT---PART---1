import { useEffect, useState } from "react";


const Github = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://api.github.com/users/shubhamsharma2210")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className=" flex justify-center text-center m-4 bg-gray-500 text-white text-3xl">
      <h1>GitHub Followers : {data.followers}</h1>
      <img src={data.avatar_url} alt="github Profile Image" />
    </div>
  );
};

export default Github;
