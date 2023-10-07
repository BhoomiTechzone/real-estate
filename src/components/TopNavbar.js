import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';

const TopNavbar = () => {
    return (
        <Box sx={{ backgroundColor: "#0B2C3D", display: "flex", justifyContent: "space-between", alignItems: "center", padding:"10px 2rem" }}>
            <Box sx={{display:"flex", alignItems:"center"}}>
                <HiOutlineMail style={{ color:"green", fontSize:"16px" }} />&nbsp;
                <Typography sx={{ color: "#fff", fontSize: "16px" }}>
                    info@bhoomitechzone.com
                </Typography> &emsp; &emsp;
                <BsTelephone style={{ color:"green", fontSize:"16px" }} />&nbsp;
                <Typography sx={{ color: "#fff", fontSize: "16px" }}>
                    info@bhoomitechzone.com
                </Typography> &emsp; &emsp;
            </Box>
            <Box sx={{gap:"15px", display:"flex"}}>
               <BiLogoFacebook style={{ color:"white", fontSize:"20px", border:"2px solid green", borderRadius:"50%", width:"30px", height:"30px", padding:"2px", cursor:"pointer" }} />
               <AiOutlineTwitter style={{ color:"white", fontSize:"20px", border:"2px solid green", borderRadius:"50%",width:"30px", height:"30px", padding:"4px", cursor:"pointer" }} />
               <AiOutlineInstagram style={{ color:"white", fontSize:"20px", border:"2px solid green", borderRadius:"50%",width:"30px", height:"30px", padding:"4px", cursor:"pointer" }} />
               <AiFillYoutube style={{ color:"white", fontSize:"20px", border:"2px solid green", borderRadius:"50%",width:"30px", height:"30px", padding:"4px", cursor:"pointer" }} />
               <BiLogoLinkedin style={{ color:"white", fontSize:"20px", border:"2px solid green", borderRadius:"50%",width:"30px", height:"30px", padding:"4px", cursor:"pointer" }} />
            </Box>
        </Box>
    )
}

export default TopNavbar;