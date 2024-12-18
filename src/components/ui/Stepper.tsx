/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef, useState } from "react";
import { CONFIG_FILE } from "../../utils";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Stepper = () => {
    const [currentStep,setCurrentStep] = useState<number>(1);
    const [isComplete,setIsComplete] = useState<boolean>(false);
    const stepRef = useRef<HTMLDivElement[]>([]);
    const [progressBarStyle,setProgressBarStyle] = useState({
        left:0,
        width:0
    });
    const ActiveComponent = CONFIG_FILE[currentStep - 1]?.Component;


    const handelNext = ()=>{
        setCurrentStep((prev)=>{
            if(prev === CONFIG_FILE.length){
                setIsComplete(true);
                return prev;
            } else {
                return prev + 1;
            }
        })
    };
    const handelPrev = ()=>{
        setCurrentStep((prev)=>{
            if(prev === 1){
                return prev;
            } 
            setIsComplete(false);
            return prev - 1;
        })
    };

    const updateProgressBar = ()=>{
        if(stepRef.current.length === CONFIG_FILE.length){
            const firstStep = stepRef.current[0];
            const lastStep = stepRef.current[CONFIG_FILE.length - 1];

            if(firstStep && lastStep){
                const left = firstStep.offsetLeft + firstStep.offsetWidth /2;
                const right = lastStep.offsetLeft + lastStep.offsetWidth / 2;
                const width = right - left;

                setProgressBarStyle({left,width});
            }
        }
    };

    useEffect(()=>{
        updateProgressBar();
    },[]);

    useEffect(()=>{
        const handelResize = ()=>updateProgressBar();
        window.addEventListener("resize",handelResize);

        return ()=>{
            window.removeEventListener("resize",handelResize);
        };
    },[stepRef.current,CONFIG_FILE.length]);

    const progressbarPercentWidth = ()=>{
        return ((currentStep -1) / (CONFIG_FILE.length - 1))*100;
    } 
  return (
    <div className="relative mx-auto w-[65rem] max-lg:w-[38rem] max-md:w-[26] max-sm:w-[20rem] max-sm:mx-auto h-auto bg-neutral-700/40 p-3 max-sm:p-2 rounded">
        {/* render-steps-&-name */}
        <div className=" flex justify-around">
            {CONFIG_FILE?.map((item,index)=>{
                const isActive = currentStep === index + 1;
                const isCompleted = currentStep > index + 1 || isComplete;
                return (
                    <div ref={(iRef)=>{
                        //@ts-ignore
                        stepRef.current[index] = iRef
                    }} className="" key={index}>
                        <div className=" flex flex-col items-center gap-y-1">
                            <p className={`px-2.5 z-10 py-0.5 max-sm:px-3  bg-gray-300 text-black rounded-full font-bold text-lg 
                                ${isActive && "bg-blue-500"}
                                ${isCompleted && "bg-green-500"}
                            `}
                            >
                                    {index + 1}
                            </p>
                            <span className={`text-sm font-medium max-sm:text-xs ${isCompleted ? "text-green-500" : isActive ? "text-blue-500" : ""}`}>{item.name}</span>
                        </div>
                    </div>
                )
            })}
        </div>
        {/* progress-bar */}
        <div 
        className={`absolute top-[25px] bg-gray-500/40  h-[5px] ml-2`}
        style={{
            left:`${progressBarStyle.left}px`,
            width:`${progressBarStyle.width}px`,
            position:"absolute"
        }}
        >
            <div className=" h-full bg-green-500" style={{width:`${progressbarPercentWidth()}%`}}></div>
        </div>
        {/* Next-prev-buttons */}
        <div className=" mt-5 w-full flex justify-between px-[4rem]">
            <button onClick={handelPrev} disabled={currentStep === 1} className={`px-4 py-1 bg-blue-600/60 rounded flex items-center hover:bg-blue-500/80 ${
                    currentStep === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
            >
            <FaAngleLeft size={18} className="mt-0.5"/>Prev. 
          </button>
            <button onClick={handelNext} disabled={isComplete} className={`px-4 py-1 bg-blue-600/60 rounded flex items-center hover:bg-blue-500/80 ${
                isComplete
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            Next <FaAngleRight size={18} className="mt-0.5"/>
          </button>
        </div>
        <main className=" w-full mt-5 overflow-y-scroll no-scrollbar">
          <div>{ActiveComponent && <ActiveComponent />}</div>
        </main>
    </div>
  )
}

export default Stepper;