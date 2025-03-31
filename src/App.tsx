import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom'
import VerbTable from './components/VerbTable'
import KanjiTable from './components/KanjiTable'
import Settings from './components/Settings'
import Guide from './components/Guide'
import SakuraBackground from './components/SakuraBackground'
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItemButton, ListItemIcon, ListItemText, useTheme, useMediaQuery } from '@mui/material'
import { Menu as MenuIcon, Translate, Brush, Settings as SettingsIcon, Help, Mic } from '@mui/icons-material'
import sakuraLogo from '/sakura-logo.svg'
import AudioUploader from './components/AudioUploader'

const BASE_PATH = ''

const App: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const location = useLocation()

  const menuItems = [
    { text: 'Bảng động từ', icon: <Translate />, path: '/verbs' },
    { text: 'Học Kanji', icon: <Brush />, path: '/kanji' },
    { text: 'Nhận dạng giọng nói', icon: <Mic />, path: '/audio' },
    { text: 'Cài đặt', icon: <SettingsIcon />, path: '/settings' },
    { text: 'Hướng dẫn', icon: <Help />, path: '/guide' },
  ]

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      bgcolor: '#FFF5F5',
      position: 'relative',
      zIndex: 1,
    }}>
      <SakuraBackground />
      
      <AppBar 
        position="static" 
        elevation={0}
        sx={{ 
          bgcolor: 'rgba(255, 255, 255, 0.8)',
          borderBottom: '1px solid rgba(255, 192, 203, 0.2)',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto' }}>
          {isMobile && (
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ 
                mr: 2,
                color: '#FF9999',
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            flexGrow: 1,
          }}>
            <Box
              component="img"
              src={sakuraLogo}
              alt="Sakura Logo"
              sx={{ 
                height: 40,
                width: 40,
                opacity: 0.8,
              }}
            />
            <Typography 
              variant="h6" 
              component={Link}
              to="/"
              sx={{ 
                fontFamily: "'Playfair Display', serif",
                color: '#FF6B6B',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                textDecoration: 'none',
              }}
            >
              Sổ tay học tiếng Nhật
            </Typography>
          </Box>
          
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  startIcon={item.icon}
                  sx={{
                    color: location.pathname === item.path ? '#FF6B6B' : '#FF9999',
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 192, 203, 0.1)',
                      '&::after': {
                        width: '100%',
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: location.pathname === item.path ? '100%' : '0',
                      height: '2px',
                      backgroundColor: '#FF6B6B',
                      transition: 'width 0.3s ease',
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRight: '1px solid rgba(255, 192, 203, 0.2)',
          },
        }}
      >
        <Box sx={{ 
          p: 3, 
          borderBottom: '1px solid rgba(255, 192, 203, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}>
          <Box
            component="img"
            src={sakuraLogo}
            alt="Sakura Logo"
            sx={{ 
              height: 32,
              width: 32,
              opacity: 0.8,
            }}
          />
          <Typography 
            variant="h6" 
            component={Link}
            to="/"
            onClick={toggleDrawer}
            sx={{ 
              fontFamily: "'Playfair Display', serif",
              color: '#FF6B6B',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              textDecoration: 'none',
              '&::after': {
                content: '"桜"',
                fontSize: '1rem',
                opacity: 0.7,
              },
            }}
          >
            Sakura
          </Typography>
        </Box>
        <List sx={{ p: 2 }}>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.text}
              component={Link}
              to={item.path}
              onClick={toggleDrawer}
              selected={location.pathname === item.path}
              sx={{
                borderRadius: 2,
                mb: 1,
                color: '#FF9999',
                '&.Mui-selected': {
                  bgcolor: 'rgba(255, 192, 203, 0.1)',
                  color: '#FF6B6B',
                  '&:hover': {
                    bgcolor: 'rgba(255, 192, 203, 0.2)',
                  },
                },
                '&:hover': {
                  bgcolor: 'rgba(255, 192, 203, 0.1)',
                },
              }}
            >
              <ListItemIcon sx={{ 
                color: 'inherit',
                minWidth: 40,
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                sx={{ 
                  '& .MuiListItemText-primary': {
                    fontSize: '0.95rem',
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <Container 
        component="main" 
        sx={{ 
          flex: 1, 
          py: 4,
          maxWidth: 1200,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Routes>
          <Route path="/verbs" element={<VerbTable />} />
          <Route path="/kanji" element={<KanjiTable />} />
          <Route path="/audio" element={<AudioUploader />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/" element={<Navigate to="/verbs" replace />} />
        </Routes>
      </Container>
    </Box>
  )
}

const AppWrapper: React.FC = () => {
  return (
    <Router basename={BASE_PATH}>
      <App />
    </Router>
  )
}

export default AppWrapper
