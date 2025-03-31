import React, { useState } from 'react';
import { Input, Button, Card, Typography, Space, Alert, Spin } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface DialogueLine {
  japanese: string;
  vietnamese: string;
}

const DialogueExtractor: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dialogue, setDialogue] = useState<DialogueLine[] | null>(null);

  const handleExtract = async () => {
    if (!url) {
      setError('Vui lòng nhập URL');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/extract-dialogue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Không thể trích xuất hội thoại');
      }

      const data = await response.json();
      setDialogue(data.dialogue);
    } catch (err) {
      console.error('Error extracting dialogue:', err);
      setError('Có lỗi xảy ra khi trích xuất hội thoại');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <Title level={2} className="mb-6">Trích xuất hội thoại</Title>
      
      <div className="mb-6">
        <Space.Compact style={{ width: '100%' }}>
          <Input
            placeholder="Nhập URL hội thoại"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            prefix={<MessageOutlined />}
          />
          <Button 
            type="primary" 
            onClick={handleExtract}
            loading={loading}
          >
            Trích xuất
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
      ) : dialogue && (
        <div className="space-y-4">
          <Card className="bg-gray-50">
            <div className="space-y-4">
              <div>
                <Text strong>Hội thoại trích xuất:</Text>
              </div>
              <div className="space-y-2">
                {dialogue.map((line, index) => (
                  <div key={index} className="space-y-1">
                    <Text className="font-japanese text-lg block">{line.japanese}</Text>
                    <Text className="text-gray-700 block">{line.vietnamese}</Text>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default DialogueExtractor; 