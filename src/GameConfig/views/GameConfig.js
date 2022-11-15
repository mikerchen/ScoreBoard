import React, {useState, useEffect} from 'react';
import GameConfigForm from '../components/GameConfigForm';
import { Grid, Button } from '@mui/material';

const gameReqBodyDefault = {
    home: {
        teamName: '',
        teamLogo: '',
        roster: []
    },
    away: {
        teamName: '',
        teamLogo: '',
        roster: []
    }
}

export default function GameConfig() {
    const [gameReqBody, setGameReqBody] = useState(gameReqBodyDefault)
    const [homeRoster, setHomeRoster] = useState([]);
    const [awayRoster, setAwayRoster] = useState([]);

    return(
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <GameConfigForm 
                        team='Home'
                        gameReqBody={gameReqBody}
                        setGameReqBody={setGameReqBody}
                        homeRoster={homeRoster}
                        setHomeRoster={setHomeRoster}
                        awayRoster={awayRoster}
                        setAwayRoster={setAwayRoster}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <GameConfigForm 
                        team='Away'
                        gameReqBody={gameReqBody}
                        setGameReqBody={setGameReqBody}
                        homeRoster={homeRoster}
                        setHomeRoster={setHomeRoster}
                        awayRoster={awayRoster}
                        setAwayRoster={setAwayRoster}
                    />
                </Grid>
            </Grid>
            <div
                style={{
                    marginTop: '20px',
                    width: '100%'
                }}
            >
                <Button
                    style={{
                        margin: 'auto'
                    }}
                    variant='outlined'>Submit</Button>
            </div>
           
            
        </>
    )
}