import { useEffect, useState } from "react"

const GenderOptions = ({ title, id, genderFunc }) => {
    const [current, setCurrent] = useState(null)
    function foo(gender, index) {
        console.log(gender);
        genderFunc(id, title, gender)
        setCurrent(index)
    }
    return (
        <>
            <div className="gender">
                <span className="gender-label">{title.title}</span>
                <div className="gender-options">
                    {
                        ["М", "Ж"].map((item, index) => <input className={index === current ? 'border' : ''} onClick={(event) => foo(event.target.value, index)} type="button" value={item} />)
                    }
                </div>
            </div>
        </>
    )
}
export default GenderOptions;