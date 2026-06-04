import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";

const FetchAPI = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const APIdata = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!APIdata.ok) {
        throw Error("failed to fetch data !!!");
      }
      const data = await APIdata.json();
      setUsers(data);
      toast.success("users loaded successfully ... ");
    } catch (error) {
      toast.error("users not loaded, try again later...!!!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <section>
      <article className="flex flex-col items-center gap-5 m-auto p-10">
        <h1 className="text-3xl font-bold underline">Users List</h1>

        <div className="flex gap-20">
          <section className="relative">
            <input
              type="text"
              placeholder="Search User here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 bg-white rounded-md px-3 py-1 outline-none"
            />
            <span className="absolute right-2 top-2 cursor-pointer">
              <FaSearch />
            </span>
          </section>
          <button
            onClick={fetchAPI}
            className="bg-green-400 px-2 py-1 rounded-md text-white font-bold cursor-pointer hover:scale-101 transition-all"
          >
            Refresh
          </button>
        </div>
        {loading ? (
          <h1 className="text-4xl font-bold text-[crimson] mt-10">
            Loading.......
          </h1>
        ) : search === "" ? (
          <section className="grid grid-cols-5 gap-5 justify-center mt-8">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white shadow-[1px_1px_8px] p-3 py-10 rounded-md flex flex-col gap-3"
              >
                <h1>
                  Name : <span className="font-bold">{user.name}</span>
                </h1>

                <p>Email : {user.email}</p>
                <p>Phone : {user.phone}</p>
              </div>
            ))}
          </section>
        ) : (
          <section className="mt-8">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="bg-white shadow-[1px_1px_8px] px-10 py-5 rounded-md flex flex-col gap-3"
              >
                <h1 className="font-bold text-2xl text-center mb-3">
                  {user.name}
                </h1>

                <p>Email : {user.email}</p>
                <p>Phone : {user.phone}</p>
                <p>Website : {user.website}</p>
                <p>Company Name : {user.company.name}</p>
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="bg-green-700 text-white font-bold px-3 py-1 rounded-md hover:scale-101 transition-all hover:bg-green-600 mt-2"
                  >
                    Back To Users List
                  </button>
                )}
              </div>
            ))}
          </section>
        )}
      </article>
    </section>
  );
};

export default FetchAPI;
