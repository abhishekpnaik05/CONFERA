import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMediaQuery, Box, Typography } from '@mui/material';

export default function LandingPage() {
    const router = useNavigate();
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:900px)');

    // Styles
    const styles = {
        landingPageContainer: {
            minHeight: '100vh',
            backgroundColor: '#f8f9fa',
            fontFamily: "'Inter', sans-serif"
        },
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: isMobile ? '1rem' : '2rem 4rem',
            backgroundColor: 'white',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
        },
        navHeader: {
            '& h2': {
                margin: 0,
                color: '#1a73e8',
                fontSize: isMobile ? '1.5rem' : '2rem',
                fontWeight: 700,
                letterSpacing: '1px'
            }
        },
        navlist: {
            display: 'flex',
            gap: isMobile ? '1rem' : '2rem',
            alignItems: 'center',
            '& p': {
                margin: 0,
                color: '#5f6368',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                '&:hover': {
                    color: '#1a73e8'
                }
            }
        },
        landingMainContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isMobile ? '2rem 1rem' : '4rem',
            maxWidth: '1400px',
            margin: '0 auto',
            flexDirection: isTablet ? 'column-reverse' : 'row',
            gap: isMobile ? '2rem' : '4rem'
        },
        heroContent: {
            flex: 1,
            '& h1': {
                fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3.5rem',
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: '1rem',
                color: '#202124'
            },
            '& p': {
                fontSize: isMobile ? '1rem' : '1.2rem',
                color: '#5f6368',
                marginBottom: '2rem'
            }
        },
        ctaButton: {
            display: 'inline-block',
            backgroundColor: '#1a73e8',
            color: 'white',
            padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: isMobile ? '1rem' : '1.1rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            '&:hover': {
                backgroundColor: '#0d5bba',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)'
            }
        },
        heroImage: {
            flex: 1,
            textAlign: 'center',
            '& img': {
                maxWidth: '100%',
                height: 'auto',
                maxHeight: isMobile ? '300px' : '500px',
                animation: 'float 3s ease-in-out infinite'
            }
        },
        '@keyframes float': {
            '0%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-15px)' },
            '100%': { transform: 'translateY(0px)' }
        }
    };

    return (
        <Box sx={styles.landingPageContainer}>
            {/* Navigation */}
            <Box component="nav" sx={styles.nav}>
                <Box sx={styles.navHeader}>
                    <Typography variant="h2">CONFERA</Typography>
                </Box>
                <Box sx={styles.navlist}>
                    <Typography 
                        variant="body1" 
                        onClick={() => router("/aljk23")}
                        sx={{ color: '#5f6368', '&:hover': { color: '#1a73e8' } }}
                    >
                        Join as Guest
                    </Typography>
                    <Typography 
                        variant="body1" 
                        onClick={() => router("/auth")}
                        sx={{ color: '#5f6368', '&:hover': { color: '#1a73e8' } }}
                    >
                        Register
                    </Typography>
                    <Box 
                        onClick={() => router("/auth")} 
                        sx={{ cursor: 'pointer' }}
                    >
                        <Typography 
                            variant="body1"
                            sx={{ color: '#5f6368', '&:hover': { color: '#1a73e8' } }}
                        >
                            Login
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Main Content */}
            <Box sx={styles.landingMainContainer}>
                <Box sx={styles.heroContent}>
                    <Typography variant="h1" component="h1">
                        <span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones
                    </Typography>
                    <Typography variant="body1" component="p">
                        Cover a distance by Confera
                    </Typography>
                    <Link to="/auth" style={styles.ctaButton}>
                        Get Started
                    </Link>
                </Box>
                <Box sx={styles.heroImage}>
                    <img 
                        src="/mobile.png" 
                        alt="Video call illustration" 
                        style={{ 
                            maxWidth: '100%', 
                            height: 'auto', 
                            maxHeight: isMobile ? '300px' : '500px',
                            animation: 'float 3s ease-in-out infinite' 
                        }} 
                    />
                </Box>
            </Box>
        </Box>
    );
}