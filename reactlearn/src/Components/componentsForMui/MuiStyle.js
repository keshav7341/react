import { Button } from "@mui/material"


const MuiStyle=()=>{
    return (
        <>
        <div>MuiStyle</div>
        <Button variant="text" style={{
            backgroundClip:"red",
            "background-color":"yellow"

        }}>Text</Button>
        <br />
        <Button variant="contained">Contained</Button>
        <br />
        <Button variant="outlined">Outlined</Button>
</>
    )
}

export default MuiStyle