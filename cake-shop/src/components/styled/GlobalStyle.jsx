import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
* {
    box-sizing:border-box ;
    margin:0;
    padding:0;
  }

body{
    font-family: "Kaushan Script", cursive;
    color:black;
}

a {
    text-decoration: none;
}
a:hover {
    text-decoration: none;
}
button{
    font-family: "Kaushan Script", cursive;
}
li{
    text-decoration: none;
    list-style:none;
}
.blur {
    filter: blur(4px)
}
`