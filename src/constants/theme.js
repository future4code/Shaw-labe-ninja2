import { createTheme } from "@mui/system"
import {COLORS} from './colorpalette'
import "@fontsource/poppins"
import "@fontsource/playfair-display"


const theme = createTheme ({
    palette: {
        primary:{
            main:`${COLORS.primary}`,
            contrastText:`${COLORS.fontPrimary}`
        },
        secondary: {
            main:`${COLORS.secondary}`,
            contrastText: `${COLORS.fontPrimary}`
        }
    },
    typography: {
        fontFamily: ['Poppins','Playfair Display'].join(','),
    },
})
export default theme