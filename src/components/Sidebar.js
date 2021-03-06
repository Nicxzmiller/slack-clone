import React from "react";
import styled from "styled-components"
import {
    Create,
    FiberManualRecord,
    InsertComment,
    Inbox,
    Drafts,
    Bookmark,
    PeopleAlt,
    Apps,
    FileCopy,
    ExpandLess,
    ExpandMore, Add
} from "@material-ui/icons";
import SidebarOption from "./SidebarOption";
import {useCollection} from "react-firebase-hooks/firestore";
import {db} from "../firebase";

function Sidebar(){
    const [channels, loading, error] = useCollection(db.collection('rooms'));
    return(
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>GAMMA WEB HQ</h2>
                    <h3>
                        <FiberManualRecord />
                        Nicholas Markus
                    </h3>
                </SidebarInfo>
                <Create/>
            </SidebarHeader>

            <SidebarOption Icon={InsertComment} title="Threads"/>
            <SidebarOption Icon={Inbox} title="Mentions & Reactions"/>
            <SidebarOption Icon={Drafts} title="Saved items"/>
            <SidebarOption Icon={Bookmark} title="Channel browser"/>
            <SidebarOption Icon={PeopleAlt} title="People & user groups"/>
            <SidebarOption Icon={Apps} title="Apps"/>
            <SidebarOption Icon={FileCopy} title="File browser"/>
            <SidebarOption Icon={ExpandLess} title="Show less"/>
            <hr/>
            <SidebarOption Icon={ExpandMore} title="Channels"/>
            <hr/>
            <SidebarOption Icon={Add} addChannelOption title="Add Channel"/>


            {channels?.docs.map(doc => (
                <SidebarOption key={doc.id} id={doc.id} title={doc.data().name}/>
            ))}

        </SidebarContainer>
    )
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: #fff;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  
  >hr{
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root{
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
  }
`

const SidebarInfo = styled.div`
  flex: 1;
  
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  
  > h3{
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  
  > h3 > .MuiSvgIcon-root{
    margin-top: 1px;
    margin-right: 2px;
    font-size: 12px;
    color: #006400;
  }
`