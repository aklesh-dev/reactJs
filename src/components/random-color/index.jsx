import { useEffect, useState } from "react"



export default function RandomColor() {
    // Initialize state for the type of color (hex or rgb) and value.
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState('#000000');
    // This function generates a random number between 0 and the given length.
    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    };
    // This function generates a random hexadecimal color code.
    function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        // console.log(hexColor)
        // Set the color state to the generated hex color.
        setColor(hexColor);
    }
    // This function generates a random RGB color code.
    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r}, ${g}, ${b})`);
    }
    // When the component mounts, generate a new random color.
    useEffect(()=>{
        if(typeOfColor === 'hex') handleCreateRandomHexColor();
        else handleCreateRandomRgbColor();
    }, [typeOfColor]);
    

    return <div style={{
        width: "100vw",
        height: "100vh",
        background: `${color}`,
        
    }}>
        <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
        <div style={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '3.6rem',
                marginTop: '10px',
                flexDirection: 'column',
                // gap: '5px',
            }
        }>
            <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
            <h1>{color}</h1>
        </div>
    </div>
}