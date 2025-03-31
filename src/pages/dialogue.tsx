import React from 'react';
import DialogueExtractor from '../components/DialogueExtractor';
import Layout from '../components/Layout';

const DialoguePage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <DialogueExtractor />
      </div>
    </Layout>
  );
};

export default DialoguePage; 