import React, { useEffect, useState } from "react";
import "./index.css";
import { 
  Table, 
  TableFooter, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TablePagination 
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

const Test = (props) => {
  const { screens, loading } = props;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentScreens, setCurrentScreens] = useState([]);

  var screensFilter = screens.filter(function(screen){
    return (screens.indexOf(screen) >= (page * rowsPerPage) && screens.indexOf(screen) < (rowsPerPage * (page + 1)));
  });
  
  useEffect(() => {
    setCurrentScreens(screensFilter);
  }, [screens]);

  useEffect(() => {
    setCurrentScreens(screensFilter);
  }, [page, rowsPerPage]);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

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
            {currentScreens.map((screen) => (
              <TableRow key={screen.id}>
                <TableCell component="th" scope="row">
                  {screen.banner != undefined && (<img src={screen.banner} width="300" />)}
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

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 25]}
                count={screens.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              >
              </TablePagination>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Test;
