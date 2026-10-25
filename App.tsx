import React, { useState } from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Navbar } from './components/Navbar';
import { Storefront } from './components/Storefront';
import { AdminPanel } from './components/AdminPanel';
import { MyPurchases } from './components/MyPurchases';
import { GoogleSitesEmbed } from './components/GoogleSitesEmbed';
import { ZipExporter } from './components/ZipExporter';
import { RechargeModal } from './components/RechargeModal';
import { AuthModal } from './components/AuthModal';
import { MessageSquare, ShieldCheck, Heart } from 'lucide-react';

function MainApp() {
  const [activeTab, setActiveTab] = useState<'store' | 'purchases' | 'admin' | 'embed' | 'export'>('store');
  const [isRechargeOpen, setIsRechargeOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const { settings, currency } = useStore();

  const getCleanWhatsappNumber = () => settings.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0d14] text-slate-100 font-sans selection:bg-indigo-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenRecharge={() => setIsRechargeOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      {/* Main View Container */}
      <main className="flex-1">
        {activeTab === 'store' && (
          <Storefront
            onOpenRecharge={() => setIsRechargeOpen(true)}
            onOpenAuth={() => setIsAuthOpen(true)}
            onNavigateToPurchases={() => setActiveTab('purchases')}
          />
        )}

        {activeTab === 'purchases' && (
          <MyPurchases onNavigateToStore={() => setActiveTab('store')} />
        )}

        {activeTab === 'admin' && <AdminPanel />}

        {activeTab === 'embed' && <GoogleSitesEmbed />}

        {activeTab === 'export' && <ZipExporter />}
      </main>

      {/* Floating Quick WhatsApp Recharge / Support Button */}
      <a
        href={`https://wa.me/${getCleanWhatsappNumber()}?text=${encodeURIComponent('¡Hola! Deseo más información o recargar saldo en StreamVIP.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-30 p-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl shadow-emerald-950/60 transition-transform hover:scale-110 flex items-center justify-center group"
        title="Contactar soporte por WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-bold text-xs pl-0 group-hover:pl-2">
          Atención WhatsApp
        </span>
      </a>

      {/* Modals */}
      <RechargeModal
        isOpen={isRechargeOpen}
        onClose={() => setIsRechargeOpen(false)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      {/* Clean Footer (Anti-slop compliant) */}
      <footer className="border-t border-slate-800/80 bg-[#090b10] py-8 px-4 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">StreamVIP</span>
            <span>·</span>
            <span>Plataformas Premium de Streaming</span>
            <span>·</span>
            <span className="font-mono text-indigo-400">T.C. S/ {settings.exchangeRate.toFixed(2)} PEN</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button
              onClick={() => setActiveTab('store')}
              className="hover:text-white transition-colors"
            >
              Tienda
            </button>
            <button
              onClick={() => setActiveTab('purchases')}
              className="hover:text-white transition-colors"
            >
              Mis Cuentas
            </button>
            <button
              onClick={() => setActiveTab('embed')}
              className="hover:text-white transition-colors"
            >
              Código Google Sites
            </button>
            <button
              onClick={() => setActiveTab('export')}
              className="hover:text-white transition-colors"
            >
              Descargar ZIP
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <MainApp />
    </StoreProvider>
  );
}
