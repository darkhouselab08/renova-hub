'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  phone: string;
  furnitureType: string;
  description: string;
  preferredStyle: 'classic' | 'dark' | 'hybrid' | '';
  photos: File[];
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    furnitureType: '',
    description: '',
    preferredStyle: '',
    photos: []
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [photoPreview, setPhotoPreview] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + formData.photos.length > 5) {
      alert('Maximum 5 photos allowed');
      return;
    }

    setFormData(prev => ({ ...prev, photos: [...prev.photos, ...files] }));
    
    // Create previews
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (index: number) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index)
    }));
    setPhotoPreview(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Integrate with Resend API in Phase 2
      // For now, just simulate submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        furnitureType: '',
        description: '',
        preferredStyle: '',
        photos: []
      });
      setPhotoPreview([]);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text)'
            }}
          >
            Get Your Free <span style={{ color: 'var(--color-primary)' }}>Quote</span>
          </h2>
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto opacity-80"
            style={{ color: 'var(--color-text)' }}
          >
            Tell us about your furniture and we'll provide a detailed estimate within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form 
          onSubmit={handleSubmit}
          className="rounded-2xl p-8 shadow-lg"
          style={{ 
            backgroundColor: 'var(--color-background)',
            border: '1px solid rgba(0,0,0,0.1)'
          }}
        >
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label 
                htmlFor="name"
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--color-text)' }}
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                style={{ 
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-text)'
                }}
                placeholder="John Doe"
              />
            </div>

            <div>
              <label 
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--color-text)' }}
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                style={{ 
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-text)'
                }}
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Phone & Furniture Type */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label 
                htmlFor="phone"
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--color-text)' }}
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                style={{ 
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-text)'
                }}
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label 
                htmlFor="furnitureType"
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--color-text)' }}
              >
                Furniture Type *
              </label>
              <select
                id="furnitureType"
                name="furnitureType"
                required
                value={formData.furnitureType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                style={{ 
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-text)'
                }}
              >
                <option value="">Select type...</option>
                <option value="dresser">Dresser</option>
                <option value="nightstand">Nightstand</option>
                <option value="desk">Desk</option>
                <option value="cabinet">Cabinet</option>
                <option value="buffet">Buffet/Sideboard</option>
                <option value="table">Table</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Preferred Style */}
          <div className="mb-6">
            <label 
              htmlFor="preferredStyle"
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--color-text)' }}
            >
              Preferred Style
            </label>
            <select
              id="preferredStyle"
              name="preferredStyle"
              value={formData.preferredStyle}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
              style={{ 
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-primary)',
                color: 'var(--color-text)'
              }}
            >
              <option value="">Not sure yet...</option>
              <option value="classic">Classic Luxury (Whites, Creams)</option>
              <option value="dark">Dark Luxury (Navy, Charcoal, Green)</option>
              <option value="hybrid">Heritage (Sage, Gray-Blue)</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label 
              htmlFor="description"
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--color-text)' }}
            >
              Project Description *
            </label>
            <textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
              style={{ 
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-primary)',
                color: 'var(--color-text)'
              }}
              placeholder="Tell us about your furniture piece and what you'd like to achieve..."
            />
          </div>

          {/* Photo Upload */}
          <div className="mb-8">
            <label 
              className="block text-sm font-medium mb-2"
              style={{ color: 'var(--color-text)' }}
            >
              Upload Photos (Optional, max 5)
            </label>
            <div 
              className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:opacity-80 transition-opacity"
              style={{ borderColor: 'var(--color-primary)' }}
              onClick={() => document.getElementById('photo-upload')?.click()}
            >
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
                className="hidden"
              />
              <svg 
                className="w-12 h-12 mx-auto mb-3 opacity-60" 
                fill="none" 
                stroke="var(--color-primary)" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p style={{ color: 'var(--color-text)' }} className="opacity-70">
                Click to upload or drag and drop
              </p>
              <p style={{ color: 'var(--color-text)' }} className="text-sm opacity-50 mt-1">
                PNG, JPG up to 10MB each
              </p>
            </div>

            {/* Photo Previews */}
            {photoPreview.length > 0 && (
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-4">
                {photoPreview.map((preview, index) => (
                  <div key={index} className="relative group">
                    <Image
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      width={100}
                      height={100}
                      className="rounded-lg object-cover w-full h-24"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            style={{ 
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-background)'
            }}
          >
            {isSubmitting ? 'Sending...' : 'Get Free Quote'}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div 
              className="mt-4 p-4 rounded-lg text-center"
              style={{ backgroundColor: '#10b981', color: 'white' }}
            >
              ✓ Thank you! We'll send your quote within 24 hours.
            </div>
          )}
          {submitStatus === 'error' && (
            <div 
              className="mt-4 p-4 rounded-lg text-center"
              style={{ backgroundColor: '#ef4444', color: 'white' }}
            >
              ✗ Something went wrong. Please try again or email us directly.
            </div>
          )}
        </form>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p 
            className="text-sm opacity-70 mb-2"
            style={{ color: 'var(--color-text)' }}
          >
            Prefer to call or email?
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="tel:+15551234567"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{ color: 'var(--color-primary)' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (555) 123-4567
            </a>
            <a 
              href="mailto:info@renovahub.com"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{ color: 'var(--color-primary)' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@renovahub.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
