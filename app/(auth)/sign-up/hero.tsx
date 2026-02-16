// "use client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useRouter } from "next/navigation";

// export default function page() {
//   const router = useRouter();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     router.push("/otp-verification");
//   };

//   return (
//     <div>
//       <div className="flex flex-col gap-8 px-4 w-full md:max-w-md mx-auto mt-20">
//         <h1 className="text-center text-4xl font-bold ">Sign-Up</h1>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <div>
//             <label htmlFor="username">Username/Email</label>
//             <Input
//               type="text"
//               placeholder="username"
//               className="rounded-sm"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <Input
//               type="password"
//               placeholder="password"
//               className="rounded-sm"
//               required
//             />
//           </div>
//           <Button type="submit" className="md:self-center">
//             Sign Up
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }
