import styled from 'styled-components'

export const StyledProducts = styled.div`
    width: 100%;
    padding-right: 30px;
    padding-left: 30px;

.row {
    display: flex;
    flex-wrap: wrap;
    margin-left:15px;
    margin-right:15px; 
    padding-left:40px; 
    padding-right:40px;  
    @media (max-width: 768px){
        padding:0;
        }  
}   
`
export const StyledProduct = styled.div`
    width:33.3%;   
    margin-bottom:15px;
    margin-top:15px;
    padding-left:20px; 
    padding-right:20px;
    
    @media (max-width: 576px){
        width: 50%;
        }

    
    .card{
        position: relative;
        background-color: #fff;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: 5px;
    }
    .img-container {
        position: relative;
        overflow: hidden;

        :hover .store-item-icon {
            transform: translate(0, 0);
        }  
        
        img{
            width:100%; 
            transition: all 1s ease-in-out;
            vertical-align: middle;

        }
        :hover img{
            transform: scale(1.2);
        }
    }

    .store-item-icon {
        position: absolute;
        bottom: 0;
        right: 0;
        height:40px;
        padding:10px ;
        background: pink;
        border-top-left-radius: 10px;
        transition: all 1s ease-in-out;
        transform: translate(100%, 100%);
            @media (max-width: 768px){
                height:30px; 
                padding:5px
            }  
    
    }
    .cart-icon{
        font-size:20px;
        @media (max-width: 768px){
            font-size:16px;
            } 
    }
 
    .card-body{
        display: flex;
        justify-content: space-between!important;
        padding-left:15px;
        padding-right:15px;
    }
    h3{
        display:inline-block;
        padding-top:15px;
        padding-bottom:10px;
        font-size:20px;
        @media (max-width: 768px){
            font-size:16px;
            } 
    }
    span{
        padding-top:15px;
        padding-bottom:10px;
        font-size:20px;
        @media (max-width: 768px){
            font-size:16px;
            } 
    }
    
`
 