import React, { useState } from 'react';
import { Upload, Button, message, Card, Typography, Space, Progress } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';
import axios from 'axios';

const { Title, Text } = Typography;

const AudioUploader: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [transcript, setTranscript] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (file: File) => {
    try {
      setIsProcessing(true);
      setError(null);
      setTranscript('');

      // Validate file size (max 25MB)
      if (file.size > 25 * 1024 * 1024) {
        throw new Error('File quá lớn. Vui lòng chọn file nhỏ hơn 25MB');
      }

      // Create form data
      const formData = new FormData();
      formData.append('audio', file);

      // Upload to AssemblyAI
      const uploadResponse = await axios.post('https://assembly.ai/upload', formData, {
        headers: {
          'authorization': '2f2b3a4f87574e2d9a23f5dd3975042e', // Thay bằng API key của bạn
          'Content-Type': 'application/json',
        },
      });

      // Lấy URL audio đã upload
      const audioUrl = uploadResponse.data.upload_url;

      // Gửi yêu cầu nhận dạng giọng nói
      const response = await axios.post('https://assembly.ai/transcript', {
        audio_url: audioUrl,
      }, {
        headers: {
          'authorization': '2f2b3a4f87574e2d9a23f5dd3975042e', // Thay bằng API key của bạn
        },
      });

      if (response.data.error) {
        throw new Error(response.data.error);
      }

      setTranscript(response.data.transcript);
      message.success('Đã chuyển đổi âm thanh thành văn bản!');

    } catch (error) {
      console.error('Error processing audio:', error);
      const errorMessage = error instanceof Error ? error.message : 'Có lỗi xảy ra khi xử lý file âm thanh';
      setError(errorMessage);
      message.error(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  const uploadProps = {
    accept: '.mp3,audio/mpeg',
    beforeUpload: (file: File) => {
      if (file.type !== 'audio/mpeg') {
        message.error('Chỉ hỗ trợ file MP3!');
        return false;
      }
      handleUpload(file);
      return false;
    },
    fileList,
    onChange: ({ fileList }: { fileList: UploadFile[] }) => {
      setFileList(fileList);
    },
    maxCount: 1,
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <Space direction="vertical" size="large" className="w-full">
        <div>
          <Title level={4}>Chuyển đổi âm thanh thành văn bản</Title>
          <Text className="text-gray-600">
            Upload file MP3 để chuyển đổi âm thanh tiếng Nhật thành văn bản
          </Text>
        </div>

        <Upload {...uploadProps}>
          <Button 
            icon={<UploadOutlined />} 
            loading={isProcessing}
            disabled={isProcessing}
          >
            Chọn file MP3
          </Button>
        </Upload>

        {isProcessing && (
          <div className="w-full">
            <Progress percent={100} status="active" />
            <Text className="text-gray-500 mt-2 block text-center">
              Đang xử lý âm thanh...
            </Text>
          </div>
        )}

        {error && (
          <div className="mt-4">
            <Text type="danger">{error}</Text>
          </div>
        )}

        {transcript && (
          <div className="mt-4">
            <Title level={5}>Kết quả:</Title>
            <div className="bg-gray-50 p-4 rounded-lg">
              <Text className="font-japanese text-lg">{transcript}</Text>
            </div>
          </div>
        )}

        <div className="text-gray-500 text-sm">
          <ul className="list-disc pl-4">
            <li>Chỉ hỗ trợ file MP3</li>
            <li>Kích thước file tối đa: 25MB</li>
            <li>Âm thanh nên rõ ràng để có kết quả tốt nhất</li>
          </ul>
        </div>
      </Space>
    </Card>
  );
};

export default AudioUploader; 