import React, { useState, useEffect } from 'react';
import { Card, Select, Slider, Space, Typography } from 'antd';
import type { SelectProps } from 'antd';

const { Title, Text } = Typography;

interface Voice {
  name: string;
  lang: string;
  localService: boolean;
  voiceURI: string;
}

const Settings: React.FC = () => {
  const [voices, setVoices] = useState<Voice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>('');
  const [rate, setRate] = useState<number>(1);
  const [pitch, setPitch] = useState<number>(1);

  useEffect(() => {
    // Lấy danh sách giọng đọc khi component được mount
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      const japaneseVoices = availableVoices.filter(voice => voice.lang.startsWith('ja'));
      setVoices(japaneseVoices);
      
      // Lưu cài đặt vào localStorage nếu có
      const savedVoice = localStorage.getItem('selectedVoice');
      const savedRate = localStorage.getItem('speechRate');
      const savedPitch = localStorage.getItem('speechPitch');
      
      if (savedVoice) setSelectedVoice(savedVoice);
      if (savedRate) setRate(parseFloat(savedRate));
      if (savedPitch) setPitch(parseFloat(savedPitch));
    };

    // Đợi cho đến khi danh sách giọng đọc được load
    if (window.speechSynthesis.getVoices().length > 0) {
      loadVoices();
    } else {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const handleVoiceChange = (value: string) => {
    setSelectedVoice(value);
    localStorage.setItem('selectedVoice', value);
  };

  const handleRateChange = (value: number) => {
    setRate(value);
    localStorage.setItem('speechRate', value.toString());
  };

  const handlePitchChange = (value: number) => {
    setPitch(value);
    localStorage.setItem('speechPitch', value.toString());
  };

  const voiceOptions: SelectProps['options'] = voices.map(voice => ({
    label: `${voice.name} (${voice.lang})`,
    value: voice.voiceURI,
  }));

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Title level={2}>Cài đặt giọng đọc</Title>
      
      <Card className="mb-6">
        <Space direction="vertical" size="large" className="w-full">
          <div>
            <Text strong>Chọn giọng đọc:</Text>
            <Select
              className="w-full"
              options={voiceOptions}
              value={selectedVoice}
              onChange={handleVoiceChange}
            />
          </div>

          <div>
            <Text strong>Tốc độ đọc:</Text>
            <Slider
              min={0.5}
              max={2}
              step={0.1}
              value={rate}
              onChange={handleRateChange}
              className="mt-2"
            />
            <div className="text-center text-gray-500">{rate}x</div>
          </div>

          <div>
            <Text strong>Cao độ:</Text>
            <Slider
              min={0.5}
              max={2}
              step={0.1}
              value={pitch}
              onChange={handlePitchChange}
              className="mt-2"
            />
            <div className="text-center text-gray-500">{pitch}x</div>
          </div>
        </Space>
      </Card>

      <Card>
        <Title level={4}>Hướng dẫn sử dụng</Title>
        <ul className="list-disc pl-6 space-y-2">
          <li>Chọn giọng đọc phù hợp từ danh sách</li>
          <li>Điều chỉnh tốc độ đọc (0.5x - 2x)</li>
          <li>Điều chỉnh cao độ (0.5x - 2x)</li>
          <li>Cài đặt sẽ được lưu tự động</li>
        </ul>
      </Card>
    </div>
  );
};

export default Settings; 