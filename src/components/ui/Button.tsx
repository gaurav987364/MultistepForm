interface BtnProps {
    name: string;
    purpose: string;
    type: "submit" | "reset" | "button";
    onClick?: () => void;
}

const Button = ({name,onClick,purpose,type}:BtnProps) => {
  return (
    <button 
         className={`${purpose === "save" ? "bg-purple-500 text-white font-semibold px-4 rounded py-1 shadow-md shadow-gray-400 hover:bg-purple-400 transition-opacity" : "text-purple-500 border border-purple-500 font-semibold px-4 rounded py-1 shadow-md shadow-gray-400 hover:bg-purple-400/20 transition-opacity"} cursor-pointer`} 
         onClick={onClick}
         type={type}
    >
        {name}
    </button>
  )
}

export default Button;