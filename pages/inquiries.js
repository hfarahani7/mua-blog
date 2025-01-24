import { useState } from 'react';

export default function Inquiries() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [status, setStatus] = useState(null);

    async function handleSubmit(e) {
        e.preventDeault();

        try {
            const res = await fetch('/api/send-inquiry', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            });
    
            if (res.ok) {
                setName('');
                setEmail('');
                setMessage('');
                setStatus('success');
            } else {
                throw new Error('Email could not be sent.');
            }
        } catch (error) {
            setStatus('error');
        }
    }

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1>Inquiries</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <label>
            Name:
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                required 
            />
            </label>

            <label>
            Email:
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required 
            />
            </label>

            <label>
            Message:
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                required
            />
            </label>

            <button type="submit">Send Inquiry</button>
        </form>

        {status === 'success' && (
            <p style={{ color: 'green', marginTop: '1rem' }}>
            Thank you! Your inquiry has been sent.
            </p>
        )}
        {status === 'error' && (
            <p style={{ color: 'red', marginTop: '1rem' }}>
            Oops! Something went wrong. Please try again.
            </p>
        )}
        </div>
    );
}