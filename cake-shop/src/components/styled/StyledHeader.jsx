import styled from "styled-components";
export const StyledHeader = styled.header`

  .container {
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-bottom: 20px;
  }
  .row {
      justify-content: space-between;
      background-color: #f8f9fa;
      display: flex;
      flex-wrap: wrap;
      padding-left:40px;
      padding-right:40px;
      margin-left: 15px;
      margin-right: 15px;

      @media (max-width: 768px){
        padding:0;
        }
  
  }

  .phone-info {
      display: block;
      color: #333;
      margin-top: 10px;
      margin-bottom: 10px;
      padding-left: 50px;
      font-size: 18px;

      @media (max-width: 576px){
        font-size: 16px;
        }
  }

    
  .logout{
    margin-left:15px;
    background-color:transparent;
    border-radius: 5px;
    height: 30px;
    padding: 0 10px;
    margin-right:20px;
    @media (max-width: 768px){
        margin-right:15px;
    }
    @media (max-width: 576px){
        height: 25px;
        padding: 0 5px;
      
        }

  }

  .welcome {
    font-size: 18px;
    @media (max-width: 576px){
        font-size: 16px;
        }
  }

  .login {
      display: block;
      margin-top: 10px;
      margin-bottom: 10px;
      padding-right: 30px;  
      
  }

  .login a {
      margin-right: 10px;
      font-size: 18px;
  }


  .navbar-brand {
      display: inline-block;
      padding-top: 0.3125rem;
      padding-bottom: 0.3125rem;
      margin-right: 1rem;
      /* line-height: inherit; */
      white-space: nowrap;
      padding-left: 50px;

      @media (max-width: 768px){
        padding-left: 20px; 
        margin-right:0;
        }
  }

  .navbar-brand img {
      margin-top: 10px;
      display: block;
      max-width: 100%;
      @media (max-width: 768px){
        max-width: 80%; 
      }
  }

  .navbar {
      display: flex;
      justify-content: start;
      background-color: #fff;
      position: relative;
      align-items: center;
      padding-left: 50px;
      padding-right: 50px;

  }

  nav .nav-links {
      flex-direction: row;
      text-align: center;
      display: flex;
      margin-bottom: -25px;
      padding-left: 35px;

    @media (max-width: 768px){
        width:30%;
        display:block;
        position:fixed;
        top:-10px;
        left:-13px;
        height:135vh;
        background-color: #040403b8;
        z-index: 20;
        padding:20px;
        text-align:left;
        transform:translateX(-500px);
        transition: 0.5s ease-in-out;
        
    }   
    @media (max-width: 576px){
        width:40%;
    }
  }

.x-button{
      display:none;
      @media (max-width: 768px){
      display:block;
      color:#eee;
      font-size:30px;
      margin-left:165px;
      }
}
  .list-reset {
      margin-left: 10px;
      font-size: 30px;
      list-style: none;
  
    @media (max-width: 768px){
        border-bottom: 2px solid #eeee;

        :first-child{
    
        }
        :last-child{
            border:none;
        }
    } 
  }
  
  .list-reset a {
        @media (max-width: 768px){
            color: #eee;

        :hover {
            color:  #ef7998;
        }
        }
  }

   a {
        color: #ef7998;
        transition: all 0.5s ease-in-out;

        :hover {
            color: black;
        }
    }
  

  nav .burger{
    margin-top:13px;
    font-size:40px;
    color: #ef7998;
    display:none;
    cursor: pointer;
    margin-left:15px;

    @media (max-width: 768px){
        display:block;
     
    }
    @media (max-width: 576px){
        font-size:33px;
        margin-left:5px;
    }
  }

  .search-cart-holder {
      display: flex;
      justify-content: flex-end;
      position: absolute;
      top: 34px;
      right: 110px;

    @media (max-width: 768px){
        right: 68px;
        top: 25px;
    }
    @media (max-width: 576px){
        top: 20px;
    }

  }

  .search {
      position: relative;
      top: 4px;
      margin-right: 10px;
  }
  .input-search {
      display: block;
      border: none;
      border-bottom: 1px solid #ccc;
      border-radius: 0;
      box-shadow: none;
      width: 140px;
      height: 24px;
      background-color:transparent;
      :focus{
          outline:none
      }
  }
  .form-control:focus {
      outline: none;
      box-shadow: none;
      border-bottom: 1px solid black;
  }

  .btn {
      background-image: url("https://res.cloudinary.com/dwgzh4kmx/image/upload/v1614381789/Cake-shop/search-icon_klhkl0.png");
      background-repeat: no-repeat;
      display: block;
      width: 20px;
      height: 19px;
      box-shadow: none;
      border: none;
      position: absolute;
      top: 2px;
      right: 2px;
      background-color: white;
  }
  .btn:focus {
      outline: none;
      box-shadow: none;
      border-color: #cccccc;
  }
  .cart {
      position: relative;
      display: inline-block;
  }
  .cart img {
      vertical-align: middle;
      border: 0;
  }
  .badge {
      display: inline-block;
      position: absolute;
      right: -8px;
      bottom: -8px;
      background-color: #ef7998;
      padding: 4px 6px 3px;
      border-radius: 10px;
      color: white;
      font-size: 75%;
      font-weight: 700;
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
  }

  .spikes {
      position: relative;
      background: #f8f9fa;
  }

  .spikes::after {
      content: '';
      position: absolute;
      right: 0;
      left: -0%;
      top: 100%;
      z-index: 10;
      display: block;
      height: 35px;
      background-size: 35px 100%;
      background-image: linear-gradient(135deg,  #f8f9fa 25%, transparent 25%), linear-gradient(225deg,  #f8f9fa 25%, transparent 25%);
      background-position: 0 0;
}


`
