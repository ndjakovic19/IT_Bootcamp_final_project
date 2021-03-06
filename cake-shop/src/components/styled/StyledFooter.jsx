import styled from "styled-components";

export const StyledFooter = styled.footer`

background-color: #9d8189;
  
.container{
    padding-right: 15px;
    padding-left: 15px;
    color:#eee;
        @media (max-width: 576px){
            padding:0;
        }

}
.row{
 
    display: flex;
    flex-wrap: wrap;
    padding-left:40px;
    padding-right:40px;
    margin-left: 15px;
    margin-right: 15px;

    @media (max-width: 768px){
        padding:0;
    }
    @media (max-width: 576px){
        position:relative;
    }
    @media (max-width: 425px){
        margin:0;
    }
}

.col-1-3{
    width:33.3%;
    padding-left: 50px;
    border-right:2px solid  #0000003b;
    padding-top:30px;
    margin-top:30px;
    @media (max-width: 576px){
        width:50%;
     }
    @media (max-width: 425px){
        padding-left: 40px;
        padding-top:20px;
        margin-top:20px;
    }
}   
.end-child{
    border:none;
    @media (max-width: 576px){
        position:absolute;
        top:167px;
        right:25px;
    }
    @media (max-width: 375px){
        top:145px;
    }
}

h4{
    text-transform: uppercase;
    color:#eee;
    margin-bottom:10px;
    @media (max-width: 375px){
        font-size:14px
    }
}
p{
    @media (max-width: 375px){
        font-size:14px
    }
}
.info{
    margin-bottom:20px;
    @media (max-width: 425px){
        margin-bottom:15px;  
    }
} 

.work-hour span{
    text-transform: uppercase;
    color:#eee;
    margin-bottom:10px;
    @media (max-width: 375px){
        font-size:14px
    }
}  

.additionally-info{
    @media (max-width: 576px){
        border:none;
    }
    @media (max-width: 375px){
        padding-left:20px;
    }
}
.additionally-info a{
    text-transform: uppercase;
    display:block;
    margin-bottom:5px;
    color:#eee;

    :hover{
        color:#25081270;
        transition: all 0.5s ease-in-out;
    }
    @media (max-width: 375px){
        font-size:14px
    }
}


.contact{
   
    h4{
        text-transform: uppercase;
        font-size:20px;
        color:#eee;
        @media (max-width: 768px){
            font-size:16px;
        }
        @media (max-width: 576px){
            margin-left:20px;
        }
        @media (max-width: 375px){
            margin-left:5px;
            font-size:14px
        }
    }

    ul{
        margin-left:10px;

        @media (max-width: 576px){
            margin-left:20px;
        }
        @media (max-width: 375px){
            margin-left:5px;
        }
    }

    li{
        display:inline-block;
    
        a{
             margin-right:10px;

            @media (max-width: 768px){
                margin-right:5px;
            }  
            @media (max-width: 576px){
                margin-right:10px;
            }   
            @media (max-width: 425px){
                margin-right:5px;
            }   
        }
    }

    .icon{
        color:#eee;
        font-weight: 900;
        font-size:25px;

        :hover {
             transform: scale(1.5);
        }
        @media (max-width: 768px){
            font-size:20px;
        }  
         @media (max-width: 576px){
            font-size:25px;    
        }  
    }

}
small {
    display: block;
    text-align: center;
    margin-top:10px;
}
`