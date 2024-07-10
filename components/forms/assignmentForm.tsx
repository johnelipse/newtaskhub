"use client";

import { createAssignment } from "@/actions/assignments";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import { AssignmentProps } from "@/types/type";
import { Assignment } from "@prisma/client";
import { Loader } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function AssignmentForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AssignmentProps>();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("/placeholder.svg");
  const router = useRouter();



  async function submitData(data: AssignmentProps) {
    setLoading(true);
    const slug = data.title.trim().split(" ").join("-").toLowerCase();
    data.slug = slug;
    data.imageUrl = imageUrl;
    

    console.log(data);

    try {
      const res = await createAssignment(data);
      if (res.success) {
        setLoading(false);
        reset();
        router.push("/");
        toast.success("Assignment created successfully.");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <div className="max-w-sm mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-white dark:border-gray-700">
      <form className="space-y-2" onSubmit={handleSubmit(submitData)}>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium leading-6 text-gray-900 dark:text-black"
          >
            Assignment Title
          </label>
          <div className="mt-2">
            <input
              id="title"
              type="text"
              {...register("title", { required: true })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.title && (
              <span className="text-red-500">Title is required</span>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="link"
            className="block text-sm font-medium leading-6 text-gray-900 dark:text-black"
          >
            Assignment Link
          </label>
          <div className="mt-2">
            <input
              id="link"
              type="text"
              {...register("link")}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-gray-900 dark:text-black"
            >
              Assignment Description
            </label>
          </div>
          <div className="mt-2">
            <textarea
              id="description"
              rows={3}
              {...register("description", { required: true })}
              className="resize block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
            {errors.description && (
              <span className="text-red-500">Description is required</span>
            )}
          </div>
        </div>
        <div className="">
          <Image
            src={imageUrl}
            alt=""
            width={300}
            height={300}
            className="w-full h-28 object-cover mb-4"
          />
          <UploadButton
            endpoint="assignmentImage"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files:", res);
              setImageUrl(res[0].url);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
        <div>
          {loading ? (
            <button
              disabled
              type="button"
              className="mt-3 flex w-full items-center justify-center rounded-md bg-indigo-600/50 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-not-allowed"
            >
              <Loader className="animate-spin w-4 h-4 mr-2" />
              <span>Loading please ...</span>
            </button>
          ) : (
            <button
              type="submit"
              className="mt-3 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Assignment
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
