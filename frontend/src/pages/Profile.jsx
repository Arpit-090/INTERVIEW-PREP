import React, { useEffect, useState } from "react";
import { API_PATHS } from "../utils/apiPaths";
import axios from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [userData, setUserData] = useState({});
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();

  // Fetch Profile
  const fetchProfile = async () => {
    try {
      const res = await axios.post(API_PATHS.AUTH.GET_PROFILE);
      setUserData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch Sessions
  const fetchSessions = async () => {
    try {
      const res = await axios.get(API_PATHS.SESSION.GET_ALL);
      setSessions(res.data.sessions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
    fetchSessions();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      
      {/* 🔹 User Info */}
      <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>

        <p className="text-lg">
          <span className="font-semibold">Username:</span> {userData.name}
        </p>

        <p className="text-lg">
          <span className="font-semibold">Email:</span> {userData.email}
        </p>
      </div>

      {/* 🔹 Sessions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Sessions</h2>

        {sessions.length === 0 ? (
          <p className="text-gray-500">No sessions found 😕</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sessions.map((s) => (
              <div
                key={s._id}
                onClick={() => navigate(`/interview/${s._id}`)}
                className="bg-white p-5 rounded-2xl shadow-sm border hover:shadow-md hover:scale-[1.02] transition cursor-pointer"
              >
                <h2 className="font-semibold text-lg mb-2">{s.role}</h2>
                <p className="text-gray-500 text-sm">
                  {s.experience} experience
                </p>
                <div className="mt-4 text-xs text-gray-400">
                  Click to open →
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;