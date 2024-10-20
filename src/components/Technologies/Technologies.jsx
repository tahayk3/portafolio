import { TbBrandDjango } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { SiPostgresql } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { SiBlender } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { SiRailway } from "react-icons/si";

import "./Technologies.css";

const icons = [
    {name: "Django", icono: TbBrandDjango, color: "green"},
    {name: "React", icono: FaReact, color: "#15c1f0" },
    {name: "Firebase", icono: IoLogoFirebase, color: "orange"},
    {name: "Emailjs", icono: MdOutlineMarkEmailUnread, color: "orange"},
    {name: "Postgresql", icono: SiPostgresql, color: "#15c1f0"},
    {name: "Supabase", icono: RiSupabaseFill, color: "green"},
    {name: "Blender", icono: SiBlender, color: "orange"},
    {name: "Axios", icono: SiAxios, color: "#000"},
    {name: "Jsonwebtokens", icono: SiJsonwebtokens, color: "#fff"},
    {name: "Railway", icono: SiRailway, color: "#fff"},
];

const Technologies = ({ items }) => {
    return (
        <ul> 
            {
                items.map((item, index) => {
                    // Busca el icono en el array
                    const { icono: Icon, color } = icons.find(icon => icon.name === item) || {};
                    
                    return (
                        <li key={index}>
                            {Icon ? (
                                <Icon style={{ fontSize: '3rem', color }} /> // Aplica el color
                            ) : (
                                item
                            )}
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default Technologies;