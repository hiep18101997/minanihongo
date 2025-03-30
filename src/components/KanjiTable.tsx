import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Typography, Tag, Tooltip, Radio } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useDebounce } from '../hooks/useDebounce';
import { getAllKanjis, searchKanjis } from '../api/kanjiApi';
import type { Kanji } from '../data/n5kanjis';

const { Title, Text } = Typography;

const KanjiTable: React.FC = () => {
  const [kanjis, setKanjis] = useState<Kanji[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'N5' | 'N4'>('all');
  const debouncedSearchText = useDebounce(searchText, 500);

  useEffect(() => {
    loadKanjis();
  }, []);

  useEffect(() => {
    if (debouncedSearchText) {
      handleSearch();
    } else {
      loadKanjis();
    }
  }, [debouncedSearchText, selectedLevel]);

  const loadKanjis = async () => {
    setLoading(true);
    try {
      const data = await getAllKanjis();
      setKanjis(selectedLevel === 'all' ? data : data.filter(k => k.jlptLevel === selectedLevel));
    } catch (error) {
      console.error('Error loading kanjis:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const results = await searchKanjis(debouncedSearchText, selectedLevel === 'all' ? undefined : selectedLevel);
      setKanjis(results);
    } catch (error) {
      console.error('Error searching kanjis:', error);
    } finally {
      setLoading(false);
    }
  };

  const columns: ColumnsType<Kanji> = [
    {
      title: 'Kanji',
      dataIndex: 'character',
      key: 'character',
      className: 'font-japanese text-2xl text-center',
      width: 100,
    },
    {
      title: 'Nghĩa',
      dataIndex: 'meaning',
      key: 'meaning',
    },
    {
      title: 'Âm On',
      dataIndex: 'onReading',
      key: 'onReading',
      className: 'font-japanese',
      render: (text: string) => (
        <div className="space-x-2">
          {text.split('、').map((reading, index) => (
            <Tag key={index} color="blue">{reading}</Tag>
          ))}
        </div>
      ),
    },
    {
      title: 'Âm Kun',
      dataIndex: 'kunReading',
      key: 'kunReading',
      className: 'font-japanese',
      render: (text: string) => (
        <div className="space-x-2">
          {text.split('、').map((reading, index) => (
            <Tag key={index} color="green">{reading}</Tag>
          ))}
        </div>
      ),
    },
    {
      title: 'Số nét',
      dataIndex: 'strokeCount',
      key: 'strokeCount',
      width: 100,
      align: 'center',
      sorter: (a, b) => a.strokeCount - b.strokeCount,
    },
    {
      title: 'JLPT',
      dataIndex: 'jlptLevel',
      key: 'jlptLevel',
      width: 100,
      align: 'center',
      render: (level: string) => (
        <Tag color={level === 'N5' ? 'purple' : 'orange'}>{level}</Tag>
      ),
      filters: [
        { text: 'N5', value: 'N5' },
        { text: 'N4', value: 'N4' },
      ],
      onFilter: (value, record) => record.jlptLevel === value,
    },
  ];

  const expandedRowRender = (record: Kanji) => {
    return (
      <div className="p-4 space-y-6">
        <div>
          <Title level={5} className="text-blue-600 mb-4">Ví dụ</Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {record.examples.map((example, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="font-japanese text-xl mb-2">{example.word}</div>
                <div className="font-japanese text-sm text-gray-600 mb-1">{example.reading}</div>
                <div className="text-sm text-gray-700">{example.meaning}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Học Kanji JLPT N5-N4</h1>
          <Radio.Group 
            value={selectedLevel} 
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="mb-4"
          >
            <Radio.Button value="all">Tất cả</Radio.Button>
            <Radio.Button value="N5">N5</Radio.Button>
            <Radio.Button value="N4">N4</Radio.Button>
          </Radio.Group>
        </div>
        <div className="flex items-center gap-4">
          <Input
            placeholder="Tìm kiếm..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-64"
          />
        </div>
      </div>
      
      <Table
        columns={columns}
        dataSource={kanjis}
        loading={loading}
        rowKey="id"
        expandable={{
          expandedRowRender,
          expandRowByClick: true,
        }}
        pagination={{
          pageSize: 20,
          showSizeChanger: false,
          showTotal: (total) => `Tổng số: ${total} Kanji`,
        }}
      />
    </div>
  );
};

export default KanjiTable;