# Configurazione Email con Resend

## Passi per configurare l'invio email:

### 1. Crea un account Resend
Vai su [https://resend.com](https://resend.com) e registrati gratuitamente.

### 2. Ottieni la tua API Key
1. Accedi al tuo account Resend
2. Vai su **API Keys** nel menu
3. Clicca su **Create API Key**
4. Copia la chiave generata (inizia con `re_`)

### 3. Configura la chiave API
Apri il file `.env.local` nella root del progetto e sostituisci `re_tua_api_key_qui` con la tua chiave API:

```env
RESEND_API_KEY=re_la_tua_chiave_api_vera
```

### 4. Configura il dominio email (Opzionale ma consigliato)
Per produzione, dovresti:
1. Verificare il tuo dominio su Resend
2. Aggiornare l'indirizzo `from` nel file `src/app/api/send-email/route.ts`:
   ```typescript
   from: 'De Criso Jewelry <noreply@decriso.com>',
   ```

Per testare, puoi usare l'indirizzo di default di Resend:
```typescript
from: 'De Criso Jewelry <onboarding@resend.dev>',
```

### 5. Riavvia il server di sviluppo
Dopo aver configurato `.env.local`, riavvia il server:

```bash
npm run dev
```

### 6. Testa il form di contatto
Vai alla pagina Contact o Shop e invia un messaggio di prova!

## Note importanti:
- ⚠️ **NON committare** il file `.env.local` su Git (è già nel `.gitignore`)
- 📧 Le email verranno inviate a `info@decriso.com` (modificabile in `route.ts`)
- 🆓 Resend offre 100 email gratuite al giorno
- 📝 Per produzione, considera di verificare il tuo dominio personalizzato

## Troubleshooting

Se ricevi errori:
1. Verifica che la chiave API sia corretta in `.env.local`
2. Controlla la console del browser per errori
3. Verifica i log del server per dettagli sull'errore
4. Assicurati di aver riavviato il server dopo aver modificato `.env.local`
