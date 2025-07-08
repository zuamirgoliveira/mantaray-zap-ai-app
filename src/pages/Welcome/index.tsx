import { useNavigate } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 flex flex-col">
      <header className="flex items-center justify-center p-4">
        <img src="./public/mantaray-white-logo.svg" alt="Manta Ray Zap AI" className="transform scale-50" />
      </header>

      <main className="flex-grow flex flex-col justify-center px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-justify leading-relaxed">
            Manta Ray Zap AI é um aplicativo desktop nativo para Windows que conecta sua conta pessoal de WhatsApp ao ChatGPT. Com ele você:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Faz o emparelhamento rápido via QR Code, sem expor sua interface de mensagens</li>
            <li>Define “personas” que moldam o estilo e tom das respostas geradas pela IA</li>
            <li>Gera resumos diários dos seus grupos para acompanhar o que importa sem precisar ler cada mensagem</li>
          </ul>
          <p className="text-justify leading-relaxed mt-4">
            Comece a usar para automatizar e enriquecer suas conversas com a inteligência do ChatGPT, tudo de forma simples e segura!
          </p>

          <div className="flex justify-center mt-8">
            <button
              onClick={handleStart}
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Começar!
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Welcome;