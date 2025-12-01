import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { model } from '../lib/gemini';
import { experienceData, skillsData, projectsData, coursesData, aboutText } from '../data/constants';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const systemInstruction = `
أنت "سعد"، مستشار خبير يجمع بين تحليل البيانات (Power BI)، والتخطيط الاستراتيجي والأمني (SOPs, KPIs, Risk Assessment)، وتطوير الويب.
يجب أن تجيب على الأسئلة بناءً على المعلومات التالية فقط. إذا لم تجد إجابة في هذه المعلومات، قل بكل أدب: "لا أملك معلومات كافية للإجابة على هذا السؤال، لكن يمكنك التواصل معي مباشرة لمناقشته."

**نبذة عني:**
 ${aboutText}

**خبراتي العملية:**
- ${experienceData.map(exp => `${exp.title} (${exp.period}): ${exp.description}`).join('\n- ')}

**مهاراتي:**
- التقنية: ${skillsData.technical.join(', ')}.
- التحليلية: ${skillsData.analytical.join(', ')}.
- الإدارية: ${skillsData.management.join(', ')}.

**مشاريعي:**
- ${projectsData.map(proj => `${proj.title}: ${proj.description}`).join('\n- ')}

**دوراتي التدريبية (أمثلة):**
- ${coursesData.slice(0, 5).map(course => course.title).join('\n- ')}
ولدي العديد من الدورات الأخرى في مجالات الأمن، الجودة، والإدارة.

**نبرة الصوت:** احترافية، واثقة، ومباشرة. استخدم اللغة العربية الفصحى.
`;

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user' as const, text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const chatHistory = messages.map(msg => ({ role: msg.role, parts: [{ text: msg.text }] }));
      const chat = model.startChat({ history: chatHistory, systemInstruction });
      const result = await chat.sendMessage(input);
      const text = result.response.text();
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'عذرًا، حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقًا.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="fixed bottom-8 left-8 bg-teal-700 text-white p-4 rounded-full shadow-lg hover:bg-teal-800 transition-all z-50">
        <MessageCircle size={24} />
      </button>
      {isOpen && (
        <div className="fixed bottom-24 left-8 w-96 h-[500px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border border-gray-200">
          <div className="bg-teal-700 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2"><Bot size={20} /><span className="font-semibold">مساعد سعد الذكي</span></div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && <p className="text-gray-500 text-center">مرحبًا! أنا مساعد سعد الذكي. كيف يمكنني مساعدتك اليوم؟</p>}
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`flex items-start gap-2 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`p-2 rounded-full ${msg.role === 'user' ? 'bg-teal-700' : 'bg-gray-200'}`}>{msg.role === 'user' ? <User size={16} className="text-white"/> : <Bot size={16} className="text-gray-700"/>}</div>
                  <div className={`p-3 rounded-lg ${msg.role === 'user' ? 'bg-teal-100' : 'bg-gray-100'}`}><p className="text-sm">{msg.text}</p></div>
                </div>
              </div>
            ))}
            {isLoading && <div className="text-center text-gray-500">...يكتب</div>}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t border-gray-200 flex items-center gap-2">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-teal-700" placeholder="اكتب سؤالك..." disabled={isLoading}/>
            <button onClick={handleSend} disabled={isLoading} className="bg-teal-700 text-white p-2 rounded-full hover:bg-teal-800 transition-colors disabled:opacity-50"><Send size={20} /></button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;