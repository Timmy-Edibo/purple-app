import { useState, useEffect } from "react";
import { io } from "socket.io-client";

function App() {
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    console.log("username", username);
    fetch("http://localhost:8080/api/v1/auth/me");
  };


  useEffect(() => {
    const ws = new io("ws://localhost:8080", {
      autoConnect: false,
      withCredentials: true,
    });
    
    ws.connect();
    ws.on("connect_error", (error) => {
      console.error("WebSocket error:", error);
    });

    // Cleanup function to close the WebSocket connection when the component unmounts
    return () => {
      ws.off("connect_error", (error) => {
        console.error("WebSocket error:", error);
      });
    };
  }, []);

  return (
    <div className="App">
      <div className=" bg-gradient-to-r from-sky-500 to-indigo-500 px-10">
        <div className="flex flex-row justify-center items-center text-center text-white h-12 w-full  text-xl font-bold">
          <div className="flex ml-auto ">
            <ul className="flex gap-x-6 p-4">
              <li className="hover:border hover:rounded p-2">Home</li>
              <li className="hover:border hover:rounded p-2">Content</li>
              <li className="hover:border hover:rounded p-2">About</li>
              <li className="hover:border hover:rounded p-2">Sign Out</li>
            </ul>
          </div>
        </div>

        <div className="flex  pt-10 min-h-screen text-center  text-white ">
          <div className="grid grid-cols-1 w-1/2">
            <div className="flex justify-center items-center    text-6xl font-bold">
              <h1>Learning DevOps with Uncle Mike, Using Jenkins </h1>
            </div>

            <div className="flex ">
              <form className="gap-x-2 ">
                <input
                  className="h-10  mx-2 rounded-xl text-black px-2"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
                <button
                  type="submit"
                  className=" h-10 bg-black px-4 rounded-xl"
                  onClick={() => handleSubmit()}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-1  justify-center items-center  text-start">
            <div>
              <h3 className="text-3xl font-bold pb-10">
                List of thing to do:{" "}
              </h3>
              <li>Write our react application</li>
              <li>Push to github</li>
              <li>Pull code to ubuntu server</li>
              <li>Deploy react application</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
