import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validazione base
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nome, email e messaggio sono obbligatori' },
        { status: 400 }
      );
    }

    // Invio email con Resend
    const { data, error } = await resend.emails.send({
      from: 'De Criso Jewelry <onboarding@resend.dev>', // Cambia con il tuo dominio verificato
      to: ['info@decriso.com'], // Email dove ricevere le richieste
      replyTo: email, // Email del cliente per rispondere facilmente
      subject: `Nuovo messaggio da ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B1F3A; border-bottom: 3px solid #0B1F3A; padding-bottom: 10px;">
            Nuovo messaggio dal sito De Criso Jewelry
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #0B1F3A;">Nome:</strong> ${name}
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #0B1F3A;">Email:</strong> 
              <a href="mailto:${email}" style="color: #0B1F3A;">${email}</a>
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #0B1F3A;">Telefono:</strong> ${phone || 'Non fornito'}
            </p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong style="color: #0B1F3A;">Messaggio:</strong></p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Questo messaggio è stato inviato dal form di contatto del sito web De Criso Jewelry.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Errore Resend:', error);
      return NextResponse.json(
        { error: 'Errore durante l\'invio dell\'email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Email inviata con successo!', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Errore invio email:', error);
    return NextResponse.json(
      { error: 'Errore durante l\'invio dell\'email' },
      { status: 500 }
    );
  }
}
