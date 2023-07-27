export const SearchInput = ({handleChange, className, value, type, placeholder}) => {
    return (
        <input type={type} className={className} value={value} onChange={handleChange} placeholder={placeholder}/>
    )
}