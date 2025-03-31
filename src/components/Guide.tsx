import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import { Translate, Brush, Mic, Settings as SettingsIcon } from '@mui/icons-material';

const GuideCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  items: string[];
}> = ({ title, icon, items }) => (
  <Paper
    elevation={0}
    sx={{
      p: 3,
      borderRadius: 3,
      background: 'white',
      border: '1px solid var(--border-color)',
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 4px 20px rgba(255, 192, 203, 0.2)',
      },
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
      <Box sx={{ 
        color: 'var(--primary-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: '50%',
        bgcolor: 'rgba(255, 107, 107, 0.1)',
      }}>
        {icon}
      </Box>
      <Typography 
        variant="h6" 
        sx={{ 
          color: 'var(--primary-color)',
          fontFamily: "'Playfair Display', serif",
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
    </Box>
    <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
      {items.map((item, index) => (
        <Box
          component="li"
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            py: 1,
            '&:before': {
              content: '""',
              width: 6,
              height: 6,
              borderRadius: '50%',
              bgcolor: 'var(--secondary-color)',
              mr: 2,
              opacity: 0.5,
            },
          }}
        >
          <Typography sx={{ color: 'var(--text-color)' }}>
            {item}
          </Typography>
        </Box>
      ))}
    </Box>
  </Paper>
);

const Guide: React.FC = () => {
  const guides = [
    {
      title: 'Bảng động từ',
      icon: <Translate />,
      items: [
        'Xem danh sách động từ N5',
        'Tìm kiếm động từ theo từ khóa',
        'Xem các dạng chia động từ',
        'Nghe phát âm của động từ',
      ],
    },
    {
      title: 'Học Kanji',
      icon: <Brush />,
      items: [
        'Xem danh sách Kanji N5-N4',
        'Lọc Kanji theo cấp độ',
        'Xem nghĩa, âm On, âm Kun',
        'Xem ví dụ sử dụng',
      ],
    },
    {
      title: 'Nhận dạng giọng nói',
      icon: <Mic />,
      items: [
        'Sử dụng Chrome để có trải nghiệm tốt nhất',
        'Cho phép trình duyệt truy cập microphone',
        'Nói tiếng Nhật và xem kết quả nhận dạng',
        'Xóa nội dung đã nhận dạng',
      ],
    },
    {
      title: 'Cài đặt',
      icon: <SettingsIcon />,
      items: [
        'Tùy chỉnh giao diện',
        'Cài đặt ngôn ngữ',
        'Quản lý dữ liệu',
        'Đồng bộ hóa',
      ],
    },
  ];

  return (
    <Box sx={{ animation: 'fadeIn 0.5s ease-out' }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          mb: 4, 
          textAlign: 'center',
          fontFamily: "'Playfair Display', serif",
          color: 'var(--primary-color)',
          fontWeight: 600,
        }}
      >
        Hướng dẫn sử dụng
      </Typography>
      
      <Grid container spacing={3}>
        {guides.map((guide, index) => (
          <Grid item xs={12} md={6} key={index}>
            <GuideCard {...guide} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Guide; 