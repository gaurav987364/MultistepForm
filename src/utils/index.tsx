import Info from "../components/Data/Info";
import Experince from "../components/Data/Experince";
import Education from "../components/Data/Education";
import Skills from "../components/Data/Skills";
import Summary from "../components/Data/Summary";

export const CONFIG_FILE = [
    {
        name:"Information",
        Component:()=> <Info/>,
    },
    {
        name:"Experience",
        Component:()=> <Experince/>
    },
    {
        name:"Education",
        Component:()=> <Education/>
    },
    {
        name:"Skills",
        Component:()=> <Skills/>
    },
    {
        name:"Summary",
        Component:()=> <Summary/>
    }
];