const Button = ({
    handle,
    text,
    width = "w-full",
    height = "h-[41px]",
    bg = "bg-white",
    color = "text-white",
    border = "border-2",
    css
}) => {
    return (
        <button
            type="button"
            onClick={handle}
            className={`flex items-center justify-center text-[18px] font-megat font-extrabold rounded-full ${color} ${border} transition-all ${bg} ${height} ${width} ${css}`}
        >
            {text}
        </button>
    )
}

export default Button;