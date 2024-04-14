import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Success() {
  const router = useRouter();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute w-full h-screen flex items-center justify-center"
    >
      <div className=" bg-white rounded-lg w-1/2 font-latoRegular text-gray-700 p-16">
        <h1 className="text-3xl pb-4 font-latoBold">
          Thanks for the email {router.query.name} ✨
        </h1>
        <p className="text-lg text-gray-500">
          We have sent you an email over at {router.query.email}. We will get
          back to yuo as soon as we can.
        </p>
      </div>
    </motion.main>
  );
}
