import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const AIAssistantChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showInitialPrompt, setShowInitialPrompt] = useState(true);
  const messagesEndRef = useRef(null);

  const quickActions = [
    { text: "Tell me about Youssef\'s AI projects", icon: "Briefcase" },
    { text: "What are his technical skills?", icon: "Code" },
    { text: "Show me his experience", icon: "Clock" },
    { text: "How can I contact him?", icon: "MessageCircle" }
  ];

  const aiResponses = {
    "tell me about youssef's ai projects": `I'd be happy to showcase Youssef's AI projects! He has developed several impressive solutions:

🚀 **HireGenius - AI-Based Intelligent Recruitment System** - NLP + YOLOv8 + CNN-BiLSTM for comprehensive candidate evaluation
🔍 **3D Object Classification using DGCNN** - Advanced 3D shape recognition with ModelNet10 dataset and Streamlit interface
� **Web Scraper Application** - Full-stack React + FastAPI + WebSocket solution with multi-format export
⚙️ **Automated IT Fault Detection System** - Machine Learning-powered predictive analytics for system reliability
🎨 **Realistic Image Generation with GANs** - Synthetic face generation using Convolutional Neural Networks

Would you like to explore any specific project in detail?`,

    "what are his technical skills": `Youssef has expertise across the full AI/ML stack:

🧠 **Programming Languages**: Python, Java, JavaScript, PHP, Scala
🔧 **AI & Machine Learning**: Machine Learning, Deep Learning, NLP, GANs, Predictive Models, LLMs, RAG
📊 **Computer Vision**: OpenCV, 3D CNN, YOLOv8, Pillow
� **Web Technologies**: HTML, CSS, React, FastAPI, REST APIs
🗄️ **Database Management**: SQL, NoSQL (MongoDB, Redis, Cassandra, Neo4j), PostgreSQL
⚙️ **DevOps & Infrastructure**: CI/CD (Jenkins, GitLab CI), Terraform, CloudFormation, Docker, Kubernetes

He maintains Oracle Cloud certifications and continuously updates his skills. Want to see the detailed skills matrix?`,

    "show me his experience": `Here's Youssef's professional journey:

🎯 **2025 - Present**: AI Specialist Technician (Seeking Opportunities)
   - Specialized in Artificial Intelligence and Data Engineering
   - Expert in Machine Learning, Deep Learning, and NLP
   - Trilingual professional (Arabic, French, English)

🔬 **02/2025 - 06/2025**: AI Developer Intern at 3d Smart Factory, Mohammedia
   - Developed 3D object classification system using DGCNN with ModelNet10
   - Created interactive Streamlit application for real-time classification
   - Advanced machine learning techniques implementation

📈 **08/2024 - 09/2024**: AI Development Intern at HardTech Maroc, Casablanca
   - Designed automated IT fault detection system using ML algorithms
   - Comprehensive data analysis and predictive modeling
   - Enhanced IT infrastructure reliability

🌱 **2023 - 2025**: DUT in AI and Data Engineering at EST Nador
   - Comprehensive training in AI, ML, and Data Engineering
   - Final project: HireGenius AI recruitment system
   - Strong foundation in Python, computer vision, and web development

Would you like more details about any specific role or project?`,

    "how can i contact him": `Great! Here are the best ways to reach Youssef:

📧 **Professional Inquiries**: youssefchlih.ai@gmail.com
� **Phone**: 0606544498
�💼 **LinkedIn**: linkedin.com/in/youssef-chlih
� **Location**: Nador, Morocco

**Response Time**: Usually within 24 hours for professional inquiries

**Best for**:
- AI Specialist Technician opportunities
- Data Engineering collaborations
- Technical consultations and projects
- Internship and entry-level positions

**Languages**: Trilingual communication in Arabic, French, and English

Would you like me to help you draft a message or provide more details about his availability?`,

    "default": `Hello! I'm Youssef's AI assistant, here to help you learn more about his work and expertise. 

I can provide information about:
- His AI/ML projects and achievements
- Technical skills and certifications  
- Professional experience and background
- Contact information and availability

What would you like to know? You can ask me anything or use the quick actions below!`
  };

  useEffect(() => {
    // Show chat after 30 seconds
    const timer = setTimeout(() => {
      if (!isOpen && showInitialPrompt) {
        setIsOpen(true);
        setMessages([{
          id: 1,
          type: 'ai',
          content: aiResponses?.default,
          timestamp: new Date()
        }]);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [isOpen, showInitialPrompt]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (message = inputValue) => {
    if (!message?.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setShowInitialPrompt(false);

    // Simulate AI thinking time
    setTimeout(() => {
      const normalizedMessage = message?.toLowerCase();
      let response = aiResponses?.default;

      // Find matching response
      for (const [key, value] of Object.entries(aiResponses)) {
        if (key !== 'default' && normalizedMessage?.includes(key?.toLowerCase())) {
          response = value;
          break;
        }
      }

      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (action) => {
    handleSendMessage(action?.text);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages?.length === 0) {
      setMessages([{
        id: 1,
        type: 'ai',
        content: aiResponses?.default,
        timestamp: new Date()
      }]);
    }
  };

  const formatTime = (timestamp) => {
    return timestamp?.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          variant="default"
          size="icon"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary shadow-intelligent-hover interactive-lift"
        >
          <Icon name={isOpen ? "X" : "MessageCircle"} size={24} color="white" />
        </Button>
        
        {/* Notification Badge */}
        {!isOpen && showInitialPrompt && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center animate-pulse">
            <span className="text-xs font-cta text-white">1</span>
          </div>
        )}
      </div>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] h-[500px] bg-card border border-border rounded-2xl shadow-intelligent-hover z-40 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="Bot" size={16} color="white" />
                </div>
                <div>
                  <h3 className="font-cta text-sm">AI Assistant</h3>
                  <p className="text-xs opacity-90">Ask me about Youssef</p>
                </div>
              </div>
              <Button
                onClick={toggleChat}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 w-8 h-8"
              >
                <Icon name="Minimize2" size={16} />
              </Button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages?.map((message) => (
              <div
                key={message?.id}
                className={`flex ${message?.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${
                  message?.type === 'user' ?'bg-primary text-primary-foreground' :'bg-muted text-foreground'
                } rounded-2xl px-4 py-3`}>
                  <div className="whitespace-pre-line text-sm font-body leading-relaxed">
                    {message?.content}
                  </div>
                  <div className={`text-xs mt-2 opacity-70 ${
                    message?.type === 'user' ? 'text-right' : 'text-left'
                  }`}>
                    {formatTime(message?.timestamp)}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages?.length <= 1 && !isTyping && (
            <div className="p-4 border-t border-border">
              <div className="grid grid-cols-2 gap-2">
                {quickActions?.map((action, index) => (
                  <Button
                    key={index}
                    onClick={() => handleQuickAction(action)}
                    variant="outline"
                    size="sm"
                    className="text-xs font-body text-left justify-start h-auto py-2 px-3"
                  >
                    <Icon name={action?.icon} size={14} className="mr-2 flex-shrink-0" />
                    <span className="truncate">{action?.text}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Ask me anything about Youssef..."
                value={inputValue}
                onChange={(e) => setInputValue(e?.target?.value)}
                onKeyPress={(e) => e?.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button
                onClick={() => handleSendMessage()}
                variant="default"
                size="icon"
                disabled={!inputValue?.trim() || isTyping}
                className="bg-primary hover:bg-primary/90"
              >
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistantChat;