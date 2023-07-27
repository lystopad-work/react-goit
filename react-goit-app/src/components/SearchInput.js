import './SearcInput.css'
export const SearchInput = ({handleChange, value, type, placeholder}) => {
    return (
        <>
            <input className="c-checkbox" type="checkbox" id="checkbox" />
                <div className="c-formContainer">
                        <input className="c-form__input"
                               type={type}
                               value={value}
                               onChange={handleChange}
                               placeholder={placeholder}
                               pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                               required
                        />
                </div>
            </>
    )
}