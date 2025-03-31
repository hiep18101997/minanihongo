import React, { useState, useRef } from 'react';
import { Input, Button, Card, Typography, Space, Alert, Spin } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface TranscriptionResult {
  japanese: string;
  vietnamese?: string;
}

const AudioTranscriber: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [transcription, setTranscription] = useState<TranscriptionResult | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const startRecognition = () => {
    if (!audioRef.current) return;

    // Tạo SpeechRecognition instance
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setError('Trình duyệt của bạn không hỗ trợ Web Speech API');
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    // Cấu hình recognition
    recognition.lang = 'ja-JP';
    recognition.continuous = true;
    recognition.interimResults = true;

    // Xử lý kết quả
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');

      setTranscription({
        japanese: transcript,
      });
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error('Speech recognition error:', event.error);
      setError(`Lỗi nhận dạng giọng nói: ${event.error}`);
    };

    recognition.onend = () => {
      setLoading(false);
    };

    // Bắt đầu nhận dạng
    recognition.start();
    setLoading(true);
  };

  const stopRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setLoading(false);
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleTranscribe = async () => {
    if (!url) {
      setError('Vui lòng nhập URL');
      return;
    }

    // Kiểm tra URL hợp lệ
    try {
      new URL(url);
    } catch {
      setError('URL không hợp lệ');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Tải file âm thanh
      const response = await fetch(url, {
        mode: 'cors',
        headers: {
          'Accept': 'audio/*',
        }
      });

      if (!response.ok) {
        throw new Error(`Không thể tải file âm thanh: ${response.status} ${response.statusText}`);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType?.includes('audio/')) {
        throw new Error('URL không phải là file âm thanh hợp lệ');
      }

      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);

      // Tạo audio element
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      // Xử lý sự kiện khi audio đã sẵn sàng
      audio.oncanplaythrough = () => {
        startRecognition();
      };

      // Xử lý lỗi
      audio.onerror = (e) => {
        console.error('Audio error:', e);
        setError('Không thể phát file âm thanh. Vui lòng kiểm tra lại URL và thử lại.');
        setLoading(false);
      };

      // Xử lý khi audio kết thúc
      audio.onended = () => {
        stopRecognition();
      };

      // Bắt đầu phát audio
      await audio.play();
    } catch (err) {
      console.error('Error handling audio:', err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Có lỗi xảy ra khi xử lý file âm thanh. Vui lòng thử lại.');
      }
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <Title level={2} className="mb-6">Trích xuất văn bản từ âm thanh</Title>
      
      <div className="mb-6">
        <Space.Compact style={{ width: '100%' }}>
          <Input
            placeholder="Nhập URL file âm thanh (mp3, wav, ogg)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            prefix={<AudioOutlined />}
          />
          <Button 
            type="primary" 
            onClick={loading ? stopRecognition : handleTranscribe}
            loading={loading}
          >
            {loading ? 'Dừng' : 'Trích xuất'}
          </Button>
        </Space.Compact>
      </div>

      {error && (
        <Alert
          message="Lỗi"
          description={error}
          type="error"
          showIcon
          className="mb-4"
        />
      )}

      {loading ? (
        <div className="text-center py-8">
          <Spin size="large" />
        </div>
      ) : transcription && (
        <div className="space-y-4">
          <Card className="bg-gray-50">
            <div className="space-y-4">
              <div>
                <Text strong>Văn bản trích xuất:</Text>
              </div>
              <div className="space-y-2">
                <Text className="font-japanese text-lg block">{transcription.japanese}</Text>
                {transcription.vietnamese && (
                  <Text className="text-gray-700 block">{transcription.vietnamese}</Text>
                )}
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AudioTranscriber; 