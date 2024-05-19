"use client";
import React, { useState, useRef } from 'react';
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchContacts } from '../util/fetch-contact';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    honeypot: string; // Honeypot field
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export default async function ContactForm() {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '', honeypot: '' });
    const [errors, setErrors] = useState<FormErrors>({});
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const contacts = await fetchContacts();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = (): boolean => {
        let tempErrors: FormErrors = {};
        tempErrors.name = formData.name ? "" : "Name is required.";
        tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Email is not valid.";
        tempErrors.subject = formData.subject ? "" : "Subject is required.";
        tempErrors.message = formData.message ? "" : "Message is required.";
        setErrors(tempErrors);

        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm() && recaptchaToken) {
            const response = await fetch("http://127.0.0.1:8000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken,
                }),
            });

            if (response.ok) {
                // Handle successful submission
                toast.success("Form submitted successfully");
                setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' }); // Clear the form
                recaptchaRef.current?.reset(); // Reset the reCAPTCHA
            } else {
                // Handle submission error
                toast.error("Form submission failed");
            }
        } else {
            // If validation or reCAPTCHA fails
            if (!recaptchaToken) {
                toast.error("Please complete the reCAPTCHA");
            }
        }
    };

    const handleRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
    };

    return (
        <div className="mt-96 md:mt-auto md:p-8 w-full md:w-auto">
            <Card className="space-y-6 ">
                <CardHeader>
                    <div className="flex items-center space-x-4">
                        <h2 className="text-2xl font-bold">{contacts?.title}</h2>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <ToastContainer />
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">{contacts?.field_one_text}</Label>
                                <Input className="w-full" id="name" name="name" placeholder={contacts?.field_one_placeholder} required value={formData.name} onChange={handleChange} />
                                {errors.name && <p className="text-red-500">{errors.name}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">{contacts?.field_two_text}</Label>
                                <Input className="w-full" id="email" name="email" type="email" placeholder={contacts?.field_two_placeholder} required value={formData.email} onChange={handleChange} />
                                {errors.email && <p className="text-red-500">{errors.email}</p>}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject">{contacts?.field_three_text}</Label>
                            <Input className="w-full" id="subject" name="subject" placeholder={contacts?.field_three_placeholder} required value={formData.subject} onChange={handleChange} />
                            {errors.subject && <p className="text-red-500">{errors.subject}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">{contacts?.field_four_text}</Label>
                            <Textarea className="w-full min-h-[100px]" id="message" name="message" placeholder={contacts?.field_four_placeholder} required value={formData.message} onChange={handleChange} />
                            {errors.message && <p className="text-red-500">{errors.message}</p>}
                        </div>
                        <Input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} style={{ display: 'none' }} /> {/* Honeypot field */}
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6Lferd4pAAAAACBX17C1isrxYtqg-L7euyBTm1tV"
                            onChange={handleRecaptchaChange}
                            className="mt-10"
                        />
                        <Button type="submit" className="mt-10 w-full">{contacts?.button_text}</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
