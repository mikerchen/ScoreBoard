import React, { useRef, useEffect, useState } from 'react';
import { FormControl, TextField, Button, Select, MenuItem, Table, TableHead, TableRow, TableContainer, TableCell, TableBody } from '@mui/material';

const rosterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function GameConfigForm(props) {
    const {
        team,
        gameReqBody,
        setGameReqBody,
        homeRoster,
        setHomeRoster,
        awayRoster,
        setAwayRoster
    } = props;

    const teamLower = team.toLowerCase()

    const inputRef = useRef()
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setVideoFile(event.target.files[0])
        setVideoSource(url)
        setVideoFileName(event.target.files[0].name)
    };
    const handleChoose = (event) => {
        inputRef.current.click();
    }

    const handleChange = (e) => {
        setGameReqBody({...gameReqBody, 
            [teamLower]: {
                ...gameReqBody[teamLower],
                [e.target.name]: e.target.value
            }
        })
    }

    const rosterChange = (e) => {
        
    }

    const RosterFieldMap = rosterArr.map((val, i) => {
        return(
            <TableRow key={i}>
                <TableCell>
                    <TextField
                        label='#'
                        name='number'
                        onChange={rosterChange}
                        id={i.toString()}
                    />
                </TableCell>
                <TableCell>
                    <TextField 
                        label={`Player ${val} Name`}
                        style={{width: '70%'}}
                        name='name'
                        onChange={rosterChange}
                        id={i.toString()}
                    />
                </TableCell>
            </TableRow>       
        )
    })  

    return(
        <>
            <h2>{`${team} Team`}</h2>
            {JSON.stringify(gameReqBody)}
            <div>
                <TextField 
                    label="Team Name"
                    name="teamName"
                    variant="outlined"
                    onChange={handleChange}
                    style={{width: '50%'}}
                />
            </div>
           <div style={{
            marginTop: '20px'
           }}>
                <input 
                    ref={inputRef}
                    style={{display: 'none'}}
                    type="file"
                    onChange={handleFileChange}
                    accept=".jpeg, .jpg, .png"
                /> 
                <Button
                    onClick={handleChoose}
                    variant="outlined"
                >Select Logo
                </Button>
                <p>Supported image file types: .jpeg, .jpg, .png</p>
                <div style={{marginTop: '40px'}}>
                    <h2>Roster</h2>
                </div>
                <div>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell width={50}>
                                        #
                                    </TableCell>
                                    <TableCell>
                                        Name
                                    </TableCell>
                                </TableRow>       
                            </TableHead>
                            <TableBody>
                                {RosterFieldMap}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
           </div>
            
        </>
    )
}