'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input, Textarea, Button, Alert } from '@heroui/react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

// ==========================================
// STEP 1: Define validation schema with Yup
// ==========================================

/**
 * Yup validation schema
 * Defines the rules each form field must follow
 */
const contactSchema = yup.object({
    fullName: yup
        .string()
        .required('Full name is required')
        .min(3, 'Full name must have at least 3 characters')
        .max(100, 'Full name is too long'),
    email: yup
        .string()
        .email('Please enter a valid email address')
        .required('Email is required'),
    message: yup
        .string()
        .required('Message is required')
        .min(10, 'Message must have at least 10 characters'),
});

/**
 * TypeScript type for the form data
 */
interface ContactFormData {
    fullName: string;
    email: string;
    message: string;
}

export default function ContactForm() {
    // State for the Alert
    const [alertData, setAlertData] = useState<{
        type: 'success' | 'error';
        message: string;
    } | null>(null);

    // ==========================================
    // STEP 2: Set up react-hook-form with Yup
    // ==========================================

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: yupResolver(contactSchema),
    });

    // ==========================================
    // STEP 3: Handle form submission
    // ==========================================

    /**
     * This function runs when:
     * 1. The user submits the form
     * 2. Yup validations have passed successfully
     */
    const onSubmit = async (data: ContactFormData) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();

            if (response.ok) {
                //  Success
                setAlertData({
                    type: 'success',
                    message: 'Message sent successfully! I will get back to you soon.',
                });
                reset();
            } else {
                //  Server error
                setAlertData({
                    type: 'error',
                    message:
                        responseData.message ||
                        'There was an error sending your message. Please try again.',
                });
            }
        } catch {
            //  Network error
            setAlertData({
                type: 'error',
                message:
                    'Connection error. Please try again later or check your internet connection.',
            });
        }
    };

    // ==========================================
    // STEP 4: Render the form with HeroUI
    // ==========================================

    return (
        
        <div className="flex flex-col gap-4 w-full">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 w-full"
            >
                {/* Field: Full Name */}
                <Input
                    label="Full Name"
                    placeholder="Ex: David Henao"
                    {...register('fullName')}
                    isInvalid={!!errors.fullName}
                    errorMessage={errors.fullName?.message}
                />

                {/* Field: Email */}
                <Input
                    label="Email"
                    placeholder="Ex: david@example.com"
                    type="email"
                    {...register('email')}
                    isInvalid={!!errors.email}
                    errorMessage={errors.email?.message}
                />

                {/* Field: Message */}
                <Textarea
                    label="Message"
                    placeholder="Write your message here..."
                    {...register('message')}
                    isInvalid={!!errors.message}
                    errorMessage={errors.message?.message}
                />

                {/* Submit button */}
                <Button
                    type="submit"
                    color="primary"
                    isLoading={isSubmitting}
                    className="mt-2"
                >
                    Send Message
                </Button>
        </form>

            {/* Alert for notifications */}
            {alertData && (
                <Alert
                    color={alertData.type === 'success' ? 'success' : 'danger'}
                    title={
                        <div className="flex items-center gap-2">
                            {alertData.type === 'success' ? (
                                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                            ) : (
                                <XCircleIcon className="w-5 h-5 text-red-500" />
                            )}
                            <span>{alertData.message}</span>
                        </div>
                    }
                    onClose={() => setAlertData(null)}
                    isClosable
                />
            )}
        </div>
    );
}
