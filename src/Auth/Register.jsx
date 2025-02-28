import { Button, Grid, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, register } from '../State/Auth/Action';

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { auth } = useSelector(store => store)
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (jwt) {
            dispatch(getUser(jwt))
        }
    }, [jwt, auth.jwt])

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            dispatch(register(formData));
            console.log("User Data:", formData);
            toast.success('Successfully Registered.');
            // Optionally navigate to login page after registration success
            // navigate('/login');
        }
    };

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let tempErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate first name
        if (!formData.firstName.trim()) {
            tempErrors.firstName = 'First name cannot be empty or contain only spaces.';
        }

        // Validate last name
        if (!formData.lastName.trim()) {
            tempErrors.lastName = 'Last name cannot be empty or contain only spaces.';
        }

        // Validate email
        if (!emailRegex.test(formData.email)) {
            tempErrors.email = 'Please enter a valid email address.';
        }

        // Validate password
        if (formData.password.length < 6 || /\s/.test(formData.password)) {
            tempErrors.password = 'Password must be at least 6 characters long and cannot contain spaces.';
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            fullWidth
                            autoComplete="given-name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            error={!!errors.firstName}
                            helperText={errors.firstName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            autoComplete="family-name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            autoComplete="new-password"
                            variant="outlined"
                            value={formData.password}
                            onChange={handleInputChange}
                            error={!!errors.password}
                            helperText={errors.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            sx={{
                                py: 1.5,
                                mt: 2,
                                bgcolor: 'rgb(145, 85, 253)',
                                '&:hover': {
                                    bgcolor: 'rgb(145, 85, 253)',
                                },
                            }}
                            size='large'
                            variant="contained"
                            type='submit'
                            fullWidth
                        >
                            REGISTER
                        </Button>
                    </Grid>
                    <Grid item xs={12} className='flex justify-center items-center'>
                        <Typography>
                            If you have an account already?{' '}
                            <Typography
                                component="span"
                                sx={{ color: 'rgb(145, 85, 253)', cursor: 'pointer' }}
                                onClick={() => {
                                    handleCloseMenu();
                                    navigate("/login-page");
                                }}
                            >
                                Login
                            </Typography>
                        </Typography>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default Register;
