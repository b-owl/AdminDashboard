import { FaInstagram, FaGithub, FaTelegram } from "react-icons/fa"
import { useStateContext } from "../contexts/ContextProvider"
const Footer = () => {
    const { currentColor } = useStateContext()
    return (
        <div>
            <h1 className="font-semibold text-center text-2xl dark:text-white mt-4">Get in Touch</h1>
            <div className='flex gap-4 justify-center items-center p-5 w-full'>
                <div>
                    <a target="_blank" href="https://www.instagram.com/mehdi0_0keramati" style={{ color: currentColor }} className="text-3xl"><FaInstagram /></a>
                </div>
                <div>
                    <a target="_blank" href="https://github.com/0mehdikeramati1" style={{ color: currentColor }} className="text-3xl"><FaGithub /></a>
                </div>
                <div>
                    <a target="_blank" href="https://t.me/eefaor" style={{ color: currentColor }} className="text-3xl"><FaTelegram /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer