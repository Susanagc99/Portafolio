import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
    throw new Error('Por favor define la variable de entorno MONGODB_URI en .env.local');
}

interface MongooseConnection {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

// Cache para la conexión a MongoDB
let cached: MongooseConnection = (global as any).mongoose || { conn: null, promise: null };

if (!(global as any).mongoose) {
    (global as any).mongoose = cached;
}

/**
 * Conecta a MongoDB con caché para evitar múltiples conexiones
 */
async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default dbConnect;

