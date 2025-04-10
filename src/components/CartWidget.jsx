import cartIcon from '../assets/icons/cart.svg';

export default function CartWidget({ badgeAmount, theme }) {
    return (
        <button className='btn btn-circle p-2 relative'>
            <img src={cartIcon} alt="Cart" className={`w-10 h-10 ${theme === "dark" ? "invert" : ""}`} />
            <span className="badge badge-secondary badge-sm absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">{badgeAmount}</span>
        </button>
    )
}