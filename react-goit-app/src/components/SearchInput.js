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
                               required
                        />
                </div>
            </>
    )
}