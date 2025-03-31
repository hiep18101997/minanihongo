import React, { useState, useRef } from 'react';
import { Box, Button, Typography, Paper, CircularProgress, IconButton } from '@mui/material';
import { Mic, Stop, Refresh } from '@mui/icons-material';

interface AudioExtractorProps {
  onClose: () => void;
}

const AudioExtractor: React.FC<AudioExtractorProps> = ({ onClose }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const startRecording = () => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('Trình duyệt của bạn không hỗ trợ nhận dạng giọng nói. Vui lòng sử dụng Chrome.');
      return;
    }

    setIsLoading(true);
    setError('');
    setTranscript('');

    const recognition = new (window.webkitSpeechRecognition || window.SpeechRecognition)();
    recognitionRef.current = recognition;

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'ja-JP'; // Nhận dạng tiếng Nhật

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setTranscript(prev => prev + ' ' + transcript);
    };

    recognition.onerror = (event) => {
      setError('Có lỗi xảy ra khi nhận dạng giọng nói: ' + event.error);
    };

    recognition.onend = () => {
      setIsLoading(false);
      setIsRecording(false);
    };

    recognition.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
      setIsLoading(false);
    }
  };

  const clearTranscript = () => {
    setTranscript('');
    setError('');
  };

  return (
    <Box sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3, textAlign: 'center' }}>
        Nhận dạng giọng nói tiếng Nhật
      </Typography>
      
      <Paper 
        elevation={3} 
        sx={{ 
          p: 3, 
          mb: 2,
          borderRadius: 2,
          background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 2, 
            alignItems: 'center',
            mb: 2
          }}>
            <IconButton
              onClick={isRecording ? stopRecording : startRecording}
              sx={{
                width: 64,
                height: 64,
                backgroundColor: isRecording ? '#ff4444' : '#2196f3',
                '&:hover': {
                  backgroundColor: isRecording ? '#cc0000' : '#1976d2'
                }
              }}
              disabled={isLoading}
            >
              {isRecording ? <Stop sx={{ fontSize: 32, color: 'white' }} /> : <Mic sx={{ fontSize: 32, color: 'white' }} />}
            </IconButton>
            <IconButton
              onClick={clearTranscript}
              sx={{
                width: 48,
                height: 48,
                backgroundColor: '#f5f5f5',
                '&:hover': {
                  backgroundColor: '#e0e0e0'
                }
              }}
            >
              <Refresh />
            </IconButton>
          </Box>

          {isLoading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
              <CircularProgress />
            </Box>
          )}

          {error && (
            <Paper 
              sx={{ 
                p: 2, 
                bgcolor: '#ffebee',
                color: '#c62828',
                borderRadius: 1
              }}
            >
              <Typography>{error}</Typography>
            </Paper>
          )}

          {transcript && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
                Nội dung nhận dạng:
              </Typography>
              <Paper 
                sx={{ 
                  p: 3, 
                  bgcolor: '#f8f9fa',
                  borderRadius: 2,
                  minHeight: 100
                }}
              >
                <Typography sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                  {transcript}
                </Typography>
              </Paper>
            </Box>
          )}
        </Box>
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button 
          onClick={onClose} 
          variant="outlined"
          sx={{ 
            borderRadius: 2,
            px: 4,
            py: 1
          }}
        >
          Đóng
        </Button>
      </Box>
    </Box>
  );
};

export default AudioExtractor; 