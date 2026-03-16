"use client"

import { useForm } from "react-hook-form"
import { AccountFormData, accountSchema } from "../types/account.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { getAccount, updateAccount } from "../services/account.service"

export default function AccountForm(){

    const{
        register,
        handleSubmit,
        setValue,
        formState:{errors}
    }=useForm<AccountFormData>({
        resolver:zodResolver(accountSchema)
    })
    
    useEffect(()=>{
        async function  load() {

            const data = await getAccount()
            setValue("name",data.name)
            setValue("email",data.email)
            setValue("signature",data.signature)

        }
        load()
    },[setValue])

    async function onSubmit(data:AccountFormData) {
        try {
            await updateAccount(data)
            alert("account updated ")
        } catch (error) {
            console.error(error)
        }
    }
  return(

    <form onSubmit={handleSubmit(onSubmit)} className="bg-white  rounded-xl p-5">

      <h2 className="font-semibold mb-1">
        Personal Information
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        Update your personal details and contact information
      </p>


      {/* Avatar */}
      <div className="flex items-center gap-4 mb-6">

        <div className="w-14 h-14 rounded-full bg-blue-200"/>

        <button className="border px-3 py-1 rounded text-sm">
          Upload Photo
        </button>

      </div>


      {/* Inputs */}
      <div className="grid grid-cols-2 gap-4 mb-4">

        <div>
          <label className="text-sm">Full Name</label>

          <input
          {...register("name")}
          className="w-full border rounded p-2 mt-1"
          />
          {errors.name&&(
            <p className="text-red-500-xs">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm">Email Address</label>

          <input
         {...register("email")}
          className="w-full border rounded p-2 mt-1"
          />
           {errors.email&&(
            <p className="text-red-500-xs">{errors.email.message}</p>
          )}
        </div>

      </div>


      {/* Signature */}
      <div className="mb-6">

        <label className="text-sm">
          Email Signature
        </label>

        <textarea
        rows={5}
        {...register("signature")}
        className="w-full border rounded p-2 mt-1"
        />

      </div>


      {/* Save Button */}
      <div className="flex justify-end">

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Changes
        </button>

      </div>

    </form>

  )

}