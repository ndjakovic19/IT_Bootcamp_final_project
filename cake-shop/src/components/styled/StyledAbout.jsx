import styled from "styled-components";


export const StyledAbout = styled.section`
    padding-top: 50px;
    padding-bottom :50px;

    @media (max-width: 768px){
        padding-bottom :20px;
    }   
    @media (max-width: 576px){
            padding-top:15px;;
    }

    .container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        @media (max-width: 576px){
            min-height:1px;
        }
        @media (max-width: 425px){
            padding:0;
        }
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        padding-left:40px;
        margin-left: 15px;
        margin-right: 15px;
        @media (max-width: 1024px){
            margin-right: 170px;
        }
        @media (max-width: 768px){
            padding:0;
            margin-right: 15px;
        }
        @media (max-width: 425px){
            margin:0;
        }
    }

    .container-about{
        flex: 0 0 50%;
        max-width: 50%;
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        padding-left:50px; 
        margin-bottom: 3rem;
        margin-top: 20px;

        @media (max-width: 992px){
            margin-top:0px;
        }
        @media (max-width: 576px){
            max-width: 50%;
            padding:0;
            margin: 0 auto;
            padding-left:50px;
        }
        @media (max-width: 425px){
            width:100%;
            padding:0;
        }
        

        h1{
            font-size:50px;
            text-align:left;
            margin-bottom:20px;

        @media (max-width: 768px){
            font-size:40px;
            margin-bottom:5px;
        }
        @media (max-width: 425px){
            font-size:30px;  
            text-align:center;
        }
    }
        
    span{
        color:#ef7998;
        }

    p{
        color: #6c757d;
        width:75%;
        margin-bottom:20px;

        @media (max-width: 768px){
            margin-bottom:5px;
            width:90%;
        }
        @media (max-width: 576px){
          
            margin-bottom:5px;
            font-size:14px;
        }
        @media (max-width: 425px){
            width:100%;
          
        }
    }

    button{
        text-transform: uppercase;
        background-color: transparent;
        text-align: center;
        padding:5px;
        font-size: 15px;
        line-height: 1.5;
        border-radius:5px;
        transition: all 0.5s ease-in-out;

        @media (max-width: 768px){
            font-size:12px;
            padding:3px;
        }

        @media (max-width: 425px){
            display:block;
            margin:0 auto;
        }

        :hover{
            background-color:black;
            color:#ef7998;
        }
        :focus{
            box-shadow: 0 0 0 0.2rem rgb(108 117 125 / 50%);
            outline: 0;
        }
    }
}
  
    .google-map-holder{
        width:50%;
        position: relative;
        @media (max-width: 576px){
            padding-top:15px;
        }
        @media (max-width: 425px){
            width:100%;
            padding-left:60px;
        }
        @media (max-width: 375px){
            width:100%;
            padding-left:38px; 
        }
        @media (max-width: 360px){
            width:100%;
            padding-left:30px; 
        }
        
    
        :before {
            content: "";
            position: absolute;
            top: -1.5rem;
            left: -1.7rem;
            width: 576px;
            height: 388px;
            outline: 7px solid #9e9e9e94;
            z-index: -1;
            transition: all 1s ease-in-out;

         
            @media (max-width: 1280px){
                width: 450px;
                height: 338px; 
            }
            @media (max-width: 1200px){
                width: 450px;
                height: 338px; 
            }
            @media (max-width: 992px){
                width: 350px;
                height: 300px; 
            }
            @media (max-width: 768px){
                width: 300px;
                height: 250px;
                top:-1rem;
                left:-1.2rem;
            }
            @media (max-width: 576px){
                display:none;
            }
        }

        :hover:before {
            top: 0;
            left: 0;
        }
    
}
    .google-map{
        border:none;
          
        @media (max-width: 1280px){
            width: 450px;
            height: 338px; 
        }
        @media (max-width: 1200px){
            width: 450px;
            height: 338px; 
        }
        @media (max-width: 992px){
            width: 350px;
            height: 300px; 
        }
        @media (max-width: 768px){
            width: 300px;
            height: 250px;
        }
        @media (max-width: 576px){
            width: 210px;
            height: 210px;
            border: 2px solid #00000036;
        }

        @media (max-width: 425px){
            width: 300px;
            height: 250px;
            border: 2px solid #00000036;
        }
        
     
    }

    
`