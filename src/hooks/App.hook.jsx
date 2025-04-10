import { useEffect, useState } from "react"

export default function useApp() {
    const [theme, setTheme] = useState("light")

    const onChangeTheme = () => {
        setTheme((prev) => prev === "dark" ? "light" : "dark")
    }

    return {
        theme,
        onChangeTheme
    }
}