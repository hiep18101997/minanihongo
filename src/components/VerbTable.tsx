import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Typography, Space, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getN5Verbs, searchVerbs } from '../api/verbsApi';
import type { Verb, VerbExample } from '../types/verb';
import { SoundOutlined, AudioOutlined } from '@ant-design/icons';
import { generateExamples, speak } from '../utils/verbUtils';

const { Title, Text } = Typography;

// Component hiển thị ví dụ
const ExampleList: React.FC<{ examples: VerbExample[] }> = ({ examples }) => (
  <div className="space-y-2">
    {examples.map((example, index) => (
      <div key={index} className="bg-gray-50 p-3 rounded-lg">
        <div className="font-japanese text-lg">{example.japanese}</div>
        <div className="font-japanese text-sm text-gray-600">{example.reading}</div>
        <div className="text-sm text-gray-700">{example.meaning}</div>
      </div>
    ))}
  </div>
);

const VerbTable: React.FC = () => {
  const [verbs, setVerbs] = useState<Verb[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  useEffect(() => {
    loadVerbs();
  }, []);

  useEffect(() => {
    if (searchText) {
      handleSearch();
    } else {
      loadVerbs();
    }
  }, [searchText]);

  useEffect(() => {
    // Initialize speech recognition
    if ('webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'ja-JP';

      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchText(transcript);
        handleSearch();
      };

      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }
  }, []);

  const loadVerbs = async () => {
    setLoading(true);
    try {
      const data = await getN5Verbs();
      setVerbs(data);
    } catch (error) {
      console.error('Error loading verbs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const results = await searchVerbs(searchText);
      setVerbs(results);
    } catch (error) {
      console.error('Error searching verbs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSpeak = (text: string, event: React.MouseEvent) => {
    event.stopPropagation();
    speak(text);
  };

  const toggleListening = () => {
    if (!recognition) {
      console.error('Speech recognition not supported');
      return;
    }

    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  const columns: ColumnsType<Verb> = [
    {
      title: 'Động từ',
      dataIndex: 'ruForm',
      key: 'ruForm',
      className: 'font-japanese',
      render: (text: string) => (
        <Space>
          <span>{text}ます</span>
          <Button
            type="text"
            icon={<SoundOutlined />}
            onClick={(e) => handleSpeak(text + 'ます', e)}
            className="text-blue-500 hover:text-blue-700"
          />
        </Space>
      ),
    },
    {
      title: 'Cách đọc',
      dataIndex: 'reading',
      key: 'reading',
      className: 'font-japanese',
      render: (text: string) => text + 'ます',
      responsive: ['md'],
    },
    {
      title: 'Nghĩa',
      dataIndex: 'meaning',
      key: 'meaning',
    },
    {
      title: 'Loại',
      dataIndex: 'type',
      key: 'type',
      width: 100,
      responsive: ['lg'],
      render: (text: string) => {
        switch (text) {
          case 'ichidan':
            return <Tag color="blue">Nhóm 2</Tag>;
          case 'godan':
            return <Tag color="green">Nhóm 1</Tag>;
          case 'irregular':
            return <Tag color="red">Nhóm 3</Tag>;
          default:
            return <Tag>{text}</Tag>;
        }
      },
    },
    {
      title: 'Thể る',
      dataIndex: 'dictionaryForm',
      key: 'dictionaryForm',
      className: 'font-japanese',
      render: (text: string) => (
        <Space>
          <span>{text}</span>
          <Button
            type="text"
            icon={<SoundOutlined />}
            onClick={(e) => handleSpeak(text, e)}
            className="text-blue-500 hover:text-blue-700"
          />
        </Space>
      ),
    },
    {
      title: 'Thể て',
      dataIndex: 'teForm',
      key: 'teForm',
      className: 'font-japanese',
      render: (text: string) => (
        <Space>
          <span>{text}</span>
          <Button
            type="text"
            icon={<SoundOutlined />}
            onClick={(e) => handleSpeak(text, e)}
            className="text-blue-500 hover:text-blue-700"
          />
        </Space>
      ),
    },
    {
      title: 'Thể た',
      dataIndex: 'taForm',
      key: 'taForm',
      className: 'font-japanese',
      render: (text: string) => (
        <Space>
          <span>{text}</span>
          <Button
            type="text"
            icon={<SoundOutlined />}
            onClick={(e) => handleSpeak(text, e)}
            className="text-blue-500 hover:text-blue-700"
          />
        </Space>
      ),
    },
    {
      title: 'Thể たい',
      dataIndex: 'taiForm',
      key: 'taiForm',
      className: 'font-japanese',
      render: (text: string) => (
        <Space>
          <span>{text}</span>
          <Button
            type="text"
            icon={<SoundOutlined />}
            onClick={(e) => handleSpeak(text, e)}
            className="text-blue-500 hover:text-blue-700"
          />
        </Space>
      ),
    },
  ];

  const expandedRowRender = (record: Verb) => {
    const details = generateExamples(record);
    return (
      <div className="p-4 space-y-8">
        {/* Thông tin về nhóm động từ */}
        <div>
          <Title level={5} className="text-blue-600">Thông tin động từ</Title>
          <Text>
            Nhóm động từ: <Text strong>{record.type === 'ichidan' ? 'Nhóm 2 (いちだん)' : 
              record.type === 'godan' ? 'Nhóm 1 (ごだん)' : 
              'Nhóm 3 (ふきそく)'}</Text>
          </Text>
        </div>

        {/* Thể る */}
        <div>
          <Title level={5} className="text-blue-600">Thể る</Title>
          <Text className="block mb-3">{details.ruForm.explanation}</Text>
          <ExampleList examples={details.ruForm.examples} />
        </div>

        {/* Thể て */}
        <div>
          <Title level={5} className="text-blue-600">Thể て</Title>
          <Text className="block mb-3">{details.teForm.explanation}</Text>
          <ExampleList examples={details.teForm.examples} />
        </div>

        {/* Thể た */}
        <div>
          <Title level={5} className="text-blue-600">Thể た</Title>
          <Text className="block mb-3">{details.taForm.explanation}</Text>
          <ExampleList examples={details.taForm.examples} />
        </div>

        {/* Thể たい */}
        <div>
          <Title level={5} className="text-blue-600">Thể たい</Title>
          <Text className="block mb-3">{details.taiForm.explanation}</Text>
          <ExampleList examples={details.taiForm.examples} />
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Bảng chia động từ tiếng Nhật</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input
              placeholder="Tìm kiếm động từ..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                handleSearch();
              }}
              className="w-64"
            />
            <Button
              type="text"
              icon={<AudioOutlined />}
              onClick={toggleListening}
              className={`absolute right-2 top-1/2 -translate-y-1/2 ${isListening ? 'text-red-500' : ''}`}
              title="Nhấn để nói"
            />
          </div>
        </div>
      </div>
      
      <Table
        columns={columns}
        dataSource={verbs}
        loading={loading}
        rowKey="id"
        expandable={{
          expandedRowRender,
          expandRowByClick: true,
        }}
        pagination={{
          pageSize: 10,
          showSizeChanger: false,
          showTotal: (total) => `Tổng số: ${total} động từ`,
        }}
      />
    </div>
  );
};

export default VerbTable; 