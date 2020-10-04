import React from "react";
import Moment from "react-moment";
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

const Avatar = styled.img`
    border-radius: 50%;
    width: 3vw;
    height: 3vw;
`

const Username = styled.span`
    font-weight: bold;
`

const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`

const Footer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin-top: 10px;
`

const Card = styled.div`
    padding: 10px;
    box-shadow: 5px 10px 18px #888888;
    flex-grow: 1;
    box-sizing: border-box;
    margin: 30px 30px 0px 0px;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
`

const Image = styled.img`
    position: relative;
    width: 95%;
    height: 70%;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
`
const LikesCount = styled.span`
    margin-left: 5px;
`

const Photo = (props) => {
    const onClick = () => alert(props.data.id);

    return (
        <Card>
            <Header>
                <Avatar src={props.data.user.profile_image.small} alt=""/>
                <Info>
                    <Username>{props.data.user.username}</Username>
                    <p>{props.data.user.location}</p>
                </Info>
                <Moment fromNow ago>{props.data.created_at}</Moment>
            </Header>

            <Image src={props.data.urls.small} alt=""/>

            <Footer>
                <div onClick={onClick}><FontAwesomeIcon icon={faHeart}/></div>
                <LikesCount>{props.data.likes}</LikesCount>
            </Footer>
            <span>{props.data.description}</span>
        </Card>
    )
};

export default Photo;