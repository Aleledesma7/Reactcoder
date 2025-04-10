import darkIcon from '../assets/icons/dark-mode.svg'
import lightIcon from '../assets/icons/light-mode.svg'
import homeIcon from '../assets/icons/home.svg'
import CartWidget from './CartWidget'

export default function NavBar({ title, currentTheme, onChangeTheme }) {
    const classNameInvert = `w-10 h-10 ${currentTheme === "dark" ? "invert" : ""}`
    return (
        <div className="bg-base-100 flex items-center justify-between px-4 area-header border-b-2 border-b-base-300 shadow-md">
            <div className="text-2xl font-bold">{title}</div>
            <div className="flex items-center space-x-4">
                <button className={'btn btn-circle p-2'}>
                    <img src={homeIcon} alt="Home" className={classNameInvert} />
                </button>
                <CartWidget badgeAmount={5} theme={currentTheme} />
                <button className={'btn btn-circle p-2'} onClick={onChangeTheme}>
                    {
                        currentTheme === "dark" ?
                            <img src={lightIcon} alt="Light Mode" className={classNameInvert} /> :
                            <img src={darkIcon} alt="Dark Mode" className={classNameInvert} />
                    }
                </button>
            </div>
        </div>
    )
}