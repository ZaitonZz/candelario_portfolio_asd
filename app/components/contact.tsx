"use client"
import React, { useState } from 'react';
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState<FormErrors>({});

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('FormData', formData);
            // Proceed with submitting form data to server or API endpoint
        }
    };

    return (
        <div className="p-8">
            <Card className="space-y-6">
                <CardHeader>
                    <div className="flex items-center space-x-4">
                        <h2 className="text-2xl font-bold">Contact Me</h2>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4"> {/* Modify this line if CardContent is a custom component */}
                    <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input className="w-full" id="name" name="name" placeholder="Enter your name" required value={formData.name} onChange={handleChange} />
                            {errors.name && <p className="text-red-500">{errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input className="w-full" id="email" name="email" type="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} />
                            {errors.email && <p className="text-red-500">{errors.email}</p>}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input className="w-full" id="subject" name="subject" placeholder="Enter the subject" required value={formData.subject} onChange={handleChange} />
                        {errors.subject && <p className="text-red-500">{errors.subject}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea className="w-full min-h-[100px]" id="message" name="message" placeholder="Enter your message" required value={formData.message} onChange={handleChange} />
                        {errors.message && <p className="text-red-500">{errors.message}</p>}
                    </div>
                    <Button type="submit" className="mt-10 w-full">Submit</Button>
                    </form> 
                </CardContent>
            </Card>
        </div>
    );
}
