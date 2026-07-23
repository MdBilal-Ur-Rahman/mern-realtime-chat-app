import { useState } from "react";

import {
  FiCamera,
  FiSave,
} from "react-icons/fi";

const ProfileSection = () => {
  const [profile, setProfile] =
    useState({
      name: "Muhammad Ali",
      username: "muhammadali",
      email: "ali@gmail.com",
      bio: "Full Stack Developer",
    });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSave = () => {
    console.log(profile);
  };

  return (
    <div className="mx-auto max-w-3xl">

      {/* Heading */}

      <h1 className="text-3xl font-bold">
        Profile Settings
      </h1>

      <p className="mt-2 text-gray-400">
        Update your profile information.
      </p>

      {/* Card */}

      <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900 p-8">

        {/* Avatar */}

        <div className="flex flex-col items-center">

          <div className="relative">

            <img
              src="https://i.pravatar.cc/200"
              alt="avatar"
              className="h-32 w-32 rounded-full border-4 border-cyan-500 object-cover"
            />

            <button
              className="
                absolute
                bottom-0
                right-0

                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full
                bg-cyan-500
                text-white

                hover:bg-cyan-600
              "
            >
              <FiCamera />
            </button>

          </div>

        </div>

        {/* Form */}

        <div className="mt-10 space-y-5">
                    {/* Name */}

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-slate-700
                bg-slate-800
                px-4
                py-3
                text-white
                outline-none
                focus:border-cyan-500
              "
            />
          </div>

          {/* Username */}

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Username
            </label>

            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-slate-700
                bg-slate-800
                px-4
                py-3
                text-white
                outline-none
                focus:border-cyan-500
              "
            />
          </div>

          {/* Email */}

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-slate-700
                bg-slate-800
                px-4
                py-3
                text-white
                outline-none
                focus:border-cyan-500
              "
            />
          </div>

          {/* Bio */}

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Bio
            </label>

            <textarea
              rows={4}
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-slate-700
                bg-slate-800
                px-4
                py-3
                text-white
                outline-none
                focus:border-cyan-500
              "
            />
          </div>

          {/* Save Button */}

          <button
            onClick={handleSave}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-cyan-500
              px-6
              py-3
              font-semibold
              text-white
              transition
              hover:bg-cyan-600
            "
          >
            <FiSave size={18} />
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProfileSection;
        