import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color:#afb2b552;
    
.container{
 
    padding-right: 15px;
    padding-left: 15px;
    color: #6c757d;
}
.row{
    display: flex;
    flex-wrap: wrap;
    padding-left:40px;
    padding-right:40px;
    margin-left: 15px;
    margin-right: 15px;
  
}
.col-1-3{
    width:33.3%;
    padding-left: 50px;
    border-right:2px solid  #0000003b;
    padding-top:30px;
    margin-top:30px;
}   
.end-child{
    border:none;
}

h4{
    text-transform: uppercase;
    color:#ef7998;
    margin-bottom:10px;
}

.info{
    margin-bottom:20px;
} 

.work-hour span{
    text-transform: uppercase;
    color:#ef7998;
    margin-bottom:10px
}  
.additionally-info a{
    text-transform: uppercase;
    color: #6c757d;
    display:block;
    margin-bottom:5px;
    :hover{
        color: #2e3338;
        transition: all 0.5s ease-in-out;
    }
}


.contact{
    ul{
        margin-left:10px;
    }
  

  h4{
    text-transform: uppercase;
    color: #6c757d;
    font-size:20px;

  }


li{
    display:inline-block;
    
    a{
        margin-right:10px;
    }
}

.icon{
    color:#6c757d;
    font-weight: 900;
    font-size:25px;
    :hover {
        transform: scale(1.5);
    }
}

}
small {
    display: block;
    text-align: center;
    margin-top:10px;
    }
`