import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GitHub = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json()) 
      .then(data => {
        console.log("GitHub user data:", data);
        setUser(data);
      });
  }, [username]);

  if (!user) {
    return <div className="text-center mt-10 text-gray-600">Loading GitHub user...</div>;
  }

  return (
    <div className="min-h-[70vh] flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-sm w-full">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-orange-500"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{user.name}</h2>
        <p className="text-gray-600 mb-4">@{user.login}</p>
        <div className="flex justify-around text-sm text-gray-700 mt-4">
          <div>
            <p className="text-xl font-semibold">{user.followers}</p>
            <p>Followers</p>
          </div>
          <div>
            <p className="text-xl font-semibold">{user.public_repos}</p>
            <p>Repos</p>
          </div>
        </div>
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default GitHub;
