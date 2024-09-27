import React, { useEffect, useState } from 'react'


function Github() {
    const [gitdata, setGitData] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('https://www.instagram.com/users/ankitjangid__001');
            const data = await response.json();
            // const { avatar_url, bio, followers, location, name } = data;
            // setGitData({ avatar_url, bio, followers, location, name });
            console.log(data)
        };

        fetchData();

    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
           
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm text-center">
                    {/* Display the avatar */}
                    <img
                        src={gitdata.avatar_url}
                        alt={`${gitdata.name}'s avatar`}
                        className="w-32 h-32 mx-auto rounded-full"
                    />

                    {/* Display the name */}
                    <h1 className="mt-4 text-2xl font-bold text-gray-800">{gitdata.name}</h1>

                    {/* Display the bio */}
                    <p className="mt-2 text-gray-600">{gitdata.bio}</p>

                    {/* Display the location */}

                    <p className="mt-2 text-gray-600">
                        <strong>Location:</strong> {gitdata.location}
                    </p>


                    {/* Display the followers */}
                    <p className="mt-2 text-gray-600">
                        <strong>Followers:</strong> {gitdata.followers}
                    </p>
                </div>
          

        </div>
    );
}

export default Github

