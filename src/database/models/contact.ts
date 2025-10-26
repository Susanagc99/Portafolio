import mongoose, { Schema, Document, Model } from 'mongoose';

/**
 * Interfaz para el documento de ContactMessage en MongoDB
 */
export interface ContactMessageDocument extends Document {
    fullName: string;
    email: string;
    message: string;
    createdAt: Date;
}

/**
 * Esquema de MongoDB para ContactMessage
 */
const contactMessageSchema = new Schema<ContactMessageDocument>(
    {
        fullName: {
            type: String,
            required: [true, 'El nombre es obligatorio'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'El email es obligatorio'],
            trim: true,
            lowercase: true,
        },
        message: {
            type: String,
            required: [true, 'El mensaje es obligatorio'],
            trim: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true, // Esto agrega createdAt automáticamente
    }
);

/**
 * Modelo de ContactMessage
 * Usa mongoose.models para evitar "Cannot overwrite model" errors
 */
const ContactMessage: Model<ContactMessageDocument> = 
    mongoose.models.ContactMessage || 
    mongoose.model<ContactMessageDocument>('ContactMessage', contactMessageSchema);

export default ContactMessage;

