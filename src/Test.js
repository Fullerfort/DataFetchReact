import React from "react";
import "./index.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

const Test = ({ screens, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    // <>
    //   <div>
    //     <ul>
    //       <strong>Screens</strong>
    //       {infos.map((info) => (
    //         <>
    //           <li key={info.id}>
    //             <ul>
    //               Location : {info.location} , Name : {info.name}, Type:{" "}
    //               {info.type}, External_Link: {info.external_link}, Banner :{" "}
    //               {info.banner}.
    //             </ul>
    //           </li>
    //           <br />
    //         </>
    //       ))}
    //     </ul>
    //   </div>

    //   <div>
    //     <ul>
    //       <strong>Banners</strong>
    //       {banners.map((info) => (
    //         <li key={info.id}>
    //           <ul>
    //             Location : {info.location} , Download : {info.download}{" "}
    //           </ul>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </>

    <Container maxWidth="xl">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={5}>
                <strong>Screens</strong>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Banner</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Type</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">External Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {screens.map((screen) => (
              <TableRow key={screen.id}>
                <TableCell component="th" scope="row">
                  <img src={screen.banner} width="300" />
                </TableCell>
                <TableCell align="center">{screen.name}</TableCell>
                <TableCell align="center">{screen.type}</TableCell>
                <TableCell align="center">{screen.location}</TableCell>
                <TableCell align="center">
                  <a href={screen.external_link} target="_blank">
                    Click here!
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Test;
