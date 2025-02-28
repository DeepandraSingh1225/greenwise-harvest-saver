
import { useState, useRef, useEffect } from 'react';
import { Send, X, Minimize2, Maximize2, Bot, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I am GreenWise Assistant. How can I help you with farming or post-harvest solutions today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "I can help you with that! Our post-harvest solutions can reduce crop losses by up to 40%.",
        "To predict your crop yield, go to our Yield Prediction page and enter your farm details.",
        "There are several government schemes available for farmers. Check our Government Schemes page for eligibility details.",
        "Proper storage is crucial for maintaining crop quality. Consider using climate-controlled storage for perishable produce.",
        "Our data shows that implementing a cold chain can extend shelf life by 2-3 times for many fruits and vegetables."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: Message = {
        id: Date.now().toString(),
        content: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (isMinimized) setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div id="chatbot" className="fixed bottom-6 right-6 z-50">
      {/* Chatbot button */}
      {!isOpen && (
        <Button 
          onClick={toggleChatbot}
          className="rounded-full h-14 w-14 shadow-lg bg-primary hover:bg-primary/90 text-white"
        >
          <Bot size={24} />
        </Button>
      )}
      
      {/* Chatbot window */}
      {isOpen && (
        <div 
          className={cn(
            "bg-white rounded-lg shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200",
            isMinimized ? "w-72 h-16" : "w-80 sm:w-96 h-[500px]"
          )}
        >
          {/* Header */}
          <div className="bg-primary text-white p-3 flex justify-between items-center">
            <div className="flex items-center">
              <Bot size={20} className="mr-2" />
              <h3 className="font-medium">GreenWise Assistant</h3>
            </div>
            <div className="flex space-x-1">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleMinimize}
                className="h-6 w-6 text-white hover:bg-primary/80 rounded-full"
              >
                {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleChatbot}
                className="h-6 w-6 text-white hover:bg-primary/80 rounded-full"
              >
                <X size={14} />
              </Button>
            </div>
          </div>
          
          {!isMinimized && (
            <>
              {/* Messages area */}
              <ScrollArea className="p-4 h-[400px]">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={cn(
                      "mb-4 max-w-[80%] rounded-lg p-3",
                      message.sender === 'user' 
                        ? "ml-auto bg-primary/10 text-primary-foreground" 
                        : "mr-auto bg-gray-100"
                    )}
                  >
                    <div className="flex items-start mb-1">
                      <div className={cn(
                        "h-6 w-6 rounded-full flex items-center justify-center mr-2 text-white text-xs",
                        message.sender === 'user' ? "bg-blue-500" : "bg-primary"
                      )}>
                        {message.sender === 'user' ? <User size={12} /> : <Bot size={12} />}
                      </div>
                      <div>
                        <p className="text-sm font-medium">
                          {message.sender === 'user' ? 'You' : 'GreenWise Assistant'}
                        </p>
                        <p className="text-xs text-gray-500">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm pl-8">{message.content}</p>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-center space-x-2 text-gray-500 mb-4">
                    <Bot size={16} />
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </ScrollArea>
              
              {/* Input area */}
              <div className="p-3 border-t border-gray-200">
                <div className="flex space-x-2">
                  <Textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="min-h-[40px] max-h-[120px] resize-none"
                    rows={1}
                  />
                  <Button 
                    onClick={handleSendMessage}
                    disabled={inputValue.trim() === ''}
                    size="icon"
                    className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90"
                  >
                    <Send size={18} />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
