import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbconnection';
import ContactMessage from '@/database/models/contact';

/**
 * API Route POST: Guardar mensaje de contacto
 */
export async function POST(request: NextRequest) {
    try {
        // Conectar a la base de datos
        await dbConnect();

        // Obtener datos del body
        const body = await request.json();
        const { fullName, email, message } = body;

        // Validación básica
        if (!fullName || !email || !message) {
            return NextResponse.json(
                { message: 'Todos los campos son obligatorios' },
                { status: 400 }
            );
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { message: 'El formato del email no es válido' },
                { status: 400 }
            );
        }

        // Crear nuevo mensaje
        const newMessage = await ContactMessage.create({
            fullName,
            email,
            message,
        });

        return NextResponse.json(
            { 
                message: 'Mensaje guardado exitosamente',
                data: newMessage 
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error al guardar mensaje:', error);
        
        return NextResponse.json(
            { message: 'Error al guardar el mensaje. Por favor, intenta más tarde.' },
            { status: 500 }
        );
    }
}

/**
 * API Route GET: Obtener todos los mensajes (opcional, para admin)
 */
export async function GET() {
    try {
        await dbConnect();

        const messages = await ContactMessage.find()
            .sort({ createdAt: -1 })
            .limit(50)
            .lean();

        return NextResponse.json(
            { messages },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error al obtener mensajes:', error);
        
        return NextResponse.json(
            { message: 'Error al obtener los mensajes' },
            { status: 500 }
        );
    }
}
