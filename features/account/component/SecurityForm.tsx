"use client"

export default function SecurityForm(){

  return(

    <div className="bg-white  rounded-xl p-6">

      <h2 className="font-semibold mb-1">
        Password
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        Update your password to keep your account secure
      </p>


      <div className="space-y-4">
        <label htmlFor="">Current Password</label>
        <input
        type="password"
        placeholder=" Password"
        className="w-full border rounded p-2"
        />
        <label htmlFor="">New Password</label>
        <input
        type="password"
        placeholder=" Password@123 "
        className="w-full border rounded p-2"
        />
        <label htmlFor="">Confirm New Password</label>
        <input
        type="password"
        placeholder=" Password@123 "
        className="w-full border rounded p-2"
        />

      </div>


      <div className="flex justify-end mt-6">

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Update Password
        </button>

      </div>

    </div>

  )

}