import styled from '@emotion/styled/macro'
import { PlayCircle, PauseCircle, Heart } from '@emotion-icons/boxicons-regular'
import { CloseCircleOutline } from '@emotion-icons/evaicons-outline'
import { HeartFill } from '@emotion-icons/bootstrap/HeartFill'
export const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`
/* Header */
export const Nav = styled('div')`
    background-image: linear-gradient(to bottom right, purple, green, yellow);
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
`

export const NavHeader = styled('div')`
    max-width: 1010px;
    padding: 26px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
`

export const NavLeft = styled('div')`
    width: 100%;
    text-align: left;
    font-size: 2em;
    font-weight: 300;
    color: white;

   
    
    @media(max-width: 768px) {
      font-size: 1.5em;
    }
    
`

export const NavCenter = styled('div')`
    width: 33.333%;
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    @media (max-width: 378px) {
        font-size: 1.5em;
      }
`

export const NavRight = styled('div')`
    width: 33.333%;
    text-align: right;
    font-size: 2rem;
    font-weight: 300;
`

export const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;

  &:active,
  &:focus {
    text-align: left;
  }
`

export const Button = styled.button`
 background-color: transparent;
 border: 1px solid #dbdbdb;
 color: #262626;
 border-radius: 4px;
 cursor: pointer;
 font-weight: 600;
 padding: 5px 9px;
 text-transition: capitalize;
 font-size: 14px;
 margin-left: 20px
`

/*Load Message */
export const LoadContainer = styled.div`
  top: 50%;
  left: 50%;
  padding: 26px 20px;
  width: 100%;
  text-align: center;

`
/* Body */
export const MainContainer = styled('div')`
  max-width: 1010px;
  width: 100%;
  margin: 20px auto;
  padding-bottom: 3rem;
`

export const ContentWrapper = styled('div')`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`

export const Footer = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: #cccccc;
  text-align: center;
`
export const CategoryHeader = styled.h3`
  font-weight: 400;
  margin: 30px 0 0 10px;
`
/* Card */
export const Card = styled('div')`
    position: relative;
    flex-basis: 100%;
    flex-basis: calc(20% - 20px);
    margin: 10px;
    cursor: pointer;
    transition: 0.3s all ease-in;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.09);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    

    @media (max-width: 992px) {
      flex-basis: calc( 33.333% - 20px);
    }

    @media (max-width: 600px) {
      flex-basis: calc(50% - 20px)
    }

    &:hover {
      box-shadow: 0 4px 6px 0 rgba(0,0,0,0.2);
    }
`

export const Track = styled('div')`
    position: relative;
    flex-basis: 100%;
    flex-basis: calc(10% - 5px);
    margin: 10px;
    cursor: pointer;
    transition: 0.3s all ease-in;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.09);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    

    @media (max-width: 992px) {
      flex-basis: calc( 33.333% - 20px);
    }

    @media (max-width: 600px) {
      flex-basis: calc(50% - 20px)
    }

    &:hover {
      box-shadow: 0 4px 6px 0 rgba(0,0,0,0.2);
    }
`

export const CardBody = styled('div')`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 0.5rem 0.8rem 0 0.8rem;
`

export const CardImage = styled('img')`
    cursor: pointer;
    width: 100%;
    height: auto;
    object-fit: cover;
  
`
export const CardHeader = styled('div')`
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;

export const CardText = styled('p')`
  margin: 1px;
  font-size: 1rem;
`

export const CardFooter = styled('div')`
  border: none;
  display: inline-block;
  padding-left: 0.8rem;
  margin-bottom: 5px;
  margin-top: 5px;
  with: 100%;
  font-size: 0.8rem;
`

export const InfoDetails = styled('div')`
  display: flex;
`

export const InfoDetailsLeft = styled('div')`
  margin-right: 40px;
  width: 300px;
  display: flex;
  align-items: center;
`

export const InfoDetailsRight = styled('div')`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
`


/* Modal */
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`

export const Dialog = styled.div`
  background-color:white;
  height: 100%;
  position:relative;
  margin:0 auto;
  overflow-y: scroll;
  padding: 0; 
  border-radius: 8px 8px 0 0;
  -webkit-overflow-scrolling: touch;
  

  @media (min-width: 60em) {
    height:75%;
  margin:5% auto;
  max-height: 57em;
    max-width:66em;
    width:85%;
  }
`

export const ModalWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`

export const ModalContainer = styled.div`
  position: relative;
  flex-basis: 100%;
  transition: 0.3s all ease-in;
  z-index: 0;
  margin: 0 30px;
  padding-bottom: 5px;
  
`
export const ModalContent = styled.div`
  position: relative;
  flex-basis: 100%;
  margin: 10px;
  transition: 0.3s all ease-in;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
 
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  padding: 0;
  align-items: center;
  text-align: justify;
  
  

  @media screen and (min-width: 600px) {
    width: 100%;
    flex: 1;
  }
`
export const Sticky = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%
`

export const Scroll = styled.div`
  margin-top: 30px;
  height: 100%
`


export const ModalHeader = styled.h2`
  font-weight: 400;
  margin: 3px;
`
export const ModalSubHeader = styled.h4`
  font-weight: 300;
  margin: 3px;
`
export const ModalCategory = styled.h4`
  font-weight: 400;
  padding: 5px 0;
`
export const ModalText = styled.div`
  font-size: 1rem;
  font-weight: 300;
  margin: 3px;
`
export const ModalTextSm = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  margin: 3px;
`
export const CloseModal = styled.p`
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 20px;
  font-size: 1.3rem;
  cursor: pointer;

  @:hover {
    color:#cccccc;
    text-decoration: none;
    opacity: .3;
  }
  
`

export const TrackPreviewContainer = styled.div`
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,0.3);
`
/* Table */
export const TableContainer = styled.div`
  oveflow-x: auto;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  padding: 0 25px;
  align-items: center;
  text-align: justify;

  @media screen and (min-width: 600px) {
    width: 100%;
    flex: 1;
    padding: 0;
    margin: 0;
  }
`
export const Table = styled.table`
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;

  @media screen and (max-width: 600px) {
    border: 0;
  }
`
export const TableHeader = styled.th`
  padding: .625em;
  text-align: center;
  font-weight: 400;
  font-size: 0.9em;
  border-bottom: 1px solid #ddd;

  @media screen and (max-width: 600px) {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px; 
  }
  
`

export const TableRow = styled.tr`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: .2em;

  @media screen and (max-width: 600px) {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
`

export const TableCell = styled.td`
  padding: .2em;
  text-align: center;
  font-size: .8em;
  border-bottom: 1px solid #ddd;
    @media screen and (max-width: 600px) {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: .7em;
      text-align: right;

      &:before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
      }

      &:last-child {
        border-bottom: 0;
      }
    }
`
export const ExplicitCell = styled.td`
  font-size: 0.6em;
  font-style: oblique;
  text-align: left;
`
export const Duration = styled.td`
  font-size: 0.7em;
  text-align: left;
`
export const Preview = styled.td`
  
`

export const LikeCell = styled.td`

`
export const Line = styled.hr`
  color: rgba(0, 0, 0, 0.7);
`
export const Image = styled.img`
    cursor: pointer;
    width: 100%;
    height: auto;
    object-fit: cover;
`

export const ImageSmall = styled.img`
  box-shadow: 0 3px 5px 0 rgba(0,0,0,0.9);
  margin: 5px
`

export const Header = styled.div`
  background-image: linear-gradient(to bottom right, purple, green, yellow);
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;
export const HeaderText = styled.div`
  color: #fff;
  align-self: center;
  color: lightgray;
`;
export const CloseButton = styled(CloseCircleOutline)`
  width: 1.5rem;
  padding: 10px;
  color: white;
  margin-left: auto;
  :hover {
    cursor: pointer;
  }
`;
export const Content = styled.div`
  padding: 5px;
  max-height: 80rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

/*Icons */
export const PlayContainer = styled.div`
  padding: 10px;
`

export const Play = styled(PlayCircle)`
  width: 2rem;
  height: auto;
  :hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: transform .5s;
    
  }
`

export const Pause = styled(PauseCircle)`
  width: 2rem;
  height: auto;
  :hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: transform .5s;
    
  }
`

export const Explicit = styled.div`
  background-color: #f2f2f2;
  border: 1px solid #737373;
  margin: 8px;
  padding: 3px;
  font-size: 0.6em;
  font-style: oblique;
`

export const LikeContainer = styled.div`
  float: right;
  margin-right: 5px;
`
export const HeartOutline = styled(Heart)`
  color: #ccccc;
  width: 1rem;
  height: auto;
  padding: 0;
`

export const HeartLiked = styled(HeartFill)`
  color: red;
  width: 1rem;
  height: auto;
  padding: 0;
  
`


