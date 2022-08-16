import { BsFillCaretDownFill } from "react-icons/bs";


export default ({
    onClick,
    normal,
    achived
}) => 
    <span onClick={onClick} className="normal-values rounded-lg rounded-t-none px-2 py-0 " >
        <b className={`text-xs backdrop: ${(achived >= normal && achived != 0) ? 'positive' : (achived < normal) ? 'negative' : '' }`}>
            {achived}
        </b> 
        <b className="text-xs font-normal">
            / {normal}
        </b>
        <BsFillCaretDownFill className="inline-flex fill-white text-[12px] ml-1" />
    </span>
