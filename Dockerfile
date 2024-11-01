# Utilizza un'immagine Node.js come base
FROM node:20

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il resto dell'applicazione
COPY . .

# Espone la porta su cui l'app sarà in esecuzione
EXPOSE 3000

# Comando per avviare l'app in modalità sviluppo
CMD ["npm", "run", "dev"]
