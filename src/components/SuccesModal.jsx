// components/SuccessModal.jsx
import { AnimatePresence, motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const SuccessModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-black/50 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0c1c36] text-[#f9faf4] p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiCheckCircle className="text-[#f9faf4]/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-[#f9faf4] w-16 h-16 mb-2 rounded-full text-3xl text-[#0c1c36] grid place-items-center mx-auto">
                <FiCheckCircle />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Message Sent!
              </h3>
              <p className="text-center mb-6">
                Thank you for contacting us. We will get back to you soon.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-[#f9faf4] hover:bg-[#f9faf4]/90 transition-colors text-[#0c1c36] font-semibold w-full py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
