import React from 'react';
import { Box } from '@mui/material';
import sakuraLogo from '/sakura-logo.svg';

const SakuraBackground: React.FC = () => {
  // Helper function to get random position biased towards the sides but not too close to edges
  const getSidePosition = () => {
    const random = Math.random();
    // Increase probability for sides, reduce for middle
    if (random < 0.45) {
      return 5 + (random * 20); // Left side: 5-25%
    } else if (random > 0.55) {
      return 75 + (random * 20); // Right side: 75-95%
    }
    // Very rare middle petals
    return random < 0.8 ? (5 + random * 20) : (75 + random * 20); // Redirect most middle petals to sides
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(255,245,245,1) 0%, rgba(255,235,235,1) 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 15% 20%, rgba(255, 182, 193, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 85% 20%, rgba(255, 182, 193, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 15% 80%, rgba(255, 192, 203, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 85% 80%, rgba(255, 192, 203, 0.15) 0%, transparent 40%)
          `,
        },
        '@keyframes fall-1': {
          '0%': {
            transform: 'translate3d(0, -10%, 0) rotate(0deg) scale(1)',
            opacity: 0,
          },
          '10%': {
            opacity: 0.8,
            transform: 'translate3d(15px, 10%, 0) rotate(45deg) scale(1)',
          },
          '50%': {
            transform: 'translate3d(35px, 400px, 0) rotate(180deg) scale(0.95)',
          },
          '100%': {
            transform: 'translate3d(50px, 1000px, 0) rotate(360deg) scale(0.9)',
            opacity: 0,
          },
        },
        '@keyframes fall-2': {
          '0%': {
            transform: 'translate3d(0, -10%, 0) rotate(0deg) scale(1)',
            opacity: 0,
          },
          '10%': {
            opacity: 0.6,
            transform: 'translate3d(-15px, 10%, 0) rotate(-45deg) scale(1)',
          },
          '50%': {
            transform: 'translate3d(-35px, 400px, 0) rotate(-180deg) scale(0.95)',
          },
          '100%': {
            transform: 'translate3d(-50px, 1000px, 0) rotate(-360deg) scale(0.9)',
            opacity: 0,
          },
        },
        '@keyframes fall-3': {
          '0%': {
            transform: 'translate3d(0, -10%, 0) rotate(0deg) scale(1)',
            opacity: 0,
          },
          '10%': {
            opacity: 0.7,
            transform: 'translate3d(20px, 10%, 0) rotate(90deg) scale(1)',
          },
          '50%': {
            transform: 'translate3d(45px, 400px, 0) rotate(360deg) scale(0.95)',
          },
          '100%': {
            transform: 'translate3d(60px, 1000px, 0) rotate(720deg) scale(0.9)',
            opacity: 0,
          },
        },
        '@keyframes fall-4': {
          '0%': {
            transform: 'translate3d(0, -10%, 0) rotate(0deg) scale(1)',
            opacity: 0,
          },
          '10%': {
            opacity: 0.9,
            transform: 'translate3d(-20px, 10%, 0) rotate(-90deg) scale(1)',
          },
          '50%': {
            transform: 'translate3d(-45px, 400px, 0) rotate(-360deg) scale(0.95)',
          },
          '100%': {
            transform: 'translate3d(-60px, 1000px, 0) rotate(-720deg) scale(0.9)',
            opacity: 0,
          },
        },
        '@keyframes sway': {
          '0%, 100%': {
            transform: 'translate3d(0, 0, 0)',
          },
          '25%': {
            transform: 'translate3d(15px, 2px, 0)',
          },
          '75%': {
            transform: 'translate3d(-15px, 2px, 0)',
          },
        },
        '@keyframes float': {
          '0%, 100%': {
            transform: 'translate3d(0, 0, 0) rotate(0deg)',
          },
          '25%': {
            transform: 'translate3d(15px, -10px, 0) rotate(5deg)',
          },
          '75%': {
            transform: 'translate3d(-15px, 10px, 0) rotate(-5deg)',
          },
        },
      }}
    >
      {/* Large falling petals */}
      {[...Array(35)].map((_, i) => (
        <Box
          key={`large-${i}`}
          sx={{
            position: 'absolute',
            width: '30px',
            height: '30px',
            backgroundImage: `url(${sakuraLogo})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            left: `${getSidePosition()}%`,
            top: `-30px`,
            animation: `
              ${['fall-1', 'fall-2', 'fall-3', 'fall-4'][i % 4]} ${15 + Math.random() * 10}s linear infinite ${Math.random() * 20}s,
              sway ${5 + Math.random() * 3}s ease-in-out infinite
            `,
            opacity: 0,
            filter: 'drop-shadow(0 2px 3px rgba(255, 155, 155, 0.2))',
            willChange: 'transform',
          }}
        />
      ))}

      {/* Medium falling petals */}
      {[...Array(30)].map((_, i) => (
        <Box
          key={`medium-${i}`}
          sx={{
            position: 'absolute',
            width: '25px',
            height: '25px',
            backgroundImage: `url(${sakuraLogo})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            left: `${getSidePosition()}%`,
            top: `-25px`,
            animation: `
              ${['fall-1', 'fall-2', 'fall-3', 'fall-4'][i % 4]} ${18 + Math.random() * 12}s linear infinite ${Math.random() * 15}s,
              sway ${5 + Math.random() * 3}s ease-in-out infinite
            `,
            opacity: 0,
            filter: 'drop-shadow(0 2px 3px rgba(255, 155, 155, 0.2))',
            willChange: 'transform',
          }}
        />
      ))}
      
      {/* Floating background petals */}
      {[...Array(30)].map((_, i) => (
        <Box
          key={`floating-${i}`}
          sx={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            backgroundImage: `url(${sakuraLogo})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            left: `${getSidePosition()}%`,
            top: `${10 + Math.random() * 80}%`,
            animation: `float ${6 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
            opacity: 0.25,
            transform: `rotate(${Math.random() * 360}deg)`,
            filter: 'blur(1px)',
            willChange: 'transform',
          }}
        />
      ))}

      {/* Small floating petals */}
      {[...Array(25)].map((_, i) => (
        <Box
          key={`small-${i}`}
          sx={{
            position: 'absolute',
            width: '15px',
            height: '15px',
            backgroundImage: `url(${sakuraLogo})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            left: `${getSidePosition()}%`,
            top: `${20 + Math.random() * 60}%`,
            animation: `float ${7 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
            opacity: 0.2,
            transform: `rotate(${Math.random() * 360}deg)`,
            filter: 'blur(2px)',
            willChange: 'transform',
          }}
        />
      ))}
    </Box>
  );
};

export default SakuraBackground; 