import { Button, Grid, TextField, Typography, IconButton, InputAdornment, Alert } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLogin = () => {
        navigate("/login");
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
            console.log("User Data:", formData);
            // You can handle form submission here
        }
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
                            <Typography component="span" sx={{ color: 'rgb(145, 85, 253)', cursor: 'pointer' }} onClick={handleLogin}>
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

