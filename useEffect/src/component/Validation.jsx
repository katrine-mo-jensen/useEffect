import { useEffect, useState } from "react"

export const Validation = () => {

    // State til at gemme vores form values
    const [nameValue, setNameValue] = useState("")
    
    // State til at sætte boolean condition
    const [isNameValid, setIsNameValid] = useState(false)

    // useEffect til at måle på nameValue og sætte boolean true false
    // alt efter om nameValues længde er større end 4
    useEffect(() => {
        if (nameValue.length > 4 || nameValue.length === 0){
            setIsNameValid(true)
        }
        else {
            setIsNameValid(false)
        }
    },[nameValue])

    // Returner html med input feltet og dynamisk vis fejlbesked
    return (
        <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input onChange={(event) => {setNameValue(event.target.value)}} value={nameValue} name="name" placeholder="Enter name please" />
                <span style={isNameValid === true ? {color: "green"} : {color: "red"}}>
                    {isNameValid === true ? '' : 'Dit navn er for kort'}
                </span>
            </div>
        </form>
    )
}