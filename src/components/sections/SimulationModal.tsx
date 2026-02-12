'use client';

import { useState } from 'react';
import Modal from '../ui/Modal';
import { trackEvent } from '@/lib/analytics';

interface SimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SimulationModal({ isOpen, onClose }: SimulationModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tracking de Lead capturado
    trackEvent('lead_capture', 'fake_door', email);
    console.log('[FakeDoor] Lead captured:', { email });
    setSubmitted(true);
  };


  return (
    <Modal isOpen={isOpen} onClose={onClose} title="3D Simulation Preview">
      {!submitted ? (
        <div className="space-y-6">
          <div className="flex justify-center text-5xl mb-4">✨</div>
          <p className="text-center text-lg" style={{ color: 'var(--color-text)' }}>
            You're one of the first to discover our <strong>AI-Powered 3D Simulation</strong> feature!
          </p>
          <p className="text-sm opacity-80" style={{ color: 'var(--color-text)' }}>
            We're currently perfecting the Genie 3 integration to let you see EXACTLY how your furniture will look with any paint color and finish in real-time.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text)' }}>
                Get early access when we launch:
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none transition-all"
                style={{ 
                  backgroundColor: 'var(--color-background)',
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-text)'
                 }}
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-lg font-bold shadow-lg transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-background)'
              }}
            >
              Join the Waitlist
            </button>
          </form>
          
          <p className="text-xs text-center opacity-60" style={{ color: 'var(--color-text)' }}>
            Serving the Hamptons with the future of furniture restoration.
          </p>
        </div>
      ) : (
        <div className="py-8 text-center space-y-4">
          <div className="text-5xl">✅</div>
          <h4 className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>You're on the list!</h4>
          <p style={{ color: 'var(--color-text)' }}>
            Thanks for your interest. We'll notify you personally as soon as the 3D simulators are live.
          </p>
          <button
            onClick={onClose}
            className="mt-6 px-8 py-2 rounded-lg border-2 font-medium transition-all"
            style={{ borderColor: 'var(--color-primary)', color: 'var(--color-text)' }}
          >
            Close
          </button>
        </div>
      )}
    </Modal>
  );
}
