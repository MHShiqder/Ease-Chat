import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
  accountType: string;
};
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#f9f6ef]">
      <div className="w-[400px] rounded-xl bg-white p-8 shadow-lg">
        <h2 className="text-center text-2xl font-semibold text-[#1f3a93]">
          Welcome Back
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500">
          Enter Your Email And Password To Sign In To Your Account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-[#1f3a93] focus:outline-none"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: true })}
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-[#1f3a93] focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Account Type */}
          <input
            type="text"
            placeholder="Account Type"
            {...register("accountType", { required: true })}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-[#1f3a93] focus:outline-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-[#1f3a93] py-2 text-sm font-medium text-white hover:bg-[#162b70] transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}