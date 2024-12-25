import Info from "../components/Data/Info";
import Experince from "../components/Data/Experince";
import Education from "../components/Data/Education";
import Skills from "../components/Data/Skills";
import Summary from "../components/Data/Summary";

export interface Props {
    next: () => void;
    prev: () => void;
}
export const CONFIG_FILE = [
    {
        name:"Information",
        Component:({next,prev}:Props)=> <Info next={next} prev={prev}/>,
    },
    {
        name:"Experience",
        Component:({next,prev}:Props)=> <Experince/>
    },
    {
        name:"Education",
        Component:({next,prev}:Props)=> <Education/>
    },
    {
        name:"Skills",
        Component:({next,prev}:Props)=> <Skills/>
    },
    {
        name:"Summary",
        Component:({next,prev}:Props)=> <Summary/>
    }
];