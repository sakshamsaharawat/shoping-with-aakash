import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = () => {

    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete='email'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            fullWidth
                            autoComplete="password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button className='w-full'
                            sx={{
                                bgcolor: "rgb(145, 85, 253)", "&:hover": { bgcolor: "rgb(145, 85, 253)" },
                            }}
                            variant="contained"
                        >LOGIN</Button>
                    </Grid>
                    <Grid item xs={12} className='flex space-x-4 items-center justify-center'>
                        <Typography>
                            don't have account?{' '}
                        </Typography>
                        <Typography component="sapn" sx={{color:"rgb(145, 85, 253)", cursor: 'pointer'}} onClick={()=> navigate("/signUp")}>
                        Register

                        </Typography>

                    </Grid>
                </Grid>
            </form>
            {/* <div className='flex flex-col items-center justify-center'>
                <div className='py-3 flex items-center '>
                    <p> if you don't have account ? </p>
                    <Button onClick={()=> navigate("/signup")} className='ml-5' size="small">Register</Button>
                </div>
            </div> */}
        </div>
    )
}

export default Login
