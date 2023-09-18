import { useEffect, useState } from "react"

const GenderOptions = ({ title, genderFunc }) => {
    const [gender, setGender] = useState(null);
    gender
    console.log({ title: title.title, gender });
    return (
        <>
            <div className="gender">
                <span className="gender-label">{title.title}</span>
                <div className="gender-options">
                    <input onClick={(event) => setGender(event.target.value)} type="button" value='М' />
                    <input onClick={(event) => setGender(event.target.value)} type="button" value='Ж' />
                </div>
            </div>
        </>
    )
}
export default GenderOptions;