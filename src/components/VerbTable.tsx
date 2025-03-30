import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Typography, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getN5Verbs, searchVerbs } from '../api/verbsApi';
import type { Verb } from '../data/n5verbs';
import { useDebounce } from '../hooks/useDebounce';
import { SoundOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface VerbExample {
  japanese: string;
  reading: string;
  meaning: string;
}

interface VerbDetail {
  ruForm: {
    explanation: string;
    examples: VerbExample[];
  };
  teForm: {
    explanation: string;
    examples: VerbExample[];
  };
  taForm: {
    explanation: string;
    examples: VerbExample[];
  };
  taiForm: {
    explanation: string;
    examples: VerbExample[];
  };
}

// Hàm tạo ví dụ cho động từ
const generateExamples = (verb: Verb): VerbDetail => {
  return {
    ruForm: {
      explanation: "Thể る là dạng từ điển của động từ, dùng để diễn tả hành động chung chung không có thời gian cụ thể.",
      examples: [
        {
          japanese: `毎日${verb.dictionaryForm}。`,
          reading: `まいにち${verb.reading}。`,
          meaning: `Hàng ngày tôi ${verb.meaning.toLowerCase()}.`,
        },
        {
          japanese: `明日${verb.ruForm}ます。`,
          reading: `あした${verb.ruForm}ます。`,
          meaning: `Ngày mai tôi sẽ ${verb.meaning.toLowerCase()}.`,
        },
      ],
    },
    teForm: {
      explanation: "Thể て dùng để nối các hành động, diễn tả hành động đang diễn ra, hoặc dùng để yêu cầu ai đó làm gì.",
      examples: [
        {
          japanese: `${verb.teForm}います。`,
          reading: `${verb.teForm}います。`,
          meaning: `Đang ${verb.meaning.toLowerCase()}.`,
        },
        {
          japanese: `${verb.teForm}ください。`,
          reading: `${verb.teForm}ください。`,
          meaning: `Hãy ${verb.meaning.toLowerCase()}.`,
        },
      ],
    },
    taForm: {
      explanation: "Thể た dùng để diễn tả hành động đã hoàn thành trong quá khứ.",
      examples: [
        {
          japanese: `昨日${verb.taForm}。`,
          reading: `きのう${verb.taForm}。`,
          meaning: `Hôm qua đã ${verb.meaning.toLowerCase()}.`,
        },
        {
          japanese: `もう${verb.taForm}？`,
          reading: `もう${verb.taForm}？`,
          meaning: `Đã ${verb.meaning.toLowerCase()} chưa?`,
        },
      ],
    },
    taiForm: {
      explanation: "Thể たい dùng để diễn tả mong muốn làm gì đó.",
      examples: [
        {
          japanese: `${verb.taiForm}です。`,
          reading: `${verb.taiForm}です。`,
          meaning: `Tôi muốn ${verb.meaning.toLowerCase()}.`,
        },
        {
          japanese: `${verb.taiForm}と思います。`,
          reading: `${verb.taiForm}とおもいます。`,
          meaning: `Tôi nghĩ là tôi muốn ${verb.meaning.toLowerCase()}.`,
        },
      ],
    },
  };
};

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
  const debouncedSearchText = useDebounce(searchText, 500);

  useEffect(() => {
    loadVerbs();
  }, []);

  useEffect(() => {
    if (debouncedSearchText) {
      handleSearch();
    } else {
      loadVerbs();
    }
  }, [debouncedSearchText]);

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
      const results = await searchVerbs(debouncedSearchText);
      setVerbs(results);
    } catch (error) {
      console.error('Error searching verbs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSearchText('');
    loadVerbs();
  };

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    
    // Lấy cài đặt từ localStorage
    const selectedVoice = localStorage.getItem('selectedVoice');
    const rate = localStorage.getItem('speechRate');
    const pitch = localStorage.getItem('speechPitch');
    
    // Áp dụng cài đặt
    if (selectedVoice) {
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(v => v.voiceURI === selectedVoice);
      if (voice) utterance.voice = voice;
    }
    
    if (rate) utterance.rate = parseFloat(rate);
    if (pitch) utterance.pitch = parseFloat(pitch);
    
    window.speechSynthesis.speak(utterance);
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
            onClick={(e) => {
              e.stopPropagation();
              speak(text + 'ます');
            }}
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
      render: (text: string, record: Verb) => (
        <Space>
          <span>{record.reading}ます</span>
          <Button 
            type="text" 
            icon={<SoundOutlined />} 
            onClick={(e) => {
              e.stopPropagation();
              speak(record.reading + 'ます');
            }}
            className="text-blue-500 hover:text-blue-700"
          />
        </Space>
      ),
    },
    {
      title: 'Nghĩa',
      dataIndex: 'meaning',
      key: 'meaning',
    },
    {
      title: 'Nhóm',
      key: 'group',
      render: (_, record) => (
        <div className="flex items-center">
          <span className={`px-2 py-1 rounded-full text-sm ${
            record.group === 'ichidan' 
              ? 'bg-green-100 text-green-800' 
              : record.group === 'godan'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-purple-100 text-purple-800'
          }`}>
            {record.group === 'ichidan' 
              ? 'Nhóm 2' 
              : record.group === 'godan'
              ? 'Nhóm 1'
              : 'Bất quy tắc'}
          </span>
        </div>
      ),
      filters: [
        { text: 'Nhóm 1 (Godan)', value: 'godan' },
        { text: 'Nhóm 2 (Ichidan)', value: 'ichidan' },
        { text: 'Bất quy tắc', value: 'irregular' },
      ],
      onFilter: (value, record) => record.group === value,
    },
    {
      title: 'Thể る',
      dataIndex: 'dictionaryForm',
      key: 'dictionaryForm',
      className: 'font-japanese',
      render: (text: string, record: Verb) => (
        <Space>
          <span>{record.dictionaryForm}</span>
          <Button 
            type="text" 
            icon={<SoundOutlined />} 
            onClick={(e) => {
              e.stopPropagation();
              speak(record.dictionaryForm);
            }}
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
      render: (text: string, record: Verb) => (
        <Space>
          <span>{record.teForm}</span>
          <Button 
            type="text" 
            icon={<SoundOutlined />} 
            onClick={(e) => {
              e.stopPropagation();
              speak(record.teForm);
            }}
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
      render: (text: string, record: Verb) => (
        <Space>
          <span>{record.taForm}</span>
          <Button 
            type="text" 
            icon={<SoundOutlined />} 
            onClick={(e) => {
              e.stopPropagation();
              speak(record.taForm);
            }}
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
      render: (text: string, record: Verb) => (
        <Space>
          <span>{record.taiForm}</span>
          <Button 
            type="text" 
            icon={<SoundOutlined />} 
            onClick={(e) => {
              e.stopPropagation();
              speak(record.taiForm);
            }}
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
            Nhóm động từ: <Text strong>{record.group === 'ichidan' ? 'Nhóm 2 (いちだん)' : 
              record.group === 'godan' ? 'Nhóm 1 (ごだん)' : 
              'Bất quy tắc (ふきそく)'}</Text>
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
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Bảng chia động từ tiếng Nhật</h1>
        <div className="flex items-center gap-4">
          <Input
            placeholder="Tìm kiếm..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-64"
          />
          <Button onClick={handleReset}>
            Đặt lại
          </Button>
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